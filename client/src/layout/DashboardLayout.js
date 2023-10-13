import { Dialog, Menu, Transition } from '@headlessui/react';
import { RiPencilRulerLine } from 'react-icons/ri';
import {
    BellIcon,
    FolderIcon,
    HomeIcon,
    MenuAlt2Icon,
    XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import React, { Fragment, useEffect, useState } from 'react';
import { BsMegaphone } from 'react-icons/bs';
import { MdOutlineIntegrationInstructions, MdWorkOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Profile from '../pages/Profile';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


export const DashboardLayout = (props) => {
    const dispatch = useDispatch()
    const router = useParams();

    const [sidebarOpen, setSidebarOpen] = useState(false);


    const contractorNavigation =
        window.innerWidth < 768
            ? [
                { name: 'Dashboard', href: '/dashboard', pathname: '/dashboard', icon: HomeIcon },
                {
                    name: 'Add Post',
                    href: `/addPost`,
                    pathname: '/addPost',
                    icon: SearchIcon,
                },
                {
                    name: 'Your Posts',
                    href: '/yourPost',
                    pathname: '/yourPost',
                    icon: FolderIcon,
                },
                {
                    name: 'All Posts',
                    href: '/allPost',
                    pathname: '/allPost',
                    icon: MdWorkOutline,
                },
              
            ]
            : [
                { name: 'Dashboard', href: '/dashboard', pathname: '/dashboard', icon: HomeIcon },
                {
                    name: 'Add Post',
                    href: `/addPost`,
                    pathname: '/addPost',
                    icon: SearchIcon,
                },
                {
                    name: 'Your Post',
                    href: '/yourPost',
                    pathname: '/yourPost',
                    icon: FolderIcon,
                },
                {
                    name: 'All Post',
                    href: '/allPost',
                    pathname: '/allPost',
                    icon: MdWorkOutline,
                },
            ];

    const logout = () => {
        dispatch({
            type: "SET_USER",
            payload: null
        })
    };

    const userNavigation = [
        { name: 'Profile', href: '/profile', onClick: () => window.location.href = '/Profile' },
        { name: 'Logout', href: '', onClick: logout },
    ];

    const navigation = contractorNavigation

    const dropDownNav = userNavigation;

    const profileIcon = null;

    

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <Link to="/dashboard" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                            <img
                                                src="https://flowbite.com/docs/images/logo.svg"
                                                style={{ maxWidth: '200px', marginTop: '8px', marginLeft: '10px' }}
                                                alt="project Logo"
                                            />
                                            <p className='font-bold text-2xl'>
                                                Real Estate
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2 space-y-1">
                                            {navigation.map((item) => {
                                                return (
                                                    <Link to={item.href}>
                                                        <div
                                                            key={item.name}
                                                            className={classNames(
                                                                router.pathname === item.pathname
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer'
                                                            )}
                                                        >
                                                            <div className="flex flex-row">
                                                                {item.name === 'Branding' ? (
                                                                    <img src="/assets/branding.png" alt="Branding" className={classNames(
                                                                        router.pathname === item.pathname
                                                                            ? 'text-gray-500'
                                                                            : 'text-gray-400 group-hover:text-gray-500',
                                                                        'mr-4 flex-shrink-0 h-6 w-6'
                                                                    )} style={{}} />
                                                                ) : (
                                                                    <item.icon
                                                                        className={classNames(
                                                                            router.pathname === item.pathname
                                                                                ? 'text-gray-500'
                                                                                : 'text-gray-400 group-hover:text-gray-500',
                                                                            'mr-4 flex-shrink-0 h-6 w-6'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                )}

                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
                        </div>
                    </Dialog>
                </Transition.Root>

                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                        <div className="flex items-center gap-4 flex-shrink-0 px-4">
                            <Link to="/dashboard" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    style={{ maxWidth: '200px', marginTop: '8px', marginLeft: '10px' }}
                                    alt="project Logo"
                                />
                                <p className='font-bold text-2xl'>
                                    Real Estate
                                </p>
                            </Link>
                        </div>
                        <div className="mt-5 flex-grow flex flex-col justify-start px-3">
                            <nav className="px-2 space-y-1">
                                {navigation.map((item) => {
                                    return (
                                        <Link to={item.href}>
                                            <div
                                                key={item.name}
                                                className={classNames(
                                                    router.pathname === item.pathname
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer'
                                                )}
                                            >
                                                <div className="flex flex-row">
                                                    {item.name === 'Branding' ? (
                                                        <img className={classNames(
                                                            router.pathname === item.pathname
                                                                ? 'text-gray-500'
                                                                : 'text-gray-400 group-hover:text-gray-500',
                                                            'mr-4 flex-shrink-0 h-6 w-6'
                                                        )} src="/assets/branding.png" alt="Branding" />
                                                    ) : (
                                                        <item.icon
                                                            className={classNames(
                                                                router.pathname === item.pathname
                                                                    ? 'text-gray-500'
                                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                                'mr-4 flex-shrink-0 h-6 w-6'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    )}

                                                    {item.name}
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1" style={{ height: '100vh' }}>
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={profileIcon || 'https://ui-avatars.com/api/?name=DeepLawn'}
                                                alt="User Avatar"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {dropDownNav.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <div
                                                            onClick={item.onClick}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="flex-1 bg-gray-100">
                        {/* <div className=""> */}
                        {props.children}
                        {/* </div> */}
                    </main>
                </div>
            </div>
        </>
    );
};
