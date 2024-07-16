import React from 'react'
import Card from './components/Card'
import { CardItemProps } from '@/app/types/CardItem'
import { cardItem } from '@/app/data/dataCardItem'


export default function Payment() {

    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-[4em] tracking-tight font-extrabold text-black">Best convert files tool</h2>
                    <p className="mb-5 font-light sm:text-xl text-[1.2em] text-black">We focus on solutions that address the most basic needs. Can bring long-term value and promote economic growth.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 pb-16">
                    {cardItem.map((rc: CardItemProps) => (
                        <Card id={rc.id} key={rc.id} name={rc.name} title={rc.title} price={rc.price} supported={rc.supported} credits={rc.credits}/>
                    ))}
                </div>
            </div>
        </section>


    )
}
