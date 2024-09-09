import Image from "next/image"
import React from 'react'
import Layout from '../components/layouts'

const page = () => {
    return (
        <Layout>
            <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1
                        className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
                        Convert your files with our <span className="text-indigo-600">Smart Tool </span>
                    </h1>
                    <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
                        We focus on solutions that promote increased productivity at work</p>
                </div>
            </section>

            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div className="img-box relative min-h-[35rem]">
                            <Image src="/assets/avatar-first.avif" alt="About page"
                                className="max-lg:mx-auto" fill={true} priority quality={100} />
                        </div>
                        <div className="lg:pl-[100px] flex items-center">
                            <div className="data w-full">
                                <h2
                                    className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                    About
                                    Us </h2>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    We&lsquo;re a startup to build the tools that increased the productivity at work. And gave to the best solutions to convert files type for customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

                        <div className="lg:pr-24 flex items-center">
                            <div className="data w-full">
                                <img src="./assets/content-about.png" alt="About Us page"
                                    className="block lg:hidden mb-9 mx-auto" />

                                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">We
                                    are Creative Since 2024</h2>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    FilesConvert isn&lsquo;t just a tool; it&lsquo;s a platform. We go beyond the average tool, prioritizing accessibility, scalability, and ease of use. Every element, from the smallest detail to the larger, does its best to enhance the experience and increase user satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="img-box ">
                            <img src="./assets/content-about.png" alt="About Us page"
                                className="hidden lg:block " />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
                    <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                        <div
                            className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-bold text-indigo-600">
                                    240%
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl text-gray-900 font-semibold mb-2">Users growth</h4>
                                    <p className="text-xs text-gray-500 leading-5">Growth users quantity journey as we
                                        continually innovate and drive towards new heights of success.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-bold text-indigo-600">
                                    175+
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl text-gray-900 font-semibold mb-2">Customers</h4>
                                    <p className="text-xs text-gray-500 leading-5">Customers feel satisfied when using our services. </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-bold text-indigo-600">
                                    625+
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl text-gray-900 font-semibold mb-2">Files convert Completed</h4>
                                    <p className="text-xs text-gray-500 leading-5">We have accomplished more than 625 files convert success and we are still counting many more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default page
