"use client"

import React, { useContext } from 'react';
import { appContext } from '../lib/store/app-context';

export default function ViewTaskPage({ page, setPage }) {
  const { tasks } = useContext(appContext);
  const taskId = page.replace("view-", "");
  const task = tasks.find(item => item.id === taskId);

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title */}
      <div className='flex items-center justify-start w-full gap-4 mb-4'>
        <h1 className="text-4xl">{task.title}</h1>
        <button 
          className="btn-red" 
          onClick={() => setPage('schedule')}
        >
          Back
        </button>
      </div>
      {/* Task Details */}
      <div className="bg-gray-200 shadow-md rounded-lg p-4">
        <div className='flex items-center justify-between mb-2'>
          <h2 className="text-2xl font-bold">{task.title}</h2>
          <p className="text-2xl">{'!'.repeat(task.urgency)}</p>
        </div>
        <div className='flex gap-2 mb-2'>
            <p className={new Date(task.setTime).getTime() < new Date().getTime() ? "text-red-500" : "text-gray-600"}>Time: {new Date(task.setTime).toLocaleString()}</p>
            {new Date(task.setTime).getTime() < new Date().getTime() && (
                <p className="text-red-500">(Expired)</p>
            )}
        </div>
        <p className="text-gray-600 mb-2">Description: {task.desc}</p>
      </div>
    </div>
  );
}