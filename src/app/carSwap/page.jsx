import React from 'react'

import CarExchange from '../../../components/CarExchange'
import getCarDataSwap from '../api/carSwap/getCarDataSwap'

export default async function page() {
    const { cars } = await getCarDataSwap()

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(/carSwap.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Looking to Exchange?</h1>
                        <p className="mb-5">
                            Trade your current car for one that suits you better! Browse verified exchange listings with trusted sellers and find your next ride effortlessly.
                        </p>
                        <button className="btn bg-[#41bce8] text-white hover:bg-[#2aaccf] border-0">
                            <a href="#carSwap">Explore Exchanges</a>
                        </button>
                    </div>
                </div>
            </div>
            <CarExchange cars={cars}></CarExchange>
            
        </div>
    )
}
