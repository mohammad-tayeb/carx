'use client'

import React, { useState, useEffect } from 'react';

export default function CarsPageCards() {
  const [cars, setCars] = useState([]);

  const getCarsData = async () => {
     
  };

  useEffect(() => {
    getCarsData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
      {cars.length === 0 ? (
        <p>Loading cars...</p>
      ) : (
        cars.map((car, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt={`${car.make} ${car.model}`}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.make} {car.model}</h2>
              <p>
                Year: {car.year}<br />
                Type: {car.class}<br />
                Cylinders: {car.cylinders}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
