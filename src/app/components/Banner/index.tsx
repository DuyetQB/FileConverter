import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        <div className='background-caro relative'>
            <div className='pb-2'>
                <h1 className="text-[2em]">A platform to convert many files type. Save your time</h1>
                <p className='bg-primary-400 text-white inline'>Convert all files you need. It&rsquo;s online and free</p>
            </div>
            <div className='flex justify-center relative'>
                <img src="/assets/banner-first.png" className='object-cover h-[500px]' />

                <div className='absolute bottom-0 right-[240px]'>
                    <img src="/assets/icon-arrow-long.svg" className='object-cover' />
                </div>
            </div>
            <div className='flex justify-end'>
                <img src="/assets/banner-last.png" className='object-cover h-[400px]' />
            </div>
            <Link href="/pricing" className="absolute bottom-[40%] right-1/2 translate-x-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Try Now</Link>
        </div>
    )
}
