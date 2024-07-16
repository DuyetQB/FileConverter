import React from 'react'
import { IconChecked } from '../../icons/IconChecked'
import { CardItemProps } from '@/app/types/CardItem'
import Link from 'next/link'

export default function Card(props: CardItemProps) {

    const { name, title, price, supported, credits } = props

    return (
        <>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-grey shadow">
                <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
                <p className="font-light text-gray-500 sm:text-lg ">{title}</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">${price}</span>
                    <span className="text-gray-500 ">{credits ? `/ ${credits} credits`:''}</span>
                </div>

            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
                {supported.map((rc) => (
                    <li className="flex items-center space-x-3" key={rc.id}>
                        <IconChecked />
                        <span>{rc.name}</span>
                    </li>
                ))}

            </ul>
            <Link href={`${price === 0 ? '/images/jpeg-to-webp':'sign-in'}`} className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</Link>
            </div>
        </>
    )
}
