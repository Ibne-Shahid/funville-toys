import React from 'react'
import { TbHorseToy } from 'react-icons/tb'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-300 shadow-sm px-5 md:px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-semibold'><NavLink className={({isActive})=>isActive?"bg-black text-white": ""} to="/">Home</NavLink></li>
                            <li className='font-semibold'><NavLink className={({isActive})=>isActive?"bg-black text-white": ""} to="/myProfile">My Profile</NavLink></li>
                            <li className='font-semibold'><NavLink className={({isActive})=>isActive?"bg-black text-white": ""} to="/favourites">Favourites</NavLink></li>
                        </ul>
                    </div>
                    
                    <a className="text-xl md:text-3xl font-extrabold text-secondary flex items-center"><TbHorseToy className='mr-2'/> FunVille <span className='text-primary'>Toys</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">
                        <li className='font-semibold'><NavLink className={({isActive})=>isActive?"bg-black text-white": ""} to="/">Home</NavLink></li>
                        <li className='font-semibold'><NavLink className={({isActive})=>isActive?"bg-black text-white": ""} to="/myProfile">My Profile</NavLink></li>
                        <li className='font-semibold'><NavLink className={({isActive})=>isActive?"bg-black text-white": ""} to="/favourites">Favourites</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-accent text-white">Button</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar