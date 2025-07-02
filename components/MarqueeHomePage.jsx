import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function MarqueeHomePage() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center -mb-10 mt-5 text-gray-600'>Sponsored by:</h1>
            <Marquee>
                <Image className='mx-5' src={"/m1.png"} height={250} width={250} alt='m1'></Image>
                <Image className='mx-5' src={"/m2.png"} height={250} width={250} alt='m2'></Image>
                <Image className='mx-5' src={"/m3.png"} height={200} width={200} alt='m3'></Image>
                <Image className='mx-5' src={"/m4.png"} height={250} width={250} alt='m4'></Image>
            </Marquee>
        </div>
    )
}
