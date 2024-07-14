"use client"
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { usePathname } from 'next/navigation'

export default function Layout({children}:{children:React.ReactNode}) {

  const pathname = usePathname()
  
  return (
    <div className={`lg:p-24 pt-24 px-2 ${pathname === '/' ? '':'h-full min-h-screen'}`}>
      <div className="flex flex-col text-center gap-2">
        <Header />
        {children}
        <Footer/> 
      </div>
    </div>
  )
}
