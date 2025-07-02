import React from 'react'

import ContactUs from '../../../components/ContactUs'
import AnimateOnScrollSSR from '../../../components/AnimateOnScrollSSR'

export const metadata = {
  title: "Support | CARX",
  description: "Get help and support for your account, orders, and more.",
};

export default function page() {
    
    return (
        <>
            <AnimateOnScrollSSR>
                {/* hero */}
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "url(/support.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Need Help with Your Car?</h1>
                            <p className="mb-5">
                                We're here to support you with expert car repair services. Whether it’s a flat tire, engine trouble, or a quick inspection — our team is ready to help.
                            </p>
                            <button className="btn bg-[#41bce8] text-white hover:bg-[#2aaccf] border-none"><a href="#support">Contact Support</a></button>
                        </div>
                    </div>
                </div>
            </AnimateOnScrollSSR>
            <div id='support'><ContactUs></ContactUs></div>

        </>
    )
}
