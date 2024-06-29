import React from 'react'
import Header from '../Header'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='lg:p-24 pt-24 px-2'>
      <div className="flex flex-col text-center gap-2">
        <Header />
        {children}
      </div>
    </div>
  )
}
