"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function RepairForm() {
    const router = useRouter()
    const { data: session } = useSession()
    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.loading("Submitting request");

        const form = e.target;
        const formData = new FormData(form);

        const repairData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            model: formData.get('model'),
            service: formData.get('service'),
            date: formData.get('date'),
            description: formData.get('description'),
        };

        console.log(repairData);
        const res = await fetch('/api/repair', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(repairData),
        });

        const postedResponse = await res.json();
        console.log("Saved:", postedResponse);
        toast.dismiss()
        if (postedResponse.insertedId) {
            toast.success("Successfully Placed Order")
            alert(`Please Note The Order ID: ${postedResponse.insertedId}`)
            router.push('/myAppointments')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center mb-20">
            <div className='flex md:flex-row flex-col md:gap-10 gap-0  justify-center'>
                <div className='space-y-3'>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Full Name</span>
                        </label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                            defaultValue={session?.user?.name}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="your@email.com"
                            className="input input-bordered w-full"
                            required
                            defaultValue={session?.user?.email}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number</span>
                        </label>
                        <input
                            name='phone'
                            type="tel"
                            placeholder="+8801XXXXXXXXX"
                            className="input input-bordered w-full"
                            defaultValue={session?.user?.phone}
                            required
                        />
                    </div>
                </div>

                <div className='space-y-3'>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Car Model</span>
                        </label>
                        <input
                            name='model'
                            type="text"
                            placeholder="e.g. Toyota Corolla 2018"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Service Type</span>
                        </label>
                        <select name='service' className="select select-bordered w-full" required>
                            <option value="">Select Service</option>
                            <option>Oil Change</option>
                            <option>Brake Inspection</option>
                            <option>Engine Diagnostics</option>
                            <option>Tire Replacement</option>
                            <option>General Maintenance</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Preferred Date</span>
                        </label>
                        <input
                            name='date'
                            type="date"
                            className="input input-bordered w-full"
                            required
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Additional Notes</span>
                        </label>
                        <textarea
                            name='description'
                            className="textarea textarea-bordered w-full"
                            placeholder="Describe the issue or special request..."
                        ></textarea>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn w-[150px] bg-[#41bce8] text-white hover:bg-[#2aaccf]">
                Book Now
            </button>
        </form>
    )
}
