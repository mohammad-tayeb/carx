import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'
// load booking data
const getRentData = async () => {
  const res = await fetch('http://localhost:3000/api/rents', {
    headers: headers()
  })
  const data = await res.json()
  return data
}

export default async function RentsTable() {
  // get the data from mongodb
  const data = await getRentData()
  const totalRents = data?.length
  console.log(data)


  return (
    <>
      <div className="md:mx-20 mx-5 md:my-20 my-10">
        <h1 className='text-center text-2xl font-bold mb-5'>Your Rents: {totalRents}</h1>
        {
          totalRents === 0 ?
            <div className='flex flex-col justify-center items-center my-20'>
              <h1 className='text-red-500 text-center text-2xl'>No data found! Please place an order</h1>
              <Link href={"/cars"}><button className='request-loader mt-8'>Browse Cars</button></Link>
            </div>
            :
            <table className='table'>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Pickup Date</th>
                  <th>Return Date</th>
                  <th>Pickup Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map(order => (
                  <tr key={order?._id}>
                    <td>{order?._id}</td>
                    <td>{order?.userName}</td>
                    <td>{order?.userEmail}</td>
                    <td>{order?.carMake}</td>
                    <td>{order?.carModel}</td>
                    <td>{order?.pickupDate}</td>
                    <td>{order?.returnDate}</td>
                    <td>{order?.pickupLocation}</td>
                    <td>
                      {order?.status === 'confirmed' && <span className='p-2 rounded-md bg-blue-500 text-white'>{order?.status}</span>}
                      {order?.status === 'pending' && <span className='p-2 rounded-md bg-yellow-500 text-white'>{order?.status}</span>}
                      {order?.status === 'shipped' && <span className='p-2 rounded-md bg-orange-500 text-white'>{order?.status}</span>}
                      {order?.status === 'delivered' && <span className='p-2 rounded-md bg-green-500 text-white'>{order?.status}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        }
      </div>
    </>
  )
}
