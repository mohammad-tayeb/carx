"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


export default function BuyRent({ data }) {
    const [selectedOption, setSelectedOption] = useState('buy');
    const { data: session } = useSession()
    console.log(session)

    function getTomorrowDate() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    }

    useEffect(() => {
        if (session === null) {
            toast("To place an order, please login first", {
                icon: "🔒",
            });
        }
    }, [session]);

    const router = useRouter()

    const handleRentSubmit = async (e) => {
        e.preventDefault();
        toast.loading('Placing Order...')
        const form = e.target;

        const rentData = {
            userName: form.userName.value,
            userEmail: form.userEmail.value,
            carMake: form.carMake.value,
            carModel: form.carModel.value,
            pickupDate: form.pickupDate.value,
            returnDate: form.returnDate.value,
            pickupLocation: form.pickupLocation.value,
            status: 'pending', // default status
            type: 'rent',
        };

        console.log("Rent Submission:", rentData);

        const res = await fetch('/api/rents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rentData),
        });

        const postedResponse = await res.json();
        console.log("Saved:", postedResponse);
        toast.dismiss()
        if (postedResponse.insertedId) {
            toast.success("Successfully Placed Order")
            router.push('/rents')
        }
    };


    const handleBuySubmit = async (e) => {
        e.preventDefault();
        toast.loading('Placing Order...')
        const form = e.target;

        const order = {
            userName: form.userName.value,
            userEmail: form.userEmail.value,
            carMake: form.carMake.value,
            carModel: form.carModel.value,
            orderDate: form.orderDate.value,
            price: parseFloat(form.price.value),
            status: "pending", // default status
        };

        console.log("Buy Order Data:", order);
        const res = await fetch('http://localhost:3000/api/orders', {
            method: "POST",
            body: JSON.stringify(order)
        })
        const postedResponse = await res.json()
        console.log(postedResponse)
        toast.dismiss()
        if (postedResponse.insertedId) {
            toast.success("Successfully Placed Order")
            router.push('/orders')
        }
        // You can now send `order` to your API
        // Example: await fetch('/api/orders', { method: 'POST', body: JSON.stringify(order), headers: { 'Content-Type': 'application/json' } })
    };

    return (
        <div id='options' className="max-w-3xl mx-auto mt-56 mb-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Book/Rent This Car</h2>
            <p className="text-center text-gray-600 mb-6">
                Choose whether you want to rent or buy a car and fill in the details.
            </p>

            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setSelectedOption('rent')}
                    className={`btn ${selectedOption === 'rent' ? 'btn bg-[#41bce8] text-white' : 'btn-outline border-gray-200'}`}
                >
                    Rent
                </button>
                <button
                    onClick={() => setSelectedOption('buy')}
                    className={`btn ${selectedOption === 'buy' ? 'btn bg-[#41bce8] text-white' : 'btn-outline border-gray-200'}`}
                >
                    Buy
                </button>
            </div>

            {selectedOption === 'rent' && (
                <form onSubmit={handleRentSubmit} className="space-y-4 bg-base-100 p-6 rounded shadow flex flex-col justify-center items-center">
                    <input name="userName" required type="text" defaultValue={session?.user?.name} placeholder="Your Full Name" className="input input-bordered w-full" />
                    <input name="userEmail" required type="email" defaultValue={session?.user?.email} placeholder="Email Address" className="input input-bordered w-full" />
                    <input name="carMake" readOnly type="text" defaultValue={data?.make} placeholder="Make" className="input input-bordered w-full uppercase" />
                    <input name="carModel" readOnly type="text" defaultValue={data?.model} placeholder="Car Model" className="input input-bordered w-full uppercase" required />
                    <div className="gap-10 flex">
                        <label htmlFor="">Rent From</label>
                        <input min={new Date().toISOString().split('T')[0]} name="pickupDate" type="date" className="input input-bordered w-full" required />
                        <label htmlFor="">To</label>
                        <input min={getTomorrowDate()} name="returnDate" type="date" className="input input-bordered w-full" required />
                    </div>
                    <input name="pickupLocation" required type="text" placeholder="Pickup Location" className="input input-bordered w-full" />
                    {session ? <button type="submit" className="btn bg-[#41bce8] text-white w-full">
                        Submit Booking
                    </button>
                        :
                        <Link href="/login" className="btn bg-gray text-gray-700">
                            Please Login First
                        </Link>
                    }
                </form>
            )}


            {selectedOption === 'buy' && (
                <form onSubmit={handleBuySubmit} className="space-y-4 bg-base-100 p-6 rounded shadow flex flex-col justify-center items-center">
                    <input
                        name="userName"
                        type="text"
                        defaultValue={session?.user?.name}
                        placeholder="Your Full Name"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        name="userEmail"
                        type="email"
                        defaultValue={session?.user?.email}
                        placeholder="Email Address"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        name="carMake"
                        readOnly
                        type="text"
                        defaultValue={data?.make}
                        placeholder="Make"
                        className="input input-bordered w-full uppercase"
                    />

                    <input
                        name="carModel"
                        readOnly
                        type="text"
                        defaultValue={data?.model}
                        placeholder="Car Model"
                        className="input input-bordered w-full uppercase"
                        required
                    />

                    <input
                        name="orderDate"
                        type="text"
                        value={new Date().toISOString().split('T')[0]} // today's date (YYYY-MM-DD)
                        readOnly
                        className="input input-bordered w-full appearance-none cursor-not-allowed bg-gray-100"
                    />


                    <input
                        name="price"
                        type="number"
                        placeholder="Price"
                        readOnly
                        className="input input-bordered w-full"
                        defaultValue={data?.price || 28000}
                        required
                    />

                    {session ? <button type="submit" className="btn bg-[#41bce8] text-white w-full">
                        Submit Purchase Request
                    </button>
                        :
                        <Link href="/login" className="btn bg-gray text-gray-700">
                            Please Login First
                        </Link>
                    }

                </form>

            )}
        </div>
    )
}
