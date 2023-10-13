import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Privacypolicy = () => {
    return (
        <div>
            <Header />
            <div>
                <main>
                    <div className="min-h-screen bg-gray-50 flex flex-col justify-start sm:px-6 lg:px-8">
                        <div className="mt-10">
                            <h2 className="text-center text-3xl text-gray-900">Privacy Policy</h2>
                            <div className="flex flex-col items-center py-8">
                                <div className="flex flex-col w-full mb-12 text-left">
                                    <div className="w-full mx-auto lg:w-1/2 px-3 px-lg-0 text-justify">
                                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-600">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                            <br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                            <br />
                                            <br />
                                        </p>

                                        <h2 className="mx-auto mt-4 mb-4 text-2xl text-black">
                                            Personal Information We Collect
                                        </h2>

                                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-600">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                            <br />
                                            <br />
                                        </p>

                                        <h3 className="mx-auto mt-4 mb-4 text-xl text-black">
                                            Personal Information we collect from you
                                        </h3>

                                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-600">
                                            We may collect the following categories of Personal Information directly from you:
                                            <br />
                                            <br />
                                        </p>
                                        <ul className="list-disc ml-0 md:ml-12 text-gray-600">
                                            <li>
                                                <span className="text-black font-bold">Identification Information</span>, such
                                                as name, email, phone number;
                                            </li>

                                            <li>
                                                <span className="text-black font-bold">Correspondence</span>, such as
                                                information you provide to us in correspondence, including account opening and
                                                customer support; and
                                            </li>

                                            <li>
                                                <span className="text-black font-bold">Sensory Information</span>, such as
                                                images that you upload to your User Profile;
                                            </li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Privacypolicy