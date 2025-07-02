import React from 'react'

import AnimateOnScrollSSR from '../../../components/AnimateOnScrollSSR'
import TestDriveForm from '../../../components/TestDriveFom'
import Link from 'next/link'

export default function page() {
    return (
        <div>
            <AnimateOnScrollSSR>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(/testDrive.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Book Your Test Drive</h1>
                        <p className="mb-5">
                            Experience your dream car firsthand! Schedule a test drive at your convenience and feel the thrill before making your decision.
                        </p>
                        <Link href={"#testDriveForm"} className="btn border-none w-[150px] bg-[#41bce8] text-white hover:bg-[#2aaccf]">Book Now</Link>
                    </div>
                </div>
            </div>
            </AnimateOnScrollSSR>
            <AnimateOnScrollSSR>
                <TestDriveForm></TestDriveForm>
            </AnimateOnScrollSSR>
            
        </div>
    )
}
