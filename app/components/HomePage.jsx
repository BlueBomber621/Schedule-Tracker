"use client"

import React from 'react';

export default function HomePage({ setPage }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className="text-4xl mb-8">Welcome to ClipTrack</h1>
        <button 
          className="btn bg-blue-500 text-white p-4 rounded-lg w-full max-w-md"
          onClick={() => setPage('profile')}
        >
          Profile
        </button>
        <button 
          className="btn bg-green-500 text-white p-4 rounded-lg w-full max-w-md"
          onClick={() => setPage('schedule')}
        >
          Schedule
        </button>
        <button 
          className="btn bg-yellow-500 text-white p-4 rounded-lg w-full max-w-md"
          onClick={() => setPage('create')}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}