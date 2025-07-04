import React from 'react'

import RepairForm from '../../../components/RepairForm'
import AnimateOnScrollSSR from '../../../components/AnimateOnScrollSSR'

export default function page() {

  return (
    <div>
      <AnimateOnScrollSSR>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/repair.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Need Car Repair?</h1>
            <p className="mb-5">
              Book a car repair service with ease. Whether it&apos;s engine trouble, brake issues, or a routine check-up — we&apos;ve got you covered!
            </p>
            <button className="btn bg-[#41bce8] text-white hover:bg-[#2aaccf] border-0"><a href="#bookrepair">Book a Service</a></button>
          </div>
        </div>

      </div>
      </AnimateOnScrollSSR>
      <main id='bookrepair'>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow mt-5">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#41bce8]">Book a Car Repair Service</h2>
          {/* form here */}
          <RepairForm></RepairForm>
          {/* form here */}
        </div>
      </main>
      
    </div>
  )
}
