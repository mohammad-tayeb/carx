import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

// Load test drive booking data
const getTestDriveData = async () => {
  const res = await fetch('http://localhost:3000/api/myTestDriveAppointments', {
    headers: headers(),
  });
  const data = await res.json();
  return data;
};

export default async function TestDriveTable() {
  const data = await getTestDriveData();
  const totalBookings = data?.length || 0;

  return (
    <div>
      {totalBookings !== 0 ? (
        <>
          <h1 className="text-center text-2xl font-bold mb-5">Your Test Drive Bookings: {totalBookings}</h1>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 md:mx-20 mx-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Car</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((booking) => (
                  <tr key={booking?._id}>
                    <td>{booking?._id}</td>
                    <td>{booking?.name}</td>
                    <td>{booking?.email}</td>
                    <td>{booking?.phone}</td>
                    <td>{booking?.car}</td>
                    <td>{booking?.date}</td>
                    <td>{booking?.time}</td>
                    <td>{booking?.location}</td>
                    <td>{booking?.message || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center my-20">
          <h1 className="text-center text-2xl font-bold mb-5">Your Test Drive Bookings: {totalBookings}</h1>
          <h1 className="text-red-500 text-center text-2xl">No bookings found! Please book a test drive.</h1>
          <Link href="/testDrive">
            <button className="request-loader mt-8">Book Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
