"use server"
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'

// load repair booking data
const getRepairData = async () => {
    const res = await fetch('http://localhost:3000/api/repair', {
        headers: headers()
    })
    const data = await res.json()
    return data
}

export default async function MyAppointmentTable() {
    const data = await getRepairData()
    const totalRepairs = data?.length

    return (
        <div className='mb-20'>
            <h1 className='text-center text-2xl font-bold mb-5 mt-10 text-gray-700'>Your Repair Appointments: {totalRepairs}</h1>
            {
                totalRepairs !== 0 && <>
                    
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 md:mx-20 mx-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Car Model</th>
                                    <th>Service</th>
                                    <th>Preferred Date</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(booking => (
                                    <tr key={booking._id}>
                                        <td>{booking._id}</td>
                                        <td>{booking.name}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.phone}</td>
                                        <td>{booking.model}</td>
                                        <td>{booking.service}</td>
                                        <td>{booking.date}</td>
                                        <td>{booking.description || "N/A"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            }
            {
                totalRepairs === 0 &&
                <div className='flex flex-col justify-center items-center my-20'>
                    <h1 className='text-center text-1xl'>
                        No bookings found!
                        Try to find using{" "}
                        <Link href={"/searchAppointments"} className='font-semibold text-blue-500 underline'>
                            phone number
                        </Link>
                    </h1>

                    {/* ✅ Divider centered using mx-auto */}
                    <div className="divider w-[200px] mx-auto">OR</div>
                    <h1>If did not placed any order yet. Book one now using the button</h1>

                    <Link href={"/repair"}>
                        <button className='request-loader mt-8'>Book Repair</button>
                    </Link>
                </div>

            }
        </div>
    )
}
