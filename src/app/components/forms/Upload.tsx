'use client'
import React, { useState } from 'react';
import type { UploadProps } from 'antd';
import { Button, List, message, Select, Upload } from 'antd';
import axios from 'axios';
import type { RcFile, UploadRequestOption } from 'rc-upload/lib/interface';
import { DownloadOutlined } from '@ant-design/icons';
import { IconImage, IconUpload } from '../icons/IconImage';

const { Dragger } = Upload;
const { Option } = Select;



const UploadFile: React.FC = () => {
    const [formatFrom, setFormatFrom] = useState('jpeg');
    const [formatTo, setFormatTo] = useState('webp');
    const [uploadedImages, setUploadedImages] = useState<any>([]);
    const handleFormatFromChange = (value: any) => {
        setFormatFrom(value);
    };

    const handleFormatToChange = (value: any) => {
        setFormatTo(value);
    };

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                console.log("status", status);

                message.error(`${info.file.name} file upload failed.`);
            }
        },
        customRequest: async (options: UploadRequestOption) => {
            const { file, onSuccess, onError, onProgress } = options;

            if (!(file instanceof Blob) && onError) {
                return onError(new Error('File is not a Blob'));
            }

            const formData = new FormData();
            formData.append('images', file as RcFile);
            formData.append('format', formatTo);
            try {
                const response = await axios.post('https://file-converter-api.onrender.com/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (event: any) => {
                        if (onProgress) {
                            onProgress({ percent: (event.loaded / event.total) * 100 });
                        }
                    },
                });
                onSuccess?.(response.data);
                setUploadedImages((prevImages: any) => [...prevImages, ...response.data.files]);
                message.success(`${(file as RcFile).name} file uploaded successfully.`);

                setTimeout(() => {
                    window.location.reload();
                }, 30 * 60 * 1000); // 30 minutes

            } catch (error: any) {
                onError?.(error);
                message.error(`${(file as RcFile).name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };


    return (
        <div>
            <div className="pb-[4rem]">
                <h1 className="text-[2em]">Tool convert {formatFrom} to {formatTo}</h1>
                <p>Convert file {formatFrom} to {formatTo} online and free</p>
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <div className='flex justify-end items-center gap-2'>
                    <Select defaultValue="jpeg" style={{ width: 120 }} onChange={handleFormatFromChange}>
                        <Option value="jpeg">JPEG</Option>
                        <Option value="png">PNG</Option>
                        <Option value="webp">WEBP</Option>
                    </Select>
                    <h3>To</h3>
                    <Select defaultValue="webp" style={{ width: 120 }} onChange={handleFormatToChange}>
                        <Option value="jpeg">JPEG</Option>
                        <Option value="png">PNG</Option>
                        <Option value="webp">WEBP</Option>
                    </Select>
                </div>
                <div>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon flex justify-center">
                            <IconUpload />

                        </p>
                        <p className="ant-upload-text">Drag & drop files or Browse</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload.
                        </p>
                    </Dragger>
                </div>

            </div>
            {uploadedImages.length > 0 && (
                <div className='py-[5rem]'>
                    <h3 className='text-[2em]'>List files to download</h3>
                    <List
                        style={{ marginTop: 16 }}
                        bordered
                        dataSource={uploadedImages}
                        renderItem={(item: any) => {
                            const fileName = item.split('/').pop();

                            return (
                                <List.Item
                                    actions={[
                                        <a href={`https://file-converter-api.onrender.com/download?name=${fileName}`} key="list-loadmore-download">
                                            <Button icon={<DownloadOutlined />}>Download</Button>
                                        </a>
                                    ]}
                                >
                                    <div className='flex justify-center items-center gap-3'>

                                        <IconImage />
                                        {fileName}
                                    </div>
                                </List.Item>
                            );
                        }}
                    />

                </div>
            )}
        </div>

    )
}


export default UploadFile;