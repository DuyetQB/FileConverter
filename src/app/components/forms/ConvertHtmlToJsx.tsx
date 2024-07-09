"use client"
import React, { useState } from 'react'
import { IconCopy } from '../icons/IconImage'
import { convert } from "../libs/index"

export default function ConvertHtmlToJsx() {

    const [inputFrom, setInPutFrom] = useState('')
    const [isCopySuccess, setCopySuccess] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(inputFrom);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000); // Reset the copied state after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div>
            <div className="pb-[4rem]">
                <h1 className="text-[2em] font-bold">Convert html to jsx</h1>
                <p>Convert html to jsx online and free. Super fast</p>
            </div>
            <div className='flex justify-end'>

                <a onClick={
                    handleCopy
                } className="flex items-center justify-center gap-2 cursor-pointer text-white bg-primary-500 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-1.5 mr-2 dark:hover:bg-grey focus:outline-none dark:focus:ring-gray-800">
                    <IconCopy />
                    {isCopySuccess ? 'Copied!' : 'Copy'}
                </a>
            </div>
            <div className='flex justify-center'>

                <div className='flex-1 p-2 h-screen'>
                    <textarea className='border-2 w-full min-h-[300px] p-2 resize-none' placeholder='Place the html code here!'
                        onChange={(e) => {
                            const convertValue = convert(e.target.value)
                            setInPutFrom(convertValue)
                        }
                        }
                        autoFocus
                    />
                </div >
                <div className='flex-1 p-2 screen'>
                    <textarea className='border-2 w-full min-h-[300px] p-2 resize-none' placeholder='Jsx code will generate here'
                        defaultValue=''
                        value={inputFrom}
                    />
                </div>
            </div>
        </div>
    )
}
