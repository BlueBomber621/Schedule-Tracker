"use client"

import React, { useState, useContext } from 'react';
import { appContext } from '../lib/store/app-context';
import { authContext } from '../lib/store/auth-context';

export default function CreateTaskPage({ setPage }) {
    const { addTask } = useContext(appContext);
    const { user } = useContext(authContext);

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    setTime: '',
    urgency: '0',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const newTask = {
        ...formData,
        uid: user.uid,
    }
    addTask(newTask);
    setPage('schedule');
  };

  const getMinDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 1); // Round to the nearest future minute
    const offset = now.getTimezoneOffset();
    const localISOTime = new Date(now.getTime() - (offset * 60 * 1000)).toISOString().slice(0, 16);
    return localISOTime;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl mb-4">Create Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input 
            type="text" 
            name="title" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
            value={formData.title}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            name="desc" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
            value={formData.desc}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Set Time</label>
          <input 
            type="datetime-local" 
            name="setTime" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
            min={getMinDateTime()}
            value={formData.setTime}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Urgency</label>
          <select 
            name="urgency" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
            value={formData.urgency}
            onChange={handleChange}
            required
          >
            <option value="0">0 - Low</option>
            <option value="1">1 - Medium</option>
            <option value="2">2 - High</option>
            <option value="3">3 - Critical</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="btn-green p-2"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}