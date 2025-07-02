"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function GoogleLogin() {
    const session = useSession()
    const router = useRouter()

    const handleSocialLogin = async (providerName) => {
        toast("Processing...")
        signIn(providerName)
    }
    useEffect(() => {
        if (session?.status == "authenticated") {
            toast.success("Login Successfull")
            toast('Redirecting...')
            router.push("/")
        }
    }, [session?.status])
    return (
        <button onClick={() => handleSocialLogin("google")}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
        >
            <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
                alt="Google"
                className="w-5 h-5"
            />
            Continue with Google
        </button>
    )
}
