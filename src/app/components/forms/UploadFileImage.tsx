'use client';
import React from 'react';
import { Select } from 'antd';
import { optionImage } from '@/app/data/dataImagesService';
import { useRouter, useParams } from 'next/navigation';
import { getStringSide } from '@/app/utils/string';
import FileUpload from './FileUpload';
import { useBrowser } from '@/app/utils/function';
import dynamic from 'next/dynamic';
const AlertMessage = dynamic(() => import('../AlertMessage'), { ssr: false })

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
        <>
            <div className="pb-[4rem]">
                <h1 className="text-[2em] font-bold">
                    Tool convert file {getStringSide('left', params.slug)} to {getStringSide('right', params.slug)}
                </h1>
                <p>
                    Convert file {getStringSide('left', params.slug)} to {getStringSide('right', params.slug)} online and free
                </p>

                <div className='flex justify-center py-2'>
                    {useBrowser() === 'Apple Safari' ? (
                        <AlertMessage />
                    ) : (
                        <></>
                    )}
                </div>
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

        </>
    );
};

export default UploadFileImage;