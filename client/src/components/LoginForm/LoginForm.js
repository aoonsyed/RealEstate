import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BsLockFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
// import { setAccessToken } from './auth';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const onSignIn = async (e) => {
        e.preventDefault();
        if (email === '') {
            setErrorMessages(['Please Enter your Email']);
            return;
        }
        if (password === '') {
            setErrorMessages(['Please Enter a Password']);
            return;
        }
        const { data } = await axios.post("http://127.0.0.1:8000/api/login", { email, password }, {
    withCredentials: true
});

    axios.defaults.headers.common['Authorization']= 'Bearer ${data.access_token]}';

        console.log(data.access_token)
        localStorage.setItem("token",data.access_token)
        if (data.message) {
            setErrorMessages([`${data.message}`]);
            return;
        } else {
            dispatch({
                type: "SET_USER",
                payload: data
            });
            navigate("/dashboard", { replace: true });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative" style={{backgroundImage:'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80")'}}>
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{filter: 'blur(8px)' }}></div>
            
            {/* Content Container */}
            <div className="bg-white bg-opacity-75 rounded-lg p-8 w-full max-w-md space-y-8">
                {errorMessages.length ? <ErrorPopup errors={errorMessages} /> : null}
                <div>
                    <img
                        className="mx-auto h-12"
                        style={{ width: '30%', height: '30%' }}
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Deep Lawn Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/SignupForm" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign Up
                        </Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={onSignIn}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
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
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
