import Image from 'next/image'
import React from 'react'
import ScrollDown from './ScrollDown'
import AnimateOnScrollSSR from './AnimateOnScrollSSR'

export default function HomeBanner() {

    return (
        <AnimateOnScrollSSR>
        <div className="flex flex-col mx-auto md:pt-[120px] pt-[200px] h-screen relative mb-20 md:mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse md:max-w-screen max-w-sm">
                <Image
                    src='/banner-car.png'
                    width={700} // Add width
                    height={400} // Add height
                    alt="Banner Car" // Always add alt for accessibility
                    className="md:max-w-lg max-w-sm"
                />
                <div>
                    <h1 className="md:text-5xl text-2xl font-bold uppercase">Drive Your Dream Car Today!</h1>
                    <p className="py-6 max-w-screen">
                        Explore a wide range of premium cars tailored to match your style and needs. From luxury sedans to powerful SUVs, find the perfect ride for every journey.
                    </p>
                </div>
            </div>
            <ScrollDown></ScrollDown>
        </div>
        </AnimateOnScrollSSR>
    )
}
