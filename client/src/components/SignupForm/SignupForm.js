import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsLockFill } from 'react-icons/bs';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const userType = [
    {
        name: "Buyer"
    },
    {
        name: "Seller"
    },
    {
        name: "Designer"
    },
    {
        name: "Civil Engineer"
    },
    {
        name: "Electrition"
    },
    {
        name: "Painter"
    },
    {
        name: "Carpanter"
    }
]

const SignupForm = () => {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [name, setname] = useState('');
    const [profession, setProfession] = useState('userType[0].name');
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const navigate = useNavigate()

    const onSignUp = async (e) => {
        e.preventDefault();
    let data; // Declare 'data' here
    try {
        var userType= profession;
        console.log(name, email, userType)
        const response = await axios.post("http://127.0.0.1:8000/api/register", { name, email, userType, password });
        data = response.data; // Assign the response data to 'data'
        console.log(data)
    } catch (error) {
        console.error('Error:', error);
    }

    if (data && data.message) {
        setErrorMessages(['User Already Exists']);
        return;
    } else {
        navigate("/login", { replace: true });
    }
        
        if (profession === '') {
            setErrorMessages(['Please Select your Profession']);
            return
        }
        if (email === '') {
            setErrorMessages(['Please Enter your Email']);
            return
        }
        if (password === '') {
            setErrorMessages(['Please Enter a Password']);
            return
        }
        
        
       
    };


    return (
        <>

            <div className="flex items-center justify-center " style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80")' }}>
                {/* {errorMessages.length ? <ErrorPopup errors={errorMessages} /> : null} */}
                <div className="bg-white bg-opacity-75 rounded-lg p-8 w-full max-w-md space-y-8">

                    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                            <div>
                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                    Sign Up for your account
                                </h2>
                            </div>

                            <form className="mt-8 space-y-6" onSubmit={onSignUp}>
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm space-y-2">
                                    <div className='flex w-full'>
                                        <div className='w-1/2'>
                                            <label htmlFor="email" className="sr-only">
                                                User Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                onChange={(e) => setname(e.target.value)}
                                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="User Name"
                                            />
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Confirm Password
                                        </label>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className='w-full'>
                                            <button
                                                onClick={() => setOpen(!open)}
                                                className="w-full justify-between text-gray-700 bg-indigo-50 hover:bg-indigo-100 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                                            >
                                                <div className='truncate'>
                                                    {profession}
                                                </div>
                                                <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                            <div className={`z-10 ${open ? "block" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[450px] `}>
                                                <ul className="py-2 text-sm text-gray-700 max-h-40 overflow-auto" aria-labelledby="states-button">
                                                    {userType.map(work => (
                                                        < li key={work.name} >
                                                            <button
                                                                onClick={() => setProfession(work.name)}
                                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                                <div className="inline-flex items-center truncate">
                                                                    {work.name}
                                                                </div>
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <BsLockFill />
                                        </span>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div >
                    </main >
                </div>
            </div>
        </>
    )
}

export default SignupForm