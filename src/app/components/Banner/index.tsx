import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        <div className='background-caro relative'>
            <div className='pb-2'>
                <h1 className="text-[2em] font-bold text-black">A platform to convert many files type. Save your time</h1>
                <p className='bg-primary-500 text-white inline'>Convert all files you need. It&rsquo;s online and free</p>
            </div>
            <div className='flex justify-center relative'>
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
            </div>
            <Link href="/pricing" className="absolute bottom-[40%] right-1/2 translate-x-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Try Now</Link>
        </div>
    )
}
