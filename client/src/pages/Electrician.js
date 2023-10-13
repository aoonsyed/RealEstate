import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Electrician = () => {
  const [electricians, setElectricians] = useState([]);

  useEffect(() => {
    // console.log()
    // Make an Axios request to fetch electricians data from your API.
    axios.get('http://127.0.0.1:8000/api/users')
      .then((response) => {
        setElectricians(response.data); 
        console.log(response)// Assuming the API returns an array of electricians
      })
      
      .catch((error) => {
        console.error('Error fetching data:', error);
        console.log(error)
      });
  }, []);

  return (
    <>
      <Header />
      <h3 className="text-center text-2xl font-semibold mt-8">Trusted Electricians</h3>

      <div className="flex space-x-8 mt-12 mb-10">
        {electricians.map((electrician, index) => (
          <a key={index} href="/dashboard" className="group relative block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-80 h-90 ml-16">
            {/* Your electrician data here */}
            <img
              alt="Electrician"
              src={electrician.imageURL} // Replace with the appropriate image URL field from your API
              className="w-full h-32 object-cover transition-opacity opacity-75"
            />
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="group-hover:opacity-100">
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                  Electrician
                </p>
                <p className="text-xl font-bold text-gray-800 sm:text-2xl">{electrician.name}</p> {/* Replace with the name field from your API */}
                <div className="mt-4">
                  <div className="text-sm text-gray-600">
                    {electrician.description} {/* Replace with the description field from your API */}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Electrician;
