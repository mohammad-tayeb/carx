"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signIn } from "next-auth/react"
import GoogleLogin from './GoogleLogin';

export default function LoginForm() {
    const [passwordView, setPasswordView] = useState(false)

    const router = useRouter()
    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!email || !password) {
            toast.error("Enter email and password!")
            return
        }
        toast('Proccessing...')
        try {
            const response = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false })
            console.log(response)
            if (response.ok) {
                toast.success("Login Successfull")
                router.push("/")
                toast.loading('Redirecting...')
                form.reset()
            }
            else {
                toast.error("Authentication Failed")
                form.reset()
            }
        } catch (error) {
            console.log(error)
            alert('failed to authenticate')
        }
    }
    return (
        <div className="max-w-sm w-full text-gray-600 space-y-5 relative">
            <div className="text-center flex flex-col items-center justify-center">
                <Image
                    src='/logo.jpg'
                    width={150}
                    height={150}
                    alt="Banner Car"
                    className="md:max-w-lg max-w-sm"
                />
                <div className="mt-5">
                    <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                        Log in to your account
                    </h3>
                </div>
            </div>
            <button
                onClick={() => router.back()}
                className="absolute -right-96 w-[150px] md:block hidden top-0 px-2 text-gray-700 font-medium border border-2 hover:bg-gray-100 rounded-lg transition border-sky-300"
            >
                ← Go Back
            </button>

            {/* email password login */}
            <form onSubmit={handleLogin} className="space-y-5">
                <div>
                    <label className="font-medium">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter email'
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                    />
                </div>
                <div className='relative'>
                    <label className="font-medium">Password</label>
                    <input
                        type={passwordView ? 'text' : 'password'}
                        name='password'
                        required
                        placeholder="••••••••"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#41bce8] shadow-sm rounded-lg"
                    />
                    {
                        passwordView == false ?
                            <FaRegEye onClick={() => setPasswordView(!passwordView)} className='absolute top-[45px] right-4' />
                            :
                            <FaEyeSlash onClick={() => setPasswordView(!passwordView)} className='absolute top-[45px] right-4' />
                    }

                </div>
                <div className="flex items-center justify-between text-sm">
                    <a
                        href="#"
                        className="text-center text-[#41bce8] hover:text-[#41bbe8e0]"
                    >
                        Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white font-medium  bg-[#41bce8] hover:bg-[#41bbe8e0] active:bg-red-600 rounded-lg duration-150"
                >
                    Sign in
                </button>
            </form>

            {/* google login component */}
            <GoogleLogin></GoogleLogin>


            {/* below section */}
            <p className="text-center">
                Don&apos;t have an account?{' '}
                <Link
                    href={"/register"}
                    className="font-medium text-[#41bce8] hover:text-[#41bbe8e0]"
                >
                    Sign up
                </Link>
            </p>
        </div>
    )
}
