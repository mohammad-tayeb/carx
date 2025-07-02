"use client"
import React from 'react'
import toast from 'react-hot-toast'

export default function ContactUs() {
    const handleSendMessage = (e) => {
        e.preventDefault()
      toast.success("Successfully Sent")
      const form = e.target;
      form.reset() 
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">Get In Touch</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Have questions about a car or need help with your purchase? Our team is here to assist you.
                    </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form  onSubmit={handleSendMessage} className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="enter name"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 
                  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
                  leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    name="email"
                                    placeholder="enter email"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 
                  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
                  leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Your Message</label>
                                <textarea
                                    id="message"
                                    required
                                    name="message"
                                    placeholder="I'm interested in the 1993 Toyota Camry. Can I schedule a test drive?"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 
                  focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 
                  resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full text-center">
                           <button type="submit" className="btn bg-[#41bce8] text-white">Send Message</button>

                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a href="mailto:sales@cardisplay.com" className="text-indigo-600">sales@cardisplay.com</a>
                            <p className="leading-normal my-5">
                                123 Auto Plaza Drive
                                <br />
                                Los Angeles, CA 90210
                            </p>
                            <span className="inline-flex justify-center">
                                <a href="#" className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="ml-4 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 
                    5 13a11.64 11.64 0 01-7 2c9 5 20 0 
                    20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="ml-4 text-gray-500">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 
                    4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a href="#" className="ml-4 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 
                    3.8 8.5 8.5 0 01-7.6 
                    4.7 8.38 8.38 0 01-3.8-.9L3 
                    21l1.9-5.7a8.38 8.38 0 
                    01-.9-3.8 8.5 8.5 0 
                    014.7-7.6 8.38 8.38 0 
                    013.8-.9h.5a8.48 8.48 0 018 
                    8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
