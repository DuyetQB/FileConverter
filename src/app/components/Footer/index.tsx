import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='absolute bottom-0 left-0 right-0'>
        <footer className="bg-white rounded-lg shadow m-2 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 lg:flex md:items-center lg:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">FilesConvert</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
                    </li>
                    <li>
                    <Link href="/about-us" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100087750369196" target='_blank' className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
        </div>
    )
}
