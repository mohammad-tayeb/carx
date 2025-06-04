import Image from 'next/image'
import React from 'react'

export default function HomeBanner() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src='/banner-car.png'
                    width={800} // Add width
                    height={500} // Add height
                    alt="Banner Car" // Always add alt for accessibility
                    className="md:max-w-lg max-w-sm"
                />
                <div>
                    <h1 className="text-5xl font-bold uppercase">Drive Your Dream Car Today!</h1>
                    <p className="py-6">
                        Explore a wide range of premium cars tailored to match your style and needs. From luxury sedans to powerful SUVs, find the perfect ride for every journey.
                    </p>
                </div>

            </div>
        </div>
    )
}
