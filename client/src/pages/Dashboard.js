import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DashboardLayout } from '../layout/DashboardLayout';

const Dashboard = ({ currentUser }) => {
  const [profileData, setProfileData] = useState({
    fullName: 'Abdul Muiz',
    address: '123 Main St, New York, NY 10001',
    role: 'Electrician',
    email: 'john@example.com',
    phone: '(123) 456-7890',
    profileImage: 'buyer-profile-image.jpg', // Replace with actual image URL
  });
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [electricianData, setElectricianData] = useState({}); // To store the electrician data

  // Function to fetch electrician data
  const fetchElectricianData = () => {
    axios.get('http://127.0.0.1:8000/api/users')
      .then((response) => {
        // Assuming your API returns a single electrician object
        setElectricianData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching electrician data:', error);
      });
  };

  useEffect(() => {
    // Fetch electrician data when the component mounts
    fetchElectricianData();
  }, []);

  const openContactPopup = () => {
    setContactPopupOpen(true);
  };

  const closeContactPopup = () => {
    setContactPopupOpen(false);
  };

  const sendMessage = () => {
    // Handle sending the message here
    console.log('Sending message:', message);
    // Clear the message input and close the popup
    setMessage('');
    closeContactPopup();
  };

  return (
    <div>
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 bg-white shadow-md p-8 rounded-lg w-full max-w-screen-lg">
            <div className="flex justify-center">
              <img
                src={electricianData.profileImage}
                className="w-32 h-32 rounded-full border-4 border-blue-500"
                alt={electricianData.fullName}
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold">
                {electricianData.fullName}
              </h2>
              <p className="text-gray-500">
                {electricianData.role }
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                className="bg-blue-500 hover-bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                onClick={openContactPopup}
              >
                Contact
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p>Email: {electricianData.email }</p>
              <p>Phone: {electricianData.phone }</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>
                {electricianData.address }
              </p>
            </div>

            {isContactPopupOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
                <div className="bg-white p-6 rounded-lg w-full max-w-md">
                  <h3 className="text-xl font-semibold mb-2">Send Message</h3>
                  <textarea
                    className="w-full border rounded p-2 mb-2"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 hover-bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-2"
                      onClick={sendMessage}
                    >
                      Send
                    </button>
                    <button
                      className="bg-gray-400 hover-bg-gray-500 text-white font-semibold py-2 px-4 rounded-full"
                      onClick={closeContactPopup}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
