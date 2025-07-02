"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import ProfileModal from './ProfileModal'
import { FaChevronDown } from 'react-icons/fa'

export default function Navbar() {
    const { data: session } = useSession()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentBrand = searchParams.get('brand');
    const currentType = searchParams.get('type');
    // List of routes where Navbar should be hidden
    const hideNavbarRoutes = ["/login", "/register", "/admin"];
    const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

    const brands = [
        "mclaren",
        "bmw",
        "porsche",
        "mazda",
        "lexus",
        "toyota",
        "volkswagen",
        "maserati",
        "ford",
    ];

    const types = [
        "sedan",
        "wagon",
        "coupe",
        "suv",
        "hatchback",
        "midsize",
        "compact",
        "convertible",
    ];

    const navlinks = (
        <>
            <li>
                <Link href="/" className={`${pathname === "/" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                    Home
                </Link>
            </li>

            <div className="dropdown dropdown-start z-50 mt-0.5 cursor-pointer">
                <div
                    tabIndex={0}
                    role="button"
                    className={`block px-3 py-1 rounded ${pathname === "/cars"
                        ? "bg-[#41bce8] text-white font-semibold"
                        : "hover:bg-gray-100"
                        } flex justify-center items-center`}
                >
                    <p className='me-1'>Cars</p> <FaChevronDown></FaChevronDown>
                </div>

                <ul className="dropdown-content menu bg-base-100 rounded-box shadow-sm z-50 w-60 p-2">
                    {/* All Cars link */}
                    <li>
                        <Link
                            href="/cars"
                            className={`block px-3 py-1 rounded ${pathname === "/cars" && !currentBrand && !currentType
                                ? "bg-[#41bce8] text-white font-semibold"
                                : "hover:bg-gray-100"
                                }`}
                        >
                            All Cars
                        </Link>
                    </li>

                    {/* Dynamic Brands */}
                    {brands.map((brand) => (
                        <li key={brand} className="dropdown dropdown-right">
                            <div
                                tabIndex={0}
                                role="button"
                                className={`px-3 py-1 rounded capitalize ${pathname === "/cars" && currentBrand === brand
                                    ? "bg-[#41bce8] text-white font-semibold"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                <p className='me-1'> {brand}</p> <FaChevronDown className='text-xs'></FaChevronDown>
                            </div>
                            <ul className="dropdown-content menu bg-base-100 rounded-box shadow-sm z-50 w-60 p-2 mt-1">
                                <h1 className='uppercase text-[#41bce8] font-semibold'>{brand} Types</h1>
                                {types.map((type) => (
                                    <li key={type}>
                                        <Link
                                            href={`/cars?page=1&brand=${brand}&type=${type}`}
                                            className={`rounded px-3 py-1 block ${pathname === "/cars" &&
                                                currentBrand === brand &&
                                                currentType === type
                                                ? "bg-[#41bce8] text-white font-semibold"
                                                : ""
                                                }`}
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>



            <li className="dropdown">
                <summary tabIndex={0} className={`${pathname === "/repair" || pathname === "/myAppointments" || pathname === "/searchAppointments" ? " bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}><div className='flex justify-center items-center'><p>Test Drive</p> <FaChevronDown className='pt-0.5 ps-1' /></div></summary>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <Link href="/repair" className={`${pathname === "/repair" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                            Book Appointment
                        </Link>
                    </li>
                    <li>
                        <Link href="/myAppointments" className={`${pathname === "/myAppointments" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                            My Appointments
                        </Link>
                    </li>
                    <li>
                        <Link href="/searchAppointments" className={`${pathname === "/searchAppointments" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                            Search Appointments
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <summary tabIndex={1} className={`${pathname === "/testDrive" || pathname === "/myTestDriveAppointments" || pathname === "/searchTestDriveAppointments" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}><div className='flex justify-center items-center'><p>Test Drive</p> <FaChevronDown className='pt-0.5 ps-1' /></div></summary>
                <ul tabIndex={1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <Link href="/testDrive" className={`${pathname === "/testDrive" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                            Test Drive
                        </Link>
                    </li>
                    <li>
                        <Link href="/myTestDriveAppointments" className={`${pathname === "/myTestDriveAppointments" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                            My Appointments
                        </Link>
                    </li>
                    <li>
                        <Link href="/searchTestDriveAppointments" className={`${pathname === "/searchTestDriveAppointments" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                            Search Appointments
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/carSwap" className={`${pathname === "/carSwap" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                    Swap Car
                </Link>
            </li>
            <li>
                <Link href="/support" className={`${pathname === "/support" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                    Support
                </Link>
            </li>
            <li>
                <Link href="/about" className={`${pathname === "/about" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""}`}>
                    About Us
                </Link>
            </li>
            <li className={!session?.user ? "tooltip tooltip-bottom" : ""} data-tip={!session?.user ? "Please log in to view orders" : ""}>
                <Link href={session ? "/orders" : "/login"} className={`
                ${pathname === "/orders" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""};
                ${!session?.user ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}
                `}>
                    Orders
                </Link>
            </li>
            <li className={!session?.user ? "tooltip tooltip-bottom" : ""} data-tip={!session?.user ? "Please log in to view rents" : ""}>
                <Link href={session ? "/rents" : "/login"} className={`
                ${pathname === "/rents" ? "bg-[#41bce8] text-white font-semibold rounded px-3 py-1" : ""};
                ${!session?.user ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}
                `}>
                    Rents
                </Link>
            </li>
        </>
    )

    return (
        <div className={`navbar bg-base-100 shadow-sm ${shouldHideNavbar && 'hidden'}`}>
            {/* Left Icon Dropdown (Mobile Menu Trigger) */}
            <div className="flex-none lg:hidden">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
            </div>

            {/* Logo */}
            <div className="flex-1">
                <Link href="/">
                    <Image
                        src="/logo.jpg"
                        width={120}
                        height={50}
                        alt="Logo"
                        className="ms-2"
                    />
                </Link>
            </div>

            {/* Center Links (Visible on large screens) */}
            <div className="hidden lg:flex me-20">
                <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
                    {navlinks}
                </ul>
            </div>

            {/* Right: Profile/Login */}
            <div className="flex-none">
                {session?.user ? (
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <button onClick={() => document.getElementById('my_modal_1').showModal()}>
                                    <Image src={session?.user?.image || "/defaultUser.jpg"} alt="User" width={32} height={32} />
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => signOut()}
                            className="btn btn-sm bg-[#41bce8] text-white"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link href="/login" className="btn hover:scale-105 bg-[#41bce8] hover:bg-[#41bbe8ef] text-white">
                        Login
                    </Link>
                )}
            </div>

            {/* Profile Modal */}
            <ProfileModal />
        </div>
    )
}
