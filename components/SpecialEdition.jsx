"use client"
import React, { useState } from 'react';
import AnimateOnScrollSSR from './AnimateOnScrollSSR';
import Link from 'next/link';

export default function SpecialEdition() {
    const [activeTab, setActiveTab] = useState("porsche");

    return (
        <AnimateOnScrollSSR>
            <>
                <div className='flex mx-auto justify-center text-center'>
                    <div role="tablist" className="tabs tabs-boxed">
                        <a
                            role="tab"
                            className={`tab transition duration-500 ease-in-out ${activeTab === "porsche" ? "tab-active bg-[#41bce8] text-white" : ""}`}
                            onClick={() => setActiveTab("porsche")}
                        >
                            Porsche 911
                        </a>
                        <a
                            role="tab"
                            className={`tab transition duration-500 ease-in-out ${activeTab === "bmw" ? "tab-active bg-[#41bce8] text-white" : ""}`}
                            onClick={() => setActiveTab("bmw")}
                        >
                            BMW M4
                        </a>
                        <a
                            role="tab"
                            className={`tab transition duration-500 ease-in-out ${activeTab === "mclaren" ? "tab-active bg-[#41bce8] text-white" : ""}`}
                            onClick={() => setActiveTab("mclaren")}
                        >
                            McLaren 720S
                        </a>
                    </div>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex py-24 md:flex-row flex-col items-center justify-center">
                        <div className="md:mx-0 mx-5 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            {activeTab === "porsche" && (
                                <>
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Experience the Iconic
                                        <br className="hidden lg:inline-block" />
                                        Porsche 911
                                    </h1>
                                    <p className="mb-8 leading-relaxed">
                                        The Porsche 911 blends timeless design with cutting-edge performance. Featuring a rear-engine layout, powerful turbocharged engine options, and precision handling, it&apos;s the ultimate expression of driving passion.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link href={"/cars?page=1&brand=porsche"} className="inline-flex text-white bg-[#41bce8] border-0 py-2 px-6 focus:outline-none hover:bg-[#41bbe8e8] rounded text-lg">
                                            Explore Models
                                        </Link>
                                        <Link href={"/testDrive"} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                            Book a Test Drive
                                        </Link>
                                    </div>
                                </>
                            )}
                            {activeTab === "bmw" && (
                                <>
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Unleash the Power of
                                        <br className="hidden lg:inline-block" />
                                        BMW M4 Competition
                                    </h1>
                                    <p className="mb-8 leading-relaxed">
                                        The BMW M4 Competition delivers razor-sharp performance with its turbocharged inline-six engine, bold design, and track-ready features—built for driving enthusiasts who demand more.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link href={"/cars?page=1&brand=bmw"} className="inline-flex text-white bg-[#41bce8] border-0 py-2 px-6 focus:outline-none hover:bg-[#41bbe8e8] rounded text-lg">
                                            Explore Models
                                        </Link>
                                        <Link href={"/testDrive"} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                            Book a Test Drive
                                        </Link>
                                    </div>
                                </>
                            )}
                            {activeTab === "mclaren" && (
                                <>
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Drive the Future with
                                        <br className="hidden lg:inline-block" />
                                        McLaren 720S
                                    </h1>
                                    <p className="mb-8 leading-relaxed">
                                        With aerospace-level engineering and blistering speed, the McLaren 720S is a supercar that redefines performance. Its lightweight carbon fiber design and twin-turbo V8 make every drive unforgettable.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link href={"/cars?page=1&brand=mclaren"} className="inline-flex text-white bg-[#41bce8] border-0 py-2 px-6 focus:outline-none hover:bg-[#41bbe8e8] rounded text-lg">
                                            Explore Models
                                        </Link>
                                        <Link href={"/testDrive"} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                            Book a Test Drive
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>

                        <div style={{ pointerEvents: "none" }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            {activeTab === "porsche" && (
                                <video
                                    className="w-[600] h-[600]" // adjust as needed (e.g., w-64 = 16rem, h-40 = 10rem)
                                    autoPlay
                                    muted
                                    loop
                                    controlsList="nodownload"
                                    disablePictureInPicture
                                    poster="thumbnail.jpg"
                                >
                                    <source src="/porche.mp4" type="video/mp4" />
                                </video>

                            )}
                            {activeTab === "bmw" && (
                                <video className="w-[600] h-[600]" autoPlay muted loop controlsList="nodownload" disablePictureInPicture poster="thumbnail.jpg">
                                    <source src="/bmw.mp4" type="video/mp4" />
                                </video>
                            )}
                            {activeTab === "mclaren" && (
                                <video className="w-[600] h-[600]" autoPlay muted loop controlsList="nodownload" disablePictureInPicture poster="thumbnail.jpg">
                                    <source src="/mclaren.mp4" type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </div>
                </section>
            </>
        </AnimateOnScrollSSR>
    );
}
