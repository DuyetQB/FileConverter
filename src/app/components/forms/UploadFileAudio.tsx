'use client'
import React, { useState } from 'react';
import { Button, List, message, Select, Upload } from 'antd';
import axios from 'axios';
import { RcFile, UploadProps } from 'antd/lib/upload/interface';
import { DownloadOutlined } from '@ant-design/icons';
import { IconAudio, IconUpload } from '../icons/IconImage';
import { BaseSource } from "../common"

const { Dragger } = Upload;
const { Option } = Select;

const UploadFileAudio: React.FC = () => {
    const [formatFrom, setFormatFrom] = useState('mp3');
    const [formatTo, setFormatTo] = useState('wav');
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

    const handleFormatFromChange = (value: string) => {
        setFormatFrom(value);
    };

    const handleFormatToChange = (value: string) => {
        setFormatTo(value);
    };

    const props: UploadProps = {
        name: 'audio',
        multiple: true,
        beforeUpload: async (file) => {
            
            if (!file.type.startsWith('audio/')) {
                message.error(`${file.name} is not an audio file.`);
                return Upload.LIST_IGNORE;
            }
            return true;
        },
        customRequest: async ({ file, onSuccess, onError, onProgress }:any) => {
            const formData = new FormData();
            formData.append('audio', file as RcFile);
            formData.append('format', formatTo);

            try {
                const response = await axios.post(`${BaseSource.baseUrl}/convert-audio`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (event:any) => {
                        if (onProgress) {
                            onProgress({ percent: (event.loaded / event.total) * 100 });
                        }
                    },
                });
                onSuccess?.(response.data);
                const res = {
                    url:response.data.url,
                    fileName:`${(file as RcFile).name}`,
                    file:response.data.file
                }
                
                setUploadedFiles((prevFiles) => [...prevFiles, res]);
                message.success(`${(file as RcFile).name} file uploaded and converted successfully.`);
                
                setTimeout(() => {
                    window.location.reload();
                }, 5 * 60 * 1000); // 5 minutes
            } catch (error:any) {
                onError?.(error);
                message.error(`${(file as RcFile).name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleDownload = async (filename:any) => {
        
        try {
            const response = await axios.get(`${BaseSource.baseUrl}/download-audio/${filename}`, {
                responseType: 'blob', // Important for downloading files
            });

            // Create a URL for the downloaded blob and initiate download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link:any = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    }; 

    return (
        <div>
            <div>
               <div className="pb-[4rem]">
                <h1 className="text-[2em]">Audio File Converter</h1>
                <p>Convert audio files from {formatFrom} to {formatTo} online and free</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <div className="flex justify-end items-center gap-2">
                    <Select defaultValue="mp3" style={{ width: 120 }} onChange={handleFormatFromChange}>
                        <Option value="mp3">MP3</Option>
                        <Option value="wav">WAV</Option>
                        <Option value="ogg">OGG</Option>
                        <Option value="m4a">M4A</Option>
                        <Option value="aac">AAC</Option>
                    </Select>
                    <h3 className="text-black dark:text-white zIndex-2">To</h3>
                    <Select defaultValue="wav" style={{ width: 120  }} onChange={handleFormatToChange}>
                        <Option value="mp3">MP3</Option>
                        <Option value="wav">WAV</Option>
                        <Option value="ogg">OGG</Option>
                        <Option value="m4a">M4A</Option>
                        <Option value="aac">AAC</Option>
                    </Select>
                </div>
                <div>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon flex justify-center">
                            <IconUpload />
                        </p>
                        <p className="ant-upload-text">Drag & drop audio files or Browse</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Dragger>
                </div>
            </div>
           {uploadedFiles.length > 0 && (
                <div className="py-[5rem]">
                    <h3 className="text-[2em]">List of Converted Files</h3>
                    <List
                        style={{ marginTop: 16 }}
                        bordered
                        dataSource={uploadedFiles}
                        renderItem={(item,index) => {
                            const fileName = item.fileName.replace(`.${formatFrom}`,`.${formatTo}`);

                            return (
                                <List.Item
                                key={index}
                                    actions={[
                                        <a key="list-loadmore-download" >
                                            <Button icon={<DownloadOutlined />}
                                       onClick={() => handleDownload(item.file)}
                                            >Download</Button>
                                        </a>
                                    ]}
                                >
                                    <div className="flex justify-center items-center gap-3">
                                       <IconAudio />
                                        {item.file}
                                    </div>
                                </List.Item>
                            );
                        }}
                    />
                </div>
            )}   
            </div>
          
        </div>
    );
};

export default UploadFileAudio;
