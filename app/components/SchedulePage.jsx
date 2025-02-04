"use client"

import React, { useContext } from 'react';
import { FaTrash } from "react-icons/fa";
import { appContext } from '../lib/store/app-context';

export default function SchedulePage({ setPage }) {
  const { tasks, removeTask } = useContext(appContext);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title */}
      <div className='flex items-center justify-start w-full gap-4 mb-4'>
          <h1 className="text-4xl">Schedule Page</h1>
          <button className='text-green-500 hover:text-yellow-500' onClick={() => setPage("create")}>+ Create Task</button>
      </div>
      <div className='flex flex-col gap-2'>
          {tasks.map(item => {
              const dueDate = new Date(item.setTime); // Convert to JavaScript Date object
              return (
                  <div className='bg-gray-200 rounded-2xl' key={item.id}>
                      <div className='p-4'>
                          <div className='flex justify-between items-center'>
                              <h2 className='text-2xl cursor-pointer hover:text-blue-500' onClick={() => setPage(`view-${item.id}`)}>{item.title} {'!'.repeat(item.urgency)}</h2>
                              <p className={`text-sm ${dueDate.getTime() < new Date().getTime() ? 'text-red-500' : ''}`}>{dueDate.toLocaleString()}</p>
                          </div>
                          <div className='flex justify-between items-center'>
                              <p className='text-sm'>{item.desc}</p>
                              <div className='flex gap-2 items-center'>
                                <button className='text-green-500 hover:text-yellow-500' onClick={() => setPage(`edit-${item.id}`)}>Edit Task</button>
                                <FaTrash className='text-red-500 cursor-pointer' onClick={() => removeTask(item.id)} />
                              </div>
                          </div>
                      </div>
                  </div>
              );
          })}
      </div>
    </div>
  );
}