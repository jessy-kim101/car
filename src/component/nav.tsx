//import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import  {persistor, type RootState} from '../app/store';
// import { logout } from '../features/login/userSlice';

const Nav = () => {
  // const dispatch = useDispatch();

  
  // const user = useSelector((state: RootState) => state.user.user);

  // const handleLogout = async () => {
  //   try {
  //     dispatch(logout()); // Clear user and token in Redux
  //     // await persistor.purge(); // Clear persisted state
  //     setIsDropdownOpen(false);
  //     navigate('/login');
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //   }
  // };

  
  const activeClassname = 'text-primary font-medium';
  const inactiveClassname = 'hover:text-primary font-medium';

  return (
    <nav className="navbar bg-yellow shadow-md px-4 fixed top-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-yellow rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cars" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
                Cars
              </NavLink>
            </li>
            <li>
              <NavLink to="/locations" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
                Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary hover:white">JESSICA MOTORS</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li className="hover:white transition duration-200">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Home
            </NavLink>
          </li>
          <li className="hover:white transition duration-200">
            <NavLink to="/cars" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Cars
            </NavLink>
          </li>
          <li className="hover:white transition duration-200">
            <NavLink to="/locations" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Bookings
            </NavLink>
          </li>
          <li className="hover:white transition duration-200">
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              About
            </NavLink>
          </li>
          <li className="hover:white transition duration-200">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div>
            <button className="btn btn-primary hidden lg:block">
              <NavLink to="/login" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Login
              </NavLink>
            </button>

          </div>
      </div>

      
    </nav>
  );
};

export default Nav;