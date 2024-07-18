import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        <div className='relative p-2'>
            <div className='flex flex-wrap'>

                <div className='pb-2 lg:flex-1'>
                    <h1 className="text-[3em] lg:text-[4em] font-bold text-black leading-[120%] text-center lg:text-left text-balance">A platform to convert many files type. Save your time</h1>
                    <p className='text-[1.2em] leading-relaxed text-justify lg:text-left mt-5'>FilesConvert is a versatile platform designed to streamline file type conversions. Whether you need to convert documents, images, audio, or video files, FilesConvert offers a seamless and efficient solution. With an intuitive interface and robust functionality, users can easily transform their files into the desired formats with just a few clicks.</p>

                    {/* <Link href="/pricing" className="absolute bottom-[40%] right-1/2 translate-x-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Try Now</Link> */}
                </div>
                <div className='lg:flex-1'>
                    <img src="./assets/image-banner-removebg.png" className='object-cover h-[400px]' alt="image banner"
                        srcSet="/assets/image-banner-removebg.png 640w,
                 /assets/image-banner-removebg.png 320w"
                        sizes="(min-width: 650px) 50vw, 100vw"
                    />
                </div>
            </div>
            <div className='my-[3rem]'>

                <Link href="/pricing" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:text-white  dark:focus:ring-primary-900">Try Now</Link>
            </div>
            {/* <div className='flex justify-center relative'>
                <img src="./assets/banner-first.avif" className='object-cover h-[500px]' alt="image banner"
                    srcSet="/assets/banner-first.avif 640w,
                 /assets/banner-first.avif 320w"
                    sizes="(min-width: 650px) 50vw, 100vw"
                />

                <div className='absolute bottom-0 right-[240px]'>
                    <img src="./assets/icon-arrow-long.svg" className='object-cover' alt="icon arrow down" />
                </div>
            </div>
            <div className='flex justify-end'>
                <img src="./assets/banner-last.avif" className='object-cover h-[400px]' alt="image banner"
                    srcSet="/assets/banner-last.avif 640w,
                 /assets/banner-last.avif 320w"
                    sizes="(min-width: 650px) 50vw, 100vw"
                />
            </div> */}

        </div>
    )
}
