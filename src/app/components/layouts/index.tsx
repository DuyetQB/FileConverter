import React from 'react'
import Header from '../Header'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='p-24'>
      <div className="flex flex-col text-center gap-2">
        <Header />
        {children}
      </div>
    </div>
  )
}
