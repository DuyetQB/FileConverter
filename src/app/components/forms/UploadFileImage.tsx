// 'use client'
// import React, { useState } from 'react';
// import type { UploadProps } from 'antd';
// import { Button, List, message, Select, Upload } from 'antd';
// import axios from 'axios';
// import type { RcFile } from 'rc-upload/lib/interface';
// import { DownloadOutlined } from '@ant-design/icons';
// import { IconImage, IconUpload } from '../icons/IconImage';
// import { BaseSource } from '../common';
// import { optionImage } from '@/app/data/dataImagesService';
// import { useRouter, useParams } from 'next/navigation'
// import { getStringSide } from '@/app/utils/string';

// const { Dragger } = Upload;
// const { Option } = Select;

// type Params = {
//     slug: string
// }

// const UploadFileImage: React.FC = () => {
//     const [uploadedImages, setUploadedImages] = useState<any>([]);
//     const router = useRouter()
//     const params: Params = useParams();

//     const handleFormatFromChange = (value: any) => {
//         router.push(`/images/${value}-to-${getStringSide("right", params.slug)}`)
//     };

//     const handleFormatToChange = (value: any) => {
//         router.push(`/images/${getStringSide("left", params.slug)}-to-${value}`)
//     };

//     const props: UploadProps = {
//         name: 'file',
//         multiple: true,
//         beforeUpload: async (file, fileList) => {
//             console.log("beforeUpload", file);
//             if (file.type !== `image/${getStringSide("left", params.slug)}`) {
//                 message.error(`${file.name} file upload is not ${getStringSide("left", params.slug)} file`);
//                 return;
//             }
//         },
//         onChange(info) {
//             const { status } = info.file;
//             if (status !== 'uploading') {
//                 message.info(`${info.file.name} file uploading...`);
//             }

//             if (status === 'done') {
//                 message.success(`${info.file.name} file uploaded successfully.`);
//             } else if (status === 'error') {
//                 message.error(`${info.file.name} file upload failed.`);
//             }
//         },
//         customRequest: async (options: any) => {
//             const { file, onSuccess, onError, onProgress } = options;
//             // check format from type
//             if (file?.type !== `image/${getStringSide("left", params.slug)}`) {
//                 return;
//             }

//             if (!(file instanceof Blob) && onError) {
//                 return onError(new Error('File is not a Blob'));
//             }

//             const formData = new FormData();
//             formData.append('images', file as RcFile);
//             //append formatTo type
//             formData.append('format', getStringSide("right", params.slug));

//             console.log("formData:",formData.getAll("images"));

//             try {
//                 const response = await axios.post(`${BaseSource.baseUrl}/upload`, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                     onUploadProgress: (event: any) => {
//                         if (onProgress) {
//                             onProgress({ percent: (event.loaded / event.total) * 100 });
//                         }
//                     },
//                 });
//                 onSuccess?.(response.data);
//                 setUploadedImages((prevImages: any) => [...prevImages, ...response.data.files]);
//                 message.success(`${(file as RcFile).name} file uploaded successfully.`);

//                 setTimeout(() => {
//                     window.location.reload();
//                 }, 5 * 60 * 1000); // 5 minutes

//             } catch (error: any) {
//                 onError?.(error);
//                 message.error(`${(file as RcFile).name} file upload failed.`);
//             }
//         },
//         onDrop(e) {
//             console.log('Dropped files', e.dataTransfer.files);
//         },
//     };


//     return (
//         <div>
//             <div className="pb-[4rem]">
//                 <h1 className="text-[2em] font-bold">Tool convert file {getStringSide("left", params.slug)} to {getStringSide("right", params.slug)}</h1>
//                 <p>Convert file {getStringSide("left", params.slug)} to {getStringSide("right", params.slug)} online and free</p>
//             </div>
//             <div className='flex flex-col justify-center gap-3'>
//                 <div className='flex justify-end items-center gap-2'>
//                     <Select defaultValue={getStringSide("left", params.slug)} style={{ width: 120 }} onChange={handleFormatFromChange}>
//                         {optionImage.map((record) => (
//                             <Option value={record.value} key={record.id}>{record.name}</Option>
//                         ))}
//                     </Select>
//                     <h3 className='text-black zIndex-2'>To</h3>
//                     <Select defaultValue={getStringSide("right", params.slug)} style={{ width: 120 }} onChange={handleFormatToChange}>
//                         {optionImage.map((record) => (
//                             <Option value={record.value} key={record.id}>{record.name}</Option>
//                         ))}
//                     </Select>
//                 </div>
//                 <div>
//                     <Dragger {...props}>
//                         <p className="ant-upload-drag-icon flex justify-center">
//                             <IconUpload />

//                         </p>
//                         <p className="ant-upload-text">Drag & drop files or Browse</p>
//                         <p className="ant-upload-hint">
//                             Support for a single or bulk upload.
//                         </p>
//                     </Dragger>
//                 </div>

//             </div>
//             {uploadedImages.length > 0 && (
//                 <div className='py-[5rem] pb-[8rem]'>
//                     <h3 className='text-[2em]'>List files to download</h3>
//                     <List
//                         style={{ marginTop: 16 }}
//                         bordered
//                         dataSource={uploadedImages}
//                         renderItem={(item: any) => {
//                             const fileName = item.split('/').pop();

//                             return (
//                                 <List.Item
//                                     actions={[
//                                         <a href={`${BaseSource.baseUrl}/download?name=${fileName}`} key="list-loadmore-download">
//                                             <Button icon={<DownloadOutlined />}>Download</Button>
//                                         </a>
//                                     ]}
//                                 >
//                                     <div className='flex justify-center items-center gap-3 truncate'>

//                                         <IconImage />
//                                         {fileName}
//                                     </div>
//                                 </List.Item>
//                             );
//                         }}
//                     />

//                 </div>
//             )}
//         </div>

//     )
// }


// export default UploadFileImage;


'use client';

import React from 'react';
import { Select } from 'antd';
import { optionImage } from '@/app/data/dataImagesService';
import { useRouter, useParams } from 'next/navigation';
import { getStringSide } from '@/app/utils/string';
import FileUpload from './FileUpload';

const { Option } = Select;

type Params = {
    slug: string
};


const UploadFileImage: React.FC = () => {

    const router = useRouter();
    const params: Params = useParams();

    const handleFormatFromChange = (value: any) => {
        router.push(`/images/${value}-to-${getStringSide('right', params.slug)}`);
    };

    const handleFormatToChange = (value: any) => {
        router.push(`/images/${getStringSide('left', params.slug)}-to-${value}`);
    };


    return (
        <div>
            <div className="pb-[4rem]">
                <h1 className="text-[2em] font-bold">
                    Tool convert file {getStringSide('left', params.slug)} to {getStringSide('right', params.slug)}
                </h1>
                <p>
                    Convert file {getStringSide('left', params.slug)} to {getStringSide('right', params.slug)} online and free
                </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <div className="flex justify-end items-center gap-2">
                    <Select defaultValue={getStringSide('left', params.slug)} style={{ width: 120 }} onChange={handleFormatFromChange}>
                        {optionImage.map((record) => (
                            <Option value={record.value} key={record.id}>
                                {record.name}
                            </Option>
                        ))}
                    </Select>
                    <h3 className="text-black zIndex-2">To</h3>
                    <Select defaultValue={getStringSide('right', params.slug)} style={{ width: 120 }} onChange={handleFormatToChange}>
                        {optionImage.map((record) => (
                            <Option value={record.value} key={record.id}>
                                {record.name}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div>
                    <FileUpload slug={params.slug} />
                </div>
            </div>

        </div>
    );
};

export default UploadFileImage;