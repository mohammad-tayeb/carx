import Link from 'next/link'
import React from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import AnimateAfterMount from './AnimateOnScrollSSR'

export default function CarsPageBanner() {
    return (
        <AnimateAfterMount>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url('/cars-banner.jpg')",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg flex flex-col justify-center items-center">
                        <h1 className="mb-5 text-5xl font-bold">Explore Our Exclusive Car Collection</h1>
                        <p className="mb-5">
                            Discover a wide range of cars that match your style, performance needs, and budget. From sleek sedans to rugged SUVs, we have the perfect ride for you.
                        </p>
                        <Link href={"/cars"}><button className='request-loader hover:default-btn'>Browse Cars</button></Link>
                    </div>
                </div>
            </div>
        </AnimateAfterMount>

    )
}
