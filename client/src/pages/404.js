import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const icon = `<svg className="" enable-background="new 0 0 226 249.135" height="249.135" id="Layer_1" overflow="visible" version="1.1" viewBox="0 0 226 249.135" width="226" xml:space="preserve" ><circle cx="113" cy="113" fill="#FFE585" r="109" /><line enable-background="new    " fill="none" opacity="0.29" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="88.866" x2="136.866" y1="245.135" y2="245.135" /><line enable-background="new    " fill="none" opacity="0.17" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="154.732" x2="168.732" y1="245.135" y2="245.135" /><line enable-background="new    " fill="none" opacity="0.17" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="69.732" x2="58.732" y1="245.135" y2="245.135" /><circle cx="68.732" cy="93" fill="#6E6E96" r="9" /><path d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z" enable-background="new    " fill="#FF9900" opacity="0.24" /><circle cx="156.398" cy="93" fill="#6E6E96" r="9" /><ellipse cx="67.732" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.372" ry="8.106" /><ellipse cx="154.88" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.371" ry="8.106" /><path d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z" fill="#FFEFB5" /><circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" stroke-width="8" /></svg>`

const PageNotFound = () => {
     // Dummy data
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    address: "123 Main St, New York, NY 10001",
    role: "Buyer",
    email: "john@example.com",
    phone: "(123) 456-7890",
    profileImage: "buyer-profile-image.jpg", // Replace with actual image URL
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedFullName, setEditedFullName] = useState(profileData.fullName);
  const [editedAddress, setEditedAddress] = useState(profileData.address);
  const [editedRole, setEditedRole] = useState(profileData.role);

  const fullNameInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const roleInputRef = useRef(null);

  const handleFullNameChange = (e) => {
    setEditedFullName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setEditedAddress(e.target.value);
  };

  const handleRoleChange = (e) => {
    setEditedRole(e.target.value);
  };

  const handleSave = () => {
    // Update the profile data with edited full name, address, and role
    setProfileData({
      ...profileData,
      fullName: editedFullName,
      address: editedAddress,
      role: editedRole,
    });
    setIsEditing(false);
  };
    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 bg-white shadow-md p-8 rounded-lg w-full max-w-screen-lg">
        <div className="flex justify-center">
          <img
            src={profileData.profileImage}
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            alt={""}
          />
        </div>
        <div className="text-center mt-4">
          {isEditing ? (
            <input
              type="text"
              value={editedFullName}
              onChange={handleFullNameChange}
              className="text-2xl font-semibold w-full outline-blue border rounded p-2"
              autoFocus
              ref={fullNameInputRef}
            />
          ) : (
            <h2 className="text-2xl font-semibold">{profileData.fullName}</h2>
          )}
          <p className="text-gray-500">{profileData.role}</p>
        </div>

        <div className="mt-8 flex justify-center">
          {isEditing ? (
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full mr-4"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-4"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p><span className="text-lg font-semibold">Email:  </span>{profileData.email}</p>
          <p><span className="text-lg font-semibold">Phone:  </span> {profileData.phone}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          {isEditing ? (
            <input
              type="text"
              value={editedAddress}
              onChange={handleAddressChange}
              className="w-full outline-blue border rounded p-2"
              autoFocus
              ref={addressInputRef}
            />
          ) : (
            <p>{profileData.address}</p>
          )}
        </div>
      </div>
    </div>
            <Footer />
        </>
    )
}

export default PageNotFound