"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const { data: session, status } = useSession()
    console.log(session, status)

    const navlinks = (<>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/cars"}>Cars</Link></li>
        <li><Link href={"/suppport"}>Suppport</Link></li>
    </>)

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <div className='ms-10'>
                    <Image
                        src='/logo.jpg'
                        width={120} // Add width
                        height={120} // Add height
                        alt="Banner Car" // Always add alt for accessibility
                        className="md:max-w-lg max-w-sm"
                    />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session?.user ?
                        <>
                            <div className="avatar avatar-placeholder pe-2">
                                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                    <span className="text-xs">UI</span>
                                </div>
                            </div>
                            <button onClick={()=>signOut()} className="btn bg-[#41bce8] text-white">Logout</button>
                        </> : <Link href={"/login"} className="btn bg-[#41bce8] text-white">Login</Link>
                }
            </div>
        </div>
    )
}