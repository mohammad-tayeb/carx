'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function CarsPageCards({ cars }) {
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    document.getElementById('car_modal').showModal();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {cars.length === 0 ? (
          <p>No cars found.</p>
        ) : (
          cars.map((car, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-sm cursor-pointer max-h-[400px]">
              <figure onClick={() => openModal(car)} className='h-[200px]'>
                <Image
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  width={300}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title uppercase text-[#41bce8]">{car.make} {car.model}</h2>
                <p>
                  Year: {car.year}<br />
                  Type: {car.class}<br />
                  Cylinders: {car.cylinders}
                </p>
                <div className="card-actions justify-end">
                  <Link href={`/cars/${car._id}`} className="btn bg-[#41bce8] text-white">Buy Now</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Single Modal */}
      <dialog id="car_modal" className="modal">
        {selectedCar && (
          <div className="modal-box">
            <div className='flex justify-center items-center mb-5'>
              <Image
                src={selectedCar.image}
                alt={`${selectedCar.make} ${selectedCar.model}`}
                width={500}
                height={500}
              />
            </div>
            <h2 className="card-title uppercase text-[#41bce8]">{selectedCar.make} {selectedCar.model}</h2>
            <p>
              Year: {selectedCar.year}<br />
              Type: {selectedCar.class}<br />
              Cylinders: {selectedCar.cylinders}<br />
              Drive: {selectedCar.drive}<br />
              Fuel Type: {selectedCar.fuel_type}<br />
              Highway Mpg: {selectedCar.highway_mpg}
            </p>
            <div className="card-actions justify-end modal-action">
              <Link href={`/cars/${selectedCar._id}`} className="btn bg-[#41bce8] text-white">View Details</Link>
            </div>
          </div>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
