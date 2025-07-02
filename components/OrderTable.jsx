import { headers } from 'next/headers'
import Link from 'next/link'
// import { headers } from 'next/headers'
import React from 'react'

// load booking data
const getOrderData = async () => {
    const res = await fetch('http://localhost:3000/api/orders', {
        headers: headers()
    })
    const data = await res.json()
    return data
}

export default async function OrderTable() {
    // get the data from mongodb
    const data = await getOrderData()
    const totalOrders = data?.length
    console.log(data)


    return (
        <div>
            {totalOrders != 0 ?
                <>
                    <h1 className='text-center text-2xl font-bold mb-5'>Your Purchase: {totalOrders}</h1>
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 md:mx-20 mx-5">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>order ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Make</th>
                                    <th>Modal</th>
                                    <th>order Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {data.map(order => <tr key={order?._id}>
                                    <td>{order?._id}</td>
                                    <td>{order?.userName}</td>
                                    <td>{order?.userEmail}</td>
                                    <td>{order?.carMake}</td>
                                    <td>{order?.carModel}</td>
                                    <td>{order?.orderDate}</td>
                                    <td>{order?.price}</td>
                                    {order?.status === 'confirmed' && <td><span className='p-2 rounded-md bg-blue-500 text-white'>{order?.status}</span></td>}
                                    {order?.status === 'pending' && <td><span className='p-2 rounded-md bg-yellow-500 text-white'>{order?.status}</span></td>}
                                    {order?.status === 'shipped' && <td><span className='p-2 rounded-md bg-orange-500 text-white'>{order?.status}</span></td>}
                                    {order?.status === 'delivered' && <td><span className='p-2 rounded-md bg-green-500 text-white'>{order?.status}</span></td>}
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </>
                :
                <div className='flex flex-col justify-center items-center my-20'>
                    <h1 className='text-center text-2xl font-bold mb-5'>Your Orders: {totalOrders}</h1>
                    <h1 className='text-red-500 text-center text-2xl'>No data found! Please place a order</h1>
                    <Link href={"/cars"}><button className='request-loader mt-8'>Browse Cars</button></Link>
                </div>
            }

        </div>
    )
}
