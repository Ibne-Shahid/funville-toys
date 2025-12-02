import React from 'react'
import { PiFinnTheHumanFill } from 'react-icons/pi'
import { TbHorseToy } from 'react-icons/tb'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2'
import Spinner from './Spinner'

const NavBar = () => {
    const { user, logOut, loading } = React.useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been logged out successfully.",
                    icon: "success"
                });
            })
            .catch((error) => {
                const errorMessage = error.message

                Swal.fire({
                    title: "Error!",
                    text: errorMessage,
                    icon: "error"
                });
            });
    }

    return (
        // Sticky wrapper with high z-index
        <div className="sticky top-0 z-50 w-full">
            <div className="navbar bg-primary shadow-sm px-5 md:px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-semibold'>
                                <NavLink
                                    className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='font-semibold'>
                                <NavLink
                                    className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                    to="/allToys"
                                >
                                    Toys
                                </NavLink>
                            </li>
                            {
                                user && <>
                                    <li className='font-semibold'>
                                        <NavLink
                                            className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                            to="/myProfile"
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li className='font-semibold'>
                                        <NavLink
                                            className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                            to="/forYou"
                                        >
                                            For You
                                        </NavLink>
                                    </li>
                                </>
                            }
                            
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                    to="/aboutUs">
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <a className="text-xl md:text-3xl font-extrabold text-secondary flex items-center">
                        <TbHorseToy className='mr-2' />
                        FunVille
                        <span className='text-accent'>Toys</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">
                        <li className='font-semibold'>
                            <NavLink
                                className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink
                                className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                to="/allToys"
                            >
                                Toys
                            </NavLink>
                        </li>
                        {
                            user && <>
                                <li className='font-semibold'>
                                    <NavLink
                                        className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                        to="/myProfile"
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                                <li className='font-semibold'>
                                    <NavLink
                                        className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                        to="/forYou"
                                    >
                                        For You
                                    </NavLink>
                                </li>
                            </>
                        }
                        
                        <li className='font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? "bg-black text-white" : ""}
                                to="/aboutUs">
                                About Us
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mr-3 hidden md:block'>
                        {user && user?.email}
                    </div>
                    <div className='mr-3 bg-gray-300 p-1 rounded-full relative group'>
                        {loading ? (
                            <Spinner />
                        ) : user ? (
                            <>
                                <img
                                    className='w-10 h-10 object-cover rounded-full'
                                    src={user?.photoURL}
                                    alt={user?.displayName || "User"}
                                />
                                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                                    {user?.displayName || "No Name"}
                                </span>
                            </>
                        ) : (
                            <PiFinnTheHumanFill size={35} />
                        )}
                    </div>
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-secondary text-white"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            className="btn btn-secondary text-white"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar