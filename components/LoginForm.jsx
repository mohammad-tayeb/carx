"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signIn } from "next-auth/react"

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
        <div className="max-w-sm w-full text-gray-600 space-y-5">
            <div className="text-center pb-8 flex flex-col items-center justify-center">
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
            <button
                className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
            >
                <img
                    src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
                    alt="Google"
                    className="w-5 h-5"
                />
                Continue with Google
            </button>
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
