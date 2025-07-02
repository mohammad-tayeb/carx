"use client"
import { useSession } from 'next-auth/react';
import React from 'react'
import toast from 'react-hot-toast';

export default function ProfileModal() {
    const { data: session, update } = useSession()
    const fallbackImageUrl = "/defaultUser.jpg";
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const imageFile = form.image.files[0];

        // 1. Upload to ImgBB
        const formData = new FormData();
        formData.append('image', imageFile);
        toast.loading("Updating...")
        const uploadRes = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        });

        const uploadData = await uploadRes.json();
        console.log(uploadData)
        const imageUrl = uploadData?.data?.url || session?.user?.image || fallbackImageUrl;
        console.log(imageUrl)

        // 2. Send to backend to update MongoDB
        const res = await fetch('/api/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, image: imageUrl })
        });

        if (res.ok) {
            await update()
            toast.dismiss()
            toast.success("Successfully Updated!")
            document.getElementById('my_modal_3').close();
        } else {
            toast.error("Something went wrong!")
        }
    };

    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl mb-4 text-center uppercase text-[#41bce8]">User Profile</h3>

                    <div className="flex flex-col items-center space-y-4">
                        {/* Profile Image */}
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={session?.user?.image || "/defaultUser.jpg"} alt="Profile Picture" />
                            </div>
                        </div>

                        {/* Name */}
                        <p className="text-lg font-semibold">Name: {session?.user?.name || "No Name"}</p>

                        {/* Email */}
                        <p className="text-sm text-gray-500">Email: {session?.user?.email || "No Email"}</p>
                    </div>

                    {/* Close Button */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={() => {
                                document.getElementById('my_modal_1').close();
                                document.getElementById('my_modal_3').showModal()
                            }} className="btn bg-[#41bce8] text-white me-2">Edit</button>
                            <button className="btn bg-[#41bce8] text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Enter Your Details</h3>
                    <form onSubmit={handleSubmit} className="py-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input defaultValue={session?.user?.name} type="text" id="name" name="name" className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input defaultValue={session?.user?.email} type="email" id="email" name="email" className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                            <input type="file" id="image" name="image" accept="image/*" className="file-input file-input-bordered w-full" />
                        </div>
                        <button className="btn bg-[#41bce8] text-white">Save</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-[#41bce8] text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
