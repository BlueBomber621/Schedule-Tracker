"use client"

import React, { useContext } from 'react';
import { authContext } from '../lib/store/auth-context';

export default function ProfilePage({ setPage }) {
  const { user, logout } = useContext(authContext);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl mb-4">Profile</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{user.displayName}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{user.email}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
        <img src={user.photoURL} alt={user.displayName} className="mt-1 block w-24 h-24 rounded-full" referrerPolicy="no-referrer" />
      </div>
      <div className="flex justify-end">
        <button 
          className="btn-red"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}