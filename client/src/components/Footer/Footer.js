import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="border-gray-200 rounded-b-sm px-4 lg:px-6 py-2.5 bg-gray-800">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Real Estate</span>
                </div>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="/aboutus" class="mr-4 hover:text-info md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="/policy" class="mr-4 hover:text-info md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/" class="hover:text-info">Home</Link>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 3 <Link to="/" class="hover:text-info">Real Estate™</Link>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer