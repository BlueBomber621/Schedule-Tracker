"use client"

// Importing React and Context
import React, { useContext } from 'react';
import { authContext } from '../lib/store/auth-context';

const Navbar = ({ page, setPage }) => {
    const { user, loading, logout } = useContext(authContext);

    return (
        <div className='p-2 w-full flex flex-col items-center bg-gray-100'>
            {/* Title */}
            <div className='p-2 flex items-center'>
                <h3 className='title-style text-4xl'>-ClipTrack-</h3>
            </div>
            <div className='bg-gray-200 flex items-center justify-between w-full'>
                {/* Profile */}
                <div className='px-6 py-2 flex items-center justify-start gap-2'>
                    <div className='w-[46px] h-[46px] bg-gray-900 overflow-hidden rounded-full'>
                        <img src={user.photoURL} alt={user.displayName} referrerPolicy="no-referrer" className='w-[46px] h-[46px]'/>
                    </div>
                    <p>Hello, {user.displayName}!</p>
                </div>
                {/* Buttons/Navigation */}
                <div className='px-6 py-2 flex items-center justify-end gap-2'>
                    <button className="btn-primary" onClick={() => setPage("home")}>Home</button>
                    <button className="btn-primary" onClick={() => setPage("profile")}>Profile</button>
                    <button className="btn-primary" onClick={() => setPage("schedule")}>Schedule</button>
                    <button className='btn-red' onClick={logout}>Logout</button>
                </div>
            </div> 
        </div>
        
    );
};

export default Navbar;