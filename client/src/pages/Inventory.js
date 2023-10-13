import { useState } from "react"
import React  from 'react'

const Inventory = () => {
 const cities = ["Lahore", "Islamabad", "Karachi", "Peshawar", "Quetta", "Sialkot", "Multan"]; // Added Peshawar
  const rentPlots = [
    { city: "Lahore", name: "Rent Plot 1", id: 1 },
    { city: "Lahore", name: "Rent Plot 2", id: 2 },
    { city: "Islamabad", name: "Rent Plot 3", id: 3 },
    { city: "Karachi", name: "Rent Plot 4", id: 4 },
    { city: "Peshawar", name: "Rent Plot 5", id: 5 },
    { city: "Quetta", name: "Rent Plot 6", id: 6 },
    { city: "Quetta", name: "Rent Plot 7", id: 7 },
    { city: "Sialkot", name: "Rent Plot 8", id: 8 },
    { city: "Multan", name: "Rent Plot 9", id: 9 }, // Added Rent Plot for Peshawar
    // Add more rent plots as needed
  ];
  const salesPlots = [
    { city: "Lahore", name: "Sale Plot 1", id: 1 },
    { city: "Lahore", name: "Sale Plot 2", id: 2 },
    { city: "Islamabad", name: "Sale Plot 3", id: 3 },
    { city: "Karachi", name: "Sale Plot 4", id: 4 },
    { city: "Peshawar", name: "Sale Plot 5", id: 5 },
    { city: "Quetta", name: "Sale Plot 6", id: 6 },
    { city: "Quetta", name: "Sale Plot 7", id: 7 },
    { city: "Sialkot", name: "Sale Plot 8", id: 8 },
    { city: "Multan", name: "Sale Plot 9", id: 9 },
  ];

  const [activeTab, setActiveTab] = useState("rent");

  const renderPlots = (city) => {
    const plotData = activeTab === "rent" ? rentPlots : salesPlots;
    const filteredPlots = plotData.filter((plot) => plot.city === city);
    return (
      <div key={city}>
        <h3 className="text-xl font-semibold mb-2">{city}</h3>
        <ul>
          {filteredPlots.map((plot) => (
            <li key={plot.id} className="mb-2">
              <a
                href={`/Property/${plot.id}`} // Replace with the actual route to your details page
                className="text-blue-500 hover:underline"
              >
                {plot.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 ml-6 mt-4">Popular Plots</h2>
      <div className="flex ml-6 mt-2">
        <button
          className={`mr-4 ${
            activeTab === "rent"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          } px-6 py-2 rounded-lg`}
          onClick={() => setActiveTab("rent")}
        >
          Rent
        </button>
        <button
          className={`${
            activeTab === "sales"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setActiveTab("sales")}
        >
          Sales
        </button>
      </div>
      <div className="p-6">
        <div className="bg-gray-100 shadow-md p-9 rounded-lg grid grid-cols-5 gap-6 mx-6">
          {cities.map((city) => (
            <div key={city}>
              {renderPlots(city)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}  

export default Inventory
