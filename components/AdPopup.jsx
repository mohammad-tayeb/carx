// components/AdPopup.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function AdPopup() {
    const [showAd, setShowAd] = useState(false);

    useEffect(() => {
        const adDismissed = sessionStorage.getItem("adDismissed");

        if (!adDismissed) {
            const timer = setTimeout(() => {
                setShowAd(true);
            }, 3000); // delay in milliseconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        sessionStorage.setItem("adDismissed", "true");
        setShowAd(false);
    };

    if (!showAd) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
            <div className="relative max-w-2xl w-full p-4 rounded-lg shadow-lg">
                <button
                    className="absolute top-7 text-white right-8 hover:text-red-500 hover:scale-125 text-xl"
                    onClick={handleClose}
                    aria-label="Close ad"
                >
                    <IoClose />
                </button>
                <Image
                    src="/ads.jpg"
                    alt="Advertisement"
                    width={700}
                    height={700}
                    className="rounded-md w-full h-auto object-cover"
                />
                <div className="text-center mt-4 font-semibold text-white">
                    🔥 Don&apos;t miss our limited-time offer!
                </div>
            </div>
        </div>
    );
}
