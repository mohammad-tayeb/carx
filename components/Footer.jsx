"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    const pathname = usePathname()
    // List of routes where Navbar should be hidden
    const hideNavbarRoutes = ["/login", "/register", "/admin"];
    const shouldHideNavbar = hideNavbarRoutes.includes(pathname);
    return (
        <>
            <div className={`${shouldHideNavbar && 'hidden'} px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:mt-10`}>
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="carx"
                            className="inline-flex items-center"
                        >
                            <Image
                                src='/logo.jpg'
                                width={120}
                                height={120}
                                alt="carx Logo"
                                className="md:max-w-lg max-w-sm"
                            />
                        </a>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-gray-800">
                                At Carx, we bring you a curated collection of the latest and finest vehicles from top global manufacturers.
                            </p>
                            <p className="mt-4 text-sm text-gray-800">
                                Whether you're looking for luxury, performance, or reliability — we help you find the car that fits your lifestyle.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-gray-900">
                            Contact Us
                        </p>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Phone:</p>
                            <a
                                href="tel:123-456-7890"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                123-456-7890
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Email:</p>
                            <a
                                href="mailto:support@carx.com"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                support@carx.com
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Showroom:</p>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                101 Auto Avenue, Los Angeles, CA
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-gray-900">
                            Follow Us
                        </span>
                        <div className="flex items-center mt-1 space-x-3">
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <FaTiktok></FaTiktok>
                            <FaYoutube></FaYoutube>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Stay updated with the latest car releases, reviews, and events from carx.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} carx. All rights reserved.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a
                                href="/faq"
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/privacy-policy"
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/terms"
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}