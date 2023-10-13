import React, { useState, useRef } from "react";
const Profile = () => {
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
  )
}

export default Profile
