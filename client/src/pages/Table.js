import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios"; // Import Axios
import Footer from "../components/Footer/Footer";
import SellerHeader from "../components/Header/SellerHeader";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [newEntry, setNewEntry] = useState({
    owner: "",
    location: "",
    Description: "",
    size: "",
    price: "",
    shares: "",
    Image: "",
  });
  const [editingEntry, setEditingEntry] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Track selected image file

  const openAddDialog = () => {
    setIsOpen(true);
    setEditingEntry(null);
    setNewEntry({
      owner: "",
      location: "",
      Description: "",
      size: "",
      price: "",
      shares: "",
      Image: "",
    });
    setImageFile(null); // Reset selected image file
  };

  const openEditDialog = (entry) => {
    setIsOpen(true);
    setEditingEntry(entry.id);
    setNewEntry({ ...entry });
  };

  const closeDialog = () => {
    setIsOpen(false);
    setImageFile(null); // Reset selected image file
  };

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/plot/update/${editingEntry}`,
        newEntry
      );

      if (response.status === 200) {
        const updatedData = data.map((entry) =>
          entry.id === editingEntry ? { ...newEntry, id: entry.id } : entry
        );
        setData(updatedData);
        closeDialog();
      } else {
        console.error("Failed to update entry.");
      }
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  const handleAddSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/plot/store",
        newEntry
      );

      if (response.status === 201) {
        const updatedNewEntry = {
          ...newEntry,
          id: data.length + 1,
          Image: imageFile ? URL.createObjectURL(imageFile) : "",
        };
        setData([...data, updatedNewEntry]);
        closeDialog();
      } else {
        console.error("Failed to add entry.");
      }
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/plot/delete/${id}`
      );

      if (response.status === 200) {
        const updatedData = data.filter((entry) => entry.id !== id);
        setData(updatedData);
      } else {
        console.error("Failed to delete entry.");
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/plot/store"
        );

        if (response.status === 200) {
          setData(response.data);
        } else {
          console.error("Failed to fetch data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <SellerHeader />
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={openAddDialog}
        >
          Add Entry
        </button>
      </div>

      <div className="container mx-auto mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Owner</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Size</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry.id}>
                  <td className="border px-4 py-2 text-center">
                    {entry.owner}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {entry.location}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <img
                      src={entry.Image}
                      alt="Property"
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {entry.Description}
                  </td>
                  <td className="border px-4 py-2 text-center">{entry.size}</td>
                  <td className="border px-4 py-2 text-center">{entry.price}</td>
                  <td className="border px-4 py-2 flex justify-center items-center space-x-2">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
                      onClick={() => openEditDialog(entry)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
                      onClick={() => handleDelete(entry.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          {/* ... Dialog content ... */}
          <div className="mt-4">
            {editingEntry !== null ? (
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={handleEditSubmit}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={handleAddSubmit}
              >
                Add
              </button>
            )}
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={closeDialog}
            >
              Cancel
            </button>
          </div>
        </Dialog>
      </Transition>
      <Footer />
    </>
  );
};

export default Table;
