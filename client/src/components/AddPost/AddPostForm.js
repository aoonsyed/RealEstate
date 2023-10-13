import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

const AddPostForm = () => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.user)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [price, setPrice] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const onAdd = async (e) => {
        e.preventDefault();
        if (name === '') {
            setErrorMessages(['Please Enter Name for the post']);
            return
        }
        if (description === '') {
            setErrorMessages(['Please Enter description for the post']);
            return
        }
        if (address === '') {
            setErrorMessages(['Please Enter address for the post']);
            return
        }
        if (area === '') {
            setErrorMessages(['Please Enter the area']);
            return
        }
        if (price === '') {
            setErrorMessages(['Please Enter the price']);
            return
        }
        const { data } = await axios.post("http://localhost:9000/createPost", { name, description, address, area, price, user: user?._id })
        if (data.message) {
            setErrorMessages([`${data.message}`]);
            return
        } else {
            navigate("/yourPost", { replace: true })
        }
    };


    return (
        <>
            {errorMessages.length ? <ErrorPopup errors={errorMessages} /> : null}
            <main className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">

                    <form className="mt-8 space-y-6" onSubmit={onAdd}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm space-y-3">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Post Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Post Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="sr-only">
                                    Description
                                </label>
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Description"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="sr-only">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Address"
                                />
                            </div>
                            <div>
                                <label htmlFor="area" className="sr-only">
                                    Area in sqFeet
                                </label>
                                <input
                                    id="area"
                                    name="area"
                                    type="text"
                                    onChange={(e) => setArea(e.target.value)}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Area in sqFeet"
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="sr-only">
                                    Price
                                </label>
                                <input
                                    id="price"
                                    name="price"
                                    type="text"
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Price"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Post
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default AddPostForm