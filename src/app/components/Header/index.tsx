"use client"
import React, { useEffect, useState } from 'react'
import { IconLogo } from '../icons/IconImage'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UserProfile from '../User'

type listNavItemProps = {
    id: number,
    title: string,
    link: string,
}
const listNavItem: listNavItemProps[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Convert Audio",
        link: "/audios/mp3-to-wav",
    },
    {
        id: 3,
        title: "Convert Image",
        link: "/images/jpeg-to-webp",
    },
    {
        id: 4,
        title: "Html to Jsx",
        link: "/html-to-jsx"
    },

]

export default function Header() {

    const pathname = usePathname()
    const [active, setActive] = useState(pathname || "/");
    const [isShowNav, setIsShowNav] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState<any>(null);

    const handleItemClick = (id: any) => {
        setActive(id);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user: any = localStorage.getItem("user");
            if (user) {
                setUser(JSON.parse(user))
                setIsLogin(true);
            }
        };
    }, [])

    return (
        <header className='fixed top-0 left-0 right-0 z-20 bg-white'>
            <nav className={`bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ${!isShowNav ? '' : 'fixed left-0 right-0'}`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center gap-2">
                        <IconLogo />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FilesConvert</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                            onClick={() => setIsShowNav(!isShowNav)}

                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${isShowNav ? '' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                            {listNavItem.map((rc: listNavItemProps) => (
                                <Link href={rc.link} key={rc.id} className={`${active == rc.link ? 'border-primary-500' : 'border-transparent'} block py-2 pr-4 pl-3 border-b-2 hover:border-primary-500 transition-all `}
                                    onClick={() => handleItemClick(rc.link)}
                                >
                                    {rc.title}
                                </Link>
                            ))}

                            {isLogin ? (
                                <div className='user flex flex-col items-center justify-center'>
                                    <UserProfile userName={user?.user_metadata?.name}
                                        avatarUrl={user?.user_metadata?.avatar_url}
                                        email={user?.user_metadata?.email}

                                    />
                                </div>
                            ) : (

                                <Link href="/sign-in" className="text-white bg-primary-600 hover:bg-primary-700 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-grey focus:outline-none dark:focus:ring-gray-800">Sign In</Link>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
