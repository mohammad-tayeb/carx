"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

export default function TestDriveForm() {
    const router = useRouter();
    const { data: session } = useSession();
    console.log(session)

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.loading("Submitting request...");

        const form = e.target;
        const formData = new FormData(form);

        const testDriveData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            car: formData.get('car'),
            date: formData.get('date'),
            time: formData.get('time'),
            location: formData.get('location'),
            message: formData.get('message'),
        };

        console.log(testDriveData);
        const res = await fetch('/api/testDrive', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testDriveData),
        });

        const postedResponse = await res.json();
        toast.dismiss();
        if (postedResponse.insertedId) {
            toast.success("Test Drive Booked Successfully!");
            alert(`Booking ID: ${postedResponse.insertedId}`);
            // router.push('/myTestDrives');
        }
    };

    return (
        <form id='testDriveForm' onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center mb-20 mt-20">
            <h1 className='text-2xl font-semibold'>Book A Test Ride Schedule</h1>
            <div className='flex md:flex-row flex-col md:gap-10 gap-0 justify-center'>
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
                            readOnly={!!session?.user?.email}
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
                            readOnly={!!session?.user?.email}
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
                            required
                        />
                    </div>
                </div>

                <div className='space-y-3'>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Car Model</span>
                        </label>
                        <select
                            name="car"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select a car</option>
                            <option>McLaren</option>
                            <option>BMW</option>
                            <option>Porsche</option>
                            <option>Mazda</option>
                            <option>Lexus</option>
                            <option>Toyota</option>
                            <option>Volkswagen</option>
                            <option>Maserati</option>
                            <option>Ford</option>
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
                            min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // tomorrow
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Preferred Time</span>
                        </label>
                        <select
                            name="time"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Time</option>
                            <option>Morning</option>
                            <option>Evening</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Preferred Location</span>
                        </label>
                        <select
                            name="location"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Drive Zone</option>
                            <option>Dhaka Drive Zone</option>
                            <option>Chittagong Drive Zone</option>
                            <option>Sylhet Drive Zone</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Additional Message</span>
                        </label>
                        <textarea
                            name='message'
                            className="textarea textarea-bordered w-full"
                            placeholder="Any specific requests or info?"
                        ></textarea>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn w-[150px] bg-[#41bce8] text-white hover:bg-[#2aaccf]">
                Book Now
            </button>
        </form>
    );
}
