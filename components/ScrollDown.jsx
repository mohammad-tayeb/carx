"use client"
import React from 'react'

export default function ScrollDown() {
    // Scroll handler
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight, // Scrolls down one full screen height
            behavior: 'smooth',      // Smooth scrolling
        })
    }
    return (
        <div onClick={handleScroll} className="group absolute bottom-10 md:left-[45%] left-[35%] z-10 md:top-[420px] top-[680px]">
            <img
                src="/scrollDown.gif"
                alt="Scroll down"
                className="group-hover:hidden"
                width={120}
                height={120}
            />
            <img
                src="/scrollDown2.gif"
                alt="Scroll down hovered"
                className="hidden group-hover:block"
                width={120}
                height={120}
            />
        </div>
    )
}
