"use client"
import React, { useState } from 'react'

import toast from 'react-hot-toast'

export default function Page() {
    const [phone, setPhone] = useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearched] = useState(false)

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!phone) return
        if (phone.length != 11) {
            toast.error("Phone Number Must Contain 11 Digits")
            return;
        }
        if(phone.startsWith("018") === false){
            toast.error("Phone must start with 018********")
            return;
        }
        setLoading(true)
        try {
            const res = await fetch(`/api/search?phone=${phone}`)
            const json = await res.json()
            setData(json)
        } catch (error) {
            console.error("Search error:", error)
        } finally {
            setLoading(false)
        }
        setSearched(true)
    }

    return (
        <>
            <main className='flex justify-center items-center flex-col mt-10'>
                <h1 className='font-semibold mb-2'>Search Using Order ID:</h1>
                <form onSubmit={handleSearch} className='flex justify-center items-center mb-10 gap-5'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            required
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    <button type="submit" className='btn bg-[#41bce8] text-white'>Search</button>
                </form>

                {loading && <p>Loading...</p>}

                {!loading && data.length > 0 && (
                    <div className="w-full overflow-x-auto px-4">
                        <div className="max-w-7xl mx-auto bg-white shadow rounded-lg">
                            <table className="table table-zebra w-full">
                                <thead className="bg-[#41bce8] text-white">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Model</th>
                                        <th>Service</th>
                                        <th>Date</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="max-w-[150px] truncate">{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.model}</td>
                                            <td>{item.service}</td>
                                            <td>{item.date}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {
                    search && !loading && data.length === 0 && <h1 className='text-red-500 font-semibold'>No data found</h1>
                }


            </main>
        </>
    )
}
