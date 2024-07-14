// components/FileUpload.js
"use client"
import { useState, useEffect } from 'react';
import { openDB } from 'idb';
import imageCompression from 'browser-image-compression';
import { convertToFormat, formatFileSize } from '@/app/utils/function';
import { IconImage, IconUpload } from '../icons/IconImage';
import { ArrowRightOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { getStringSide, sliceStringLength } from '@/app/utils/string';
import { message } from 'antd';

let dbPromise: any;

if (typeof window !== 'undefined') {
  dbPromise = openDB('file-storage', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('files')) {
        db.createObjectStore('files', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

type FileData = {
  id: number,
  fileName: string,
  link: string
}
type FileUploadProps = {
  slug: string
}

const FileUpload = (props: FileUploadProps) => {

  const { slug } = props
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [fileData, setFileData] = useState<FileData[]>([]);
  const [isConvert, setIsConvert] = useState(false);

  const handleFileChange = (event: any) => {
    const newDataFile = Array.from(event.target.files)
    setSelectedFiles((prev: any) => [...prev, ...newDataFile]);
  };

  const handleFileUpload = async () => {
    if (selectedFiles.length > 0 && dbPromise) {
      try {
        const options = {
          maxSizeMB: 1,
          useWebWorker: true,
          // onProgress: (p: number) => setProgress((prevProgress) => Math.max(prevProgress, p)),
        };

        for (const file of selectedFiles) {
          if (file.type !== `image/${getStringSide("left", slug)}`) {
            message.error(`${file.name} file upload is not ${getStringSide("left", slug)} file`);
            return;
          }

          const compressedFile = await imageCompression(file, options);
          const finalFile: any = await convertToFormat(compressedFile, `image/${getStringSide("right", slug)}`);

          const db = await dbPromise;
          const tx = db.transaction('files', 'readwrite');
          const store = tx.objectStore('files');

          await store.add({ file: finalFile, name: finalFile.name, status: 100 });
          await tx.done;

          setIsConvert(!isConvert);
          setSelectedFiles([])
          handleFileRetrieve()

        }

      } catch (error) {
        console.error('Error compressing and storing image:', error);
      }
    }
  };


  const handleFileRetrieve = async () => {
    if (dbPromise) {
      const db = await dbPromise;
      const tx = db.transaction('files', 'readonly');
      const store = tx.objectStore('files');
      const allFiles = await store.getAll();

      const getAllFile = allFiles?.map((record: any) => {
        const url = URL.createObjectURL(record.file);
        return {
          id: record.id,
          fileName: record.name,
          link: url,
          size: record.file.size,
          status: record.status
        }

      })
      setFileData(() => [...getAllFile]);

      console.log('File retrieved from IndexedDB', allFiles);
    }
  };

  const handleFileDelete = async (id: number) => {
    if (dbPromise) {
      try {
        const db = await dbPromise;
        const tx = db.transaction('files', 'readwrite');
        const store = tx.objectStore('files');
        await store.delete(id);
        await tx.done;

        // Remove from state
        setFileData(fileData.filter(file => file.id !== id))
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    }
  };

  const handleFileSelectedDelete = (id: number) => {
    const index = selectedFiles.filter((file: any, index: number) => index !== id)
    setSelectedFiles(index)
  };

  useEffect(() => {
    // This effect ensures the dbPromise is initialized on the client-side
    if (!dbPromise && typeof window !== 'undefined') {
      dbPromise = openDB('file-storage', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('files')) {
            db.createObjectStore('files', { keyPath: 'id', autoIncrement: true });
          }
        },
      });
    }
  }, []);

  function dropHandler(ev: any) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {

      const dataFileTransfer = [...ev.dataTransfer.items].map((rc, i) => {
        if (rc.kind === "file") {
          return rc.getAsFile();
        }
      })

      setSelectedFiles((prev: any) => [...prev, ...Array.from(dataFileTransfer)]);

    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }

  function dragOverHandler(ev: any) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  useEffect(() => {
    if (selectedFiles.length > 0 && fileData.length === 0) {

      setIsConvert(false)
    }
    if (selectedFiles.length > 0 && fileData.length > 0) {
      setIsConvert(false)
    }

  }, [fileData, selectedFiles])


  const renderMainInput = () => {
    if (selectedFiles.length > 0) {
      return 'hidden'
    }
    if (fileData.length > 0) {
      return 'hidden'
    }
    return ''

  }

  const handleDownload = (url:string, filename:string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <label htmlFor='input' role="button"
        className={`w-full h-full table rounded-[8px] p-4 outline-none border-dashed border-gray border-[1px] hover:border-blue transition border delay-150 bg-bgUpload ${renderMainInput()}`}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        <input type="file" onChange={handleFileChange} multiple className='hidden' id="input" value={''} />
        <p className="flex justify-center my-3">
          <IconUpload />
        </p>
        <p className="ant-upload-text">Drag & drop files or Browse</p>
        <p className="upload-hint text-hint text-[14px] my-2">Support for a single or bulk upload.</p>
      </label>

      <>
        {fileData?.map((rc: any, index: number) => (
          <div key={index} className='shadow flex justify-between items-center py-3 rounded-[8px]'>
            <div className='flex-1'>
              <div className='flex items-center'>
                <IconImage />
                <p>{sliceStringLength(rc.fileName, 20)}</p>
              </div>
            </div>
            <div className='flex-1'>
              <div className='flex justify-between items-center '>
                {rc.status === 0 && (
                  <span className='text-green text-[0.6em] border-[1px] px-[3px] rounded-[3px]'>READY</span>
                )}
                {rc.status > 0 && rc.status < 100 && (
                  <span className='text-green text-[0.6em] border-[1px] px-[3px] rounded-[3px]'>Processing...</span>
                )}
                {rc.status === 100 && (
                  <span className='text-blue text-[0.6em] border-[1px] px-[3px] rounded-[3px]'>Finished</span>
                )}
                <span className='text-grayDark text-[0.7em]'>
                  <strong className='uppercase'>{getStringSide("right", slug)}</strong>/{formatFileSize(rc.size, 2)}
                </span>
                <div className='flex flex-wrap gap-1'>

                  <a
                  role='button'
                  onClick={() => handleDownload(rc.link,rc.fileName)}
                  className='text-white bg-primary-600 hover:bg-primary-700 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-3  py-2 lg:py-2.5 mr-2 dark:hover:bg-grey focus:outline-none dark:focus:ring-gray-800'
                  >Download</a>
                  <button onClick={() => handleFileDelete(rc.id)} className='text-red mx-3'
                    title="delete"
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </>

      <>
        {selectedFiles.map((rc: any, index: number) => (
          <div key={index} className='shadow flex justify-between items-center py-3 rounded-[8px]'>
            <div className='flex-1'>
              <div className='flex items-center'>
                <IconImage />
                <p>
                  {sliceStringLength(rc.name, 20)}
                </p>
              </div>
            </div>
            <div className='flex-1'>
              <div className='flex justify-between items-center '>
                <span className='text-green text-[0.6em] border-[1px] px-[3px] rounded-[3px]'>READY</span>
                <span className='text-grayDark text-[0.7em]'><strong className='uppercase'>{getStringSide("left", slug)}</strong>/{formatFileSize(rc.size, 2)}</span>

                <button onClick={() => handleFileSelectedDelete(index)} className='text-red mx-3'
                  title="delete"
                >
                  <DeleteOutlined />
                </button>
              </div>

            </div>
          </div>
        ))}
      </>


      {selectedFiles.length > 0 && (
        <div className='flex justify-between my-5'>

          <label htmlFor={isConvert ? '' : 'input'} role={isConvert ? '' : 'button'}
            className={`table rounded-[8px] p-4 outline-none border-dashed border-gray border-[1px] hover:border-blue transition border delay-150  ${isConvert ? 'bg-grayDark' : 'bg-bgUpload'}`}
          >
            <PlusOutlined />
            <span className='ml-3'>Add more files</span>

          </label>
          <button className={`text-white ${isConvert ? 'bg-grayDark' : 'bg-primary-600 hover:bg-primary-700'} dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-6 py-4 lg:py-2.5 mr-2 dark:hover:bg-grey focus:outline-none dark:focus:ring-gray-800`}
            onClick={handleFileUpload}
            disabled={isConvert}
          >
            <span className="mr-3">Convert</span>
            <ArrowRightOutlined />
          </button>

        </div>
      )}
    </div>
  );
};

export default FileUpload;
