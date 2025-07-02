"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CarExchange({ cars }) {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Get distinct makes
  const distinctMakes = [...new Set(cars.map(car => car.make))];

  // Get models for selected make
  const filteredModels = [...new Set(
    cars
      .filter(car => car.make === selectedMake)
      .map(car => car.model)
  )];

  // Get years for selected model
  const filteredYears = [...new Set(
    cars
      .filter(car => car.model === selectedModel)
      .map(car => car.year) // assuming `year` is a property in your car object
  )];


  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data from e.target:");
    console.log(data); // all values from the form

    toast.loading("Submitting Request!", { duration: 400 });
    toast.dismiss();
    toast.success("Request Successfully Sent!");
  };

  return (
    <div id="carSwap" className="min-h-screen py-10 px-4 md:px-10">
      {/* <h1>{JSON.stringify(cars)}</h1> */}
      <h1 className="text-4xl font-bold text-center text-[#41bce8] mb-10">
        Car Exchange Request
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Old Car Form */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Your Current Car
            </h2>
            <div className="space-y-4">
              <input
                required
                name="old_make"
                type="text"
                placeholder="Make (e.g. Toyota)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                required
                name="old_model"
                type="text"
                placeholder="Model (e.g. Corolla)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                required
                name="old_year"
                type="number"
                placeholder="Year (e.g. 2018)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                required
                name="old_condition"
                type="text"
                placeholder="Condition (e.g. Good, Excellent)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* New Car Form */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Desired Exchange Car
            </h2>
            <div className="space-y-4">

              <select
                required
                name="new_make"
                className="w-full px-4 py-2 border border-gray-300 rounded select"
                onChange={(e) => setSelectedMake(e.target.value)}
                value={selectedMake}
              >
                <option value="" disabled>Select Make</option>
                {distinctMakes.map((make, index) => (
                  <option key={index} value={make}>{capitalize(make)}</option>
                ))}
              </select>

              {/* Model Selector */}
              <select
                required
                name="model"
                className="w-full px-4 py-2 border border-gray-300 rounded select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedMake}
              >
                <option value="" disabled>Select Model</option>
                {filteredModels.map((model, idx) => (
                  <option key={idx} value={model}>{capitalize(model)}</option>
                ))}
              </select>

              {/* Year Selector */}
              <select
                required
                name="year"
                onChange={(e) => setSelectedYear(e.target.value)}
                value={selectedYear}
                className="w-full px-4 py-2 border border-gray-300 rounded select"
                disabled={!selectedModel}
              >
                <option value="" disabled>Select Year</option>
                {filteredYears.map((year, idx) => (
                  <option key={idx} value={year}>{year}</option>
                ))}
              </select>
              <input
                required
                name="new_color"
                type="text"
                placeholder="Preferred Color (e.g. White)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-[#41bce8] hover:bg-[#33add2] text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Submit Exchange Request
          </button>
        </div>
      </form>

      <h1 className="text-red-500 text-center mt-10 font-semibold">
        NB: Our representative will call you shortly for confirmation and a
        meetup schedule. <br /> Thank you!
      </h1>
    </div>
  );
}
