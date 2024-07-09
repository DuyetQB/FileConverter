'use client'
import React, { useState } from 'react';
import { Button, List, message, Select, Upload } from 'antd';
import axios from 'axios';
import { RcFile, UploadProps } from 'antd/lib/upload/interface';
import { DownloadOutlined } from '@ant-design/icons';
import { IconAudio, IconUpload } from '../icons/IconImage';
import { BaseSource } from "../common"
import { optionAudio } from '@/app/data/dataAudiosService';
import { getStringSide } from '@/app/utils/string';
import { useRouter, useParams } from 'next/navigation';

const { Dragger } = Upload;
const { Option } = Select;

type Params = {
    slug: string
}


const UploadFileAudio: React.FC = () => {

    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
    const params: Params = useParams();
    const router = useRouter()

    const handleFormatFromChange = (value: any) => {
        router.push(`/audios/${value}-to-${getStringSide("right", params.slug)}`)
    };

    const handleFormatToChange = (value: any) => {
        router.push(`/audios/${getStringSide("left", params.slug)}-to-${value}`)
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
        customRequest: async ({ file, onSuccess, onError, onProgress }: any) => {
            const formData = new FormData();
            formData.append('audio', file as RcFile);
            //append formatTo type
            formData.append('format', getStringSide("right", params.slug));

            try {
                const response = await axios.post(`${BaseSource.baseUrl}/convert-audio`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (event: any) => {
                        if (onProgress) {
                            onProgress({ percent: (event.loaded / event.total) * 100 });
                        }
                    },
                });
                onSuccess?.(response.data);
                const res = {
                    url: response.data.url,
                    fileName: `${(file as RcFile).name}`,
                    file: response.data.file
                }

                setUploadedFiles((prevFiles) => [...prevFiles, res]);
                message.success(`${(file as RcFile).name} file uploaded and converted successfully.`);

                setTimeout(() => {
                    window.location.reload();
                }, 5 * 60 * 1000); // 5 minutes
            } catch (error: any) {
                onError?.(error);
                message.error(`${(file as RcFile).name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleDownload = async (filename: any) => {

        try {
            const response = await axios.get(`${BaseSource.baseUrl}/download-audio/${filename}`, {
                responseType: 'blob', // Important for downloading files
            });

            // Create a URL for the downloaded blob and initiate download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link: any = document.createElement('a');
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
                    <h1 className="text-[2em] font-bold">Audio File Converter</h1>
                    <p>Convert audio files from {getStringSide("left", params.slug)} to {getStringSide("right", params.slug)} online and free</p>
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <div className="flex justify-end items-center gap-2">
                        <Select defaultValue={getStringSide("left", params.slug)} style={{ width: 120 }} onChange={handleFormatFromChange}>
                            {optionAudio.map((record) => (
                                <Option value={record.value} key={record.id}>{record.name}</Option>
                            ))}
                        </Select>
                        <h3 className="text-black zIndex-2">To</h3>
                        <Select defaultValue={getStringSide("right", params.slug)} style={{ width: 120 }} onChange={handleFormatToChange}>
                            {optionAudio.map((record) => (
                                <Option value={record.value} key={record.id}>{record.name}</Option>
                            ))}
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
                            renderItem={(item, index) => {

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
                                        <div className="flex justify-center items-center gap-3 truncate">
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
