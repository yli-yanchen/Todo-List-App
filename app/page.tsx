'use client';

import { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const totalCount = tasks.length || 0;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className='h-screen flex flex-col bg-zinc-800'>
      <section className='relative h-1/4 w-full bg-black flex justify-center items-center'>
        <h1 className='font-bold font-sans text-white text-3xl'>
          <span className='text-blue-400'>Todo </span>
          <span className='text-purple-400'>App</span>
        </h1>

        <div className='flex flex-row absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-1/2 h-8 bg-blue-500 justify-center items-center border-2 border-transparent hover:border-yellow-200'>
          <p className='text-white text-sm font-semibold'>Create Task</p>
          <CiCirclePlus className='pl-2 size-6 text-white stroke-[1]' />
        </div>
      </section>

      <section className='flex-1'>
        <div className='relative flex justify-center mt-4'>
          <div className='flex flex-col absolute left-1/2 transform -translate-x-1/2 w-1/2'>
            <div className='flex flex-row justify-between mt-12'>
              <p className='text-md font-bold text-blue-400 flex items-center'>
                Tasks{' '}
                <span className='ml-2 w-8 h-6 bg-zinc-600 text-white rounded-xl text-sm flex justify-center items-center'>
                  {totalCount}
                </span>
              </p>
              <p className='text-md font-bold text-purple-400 flex items-center'>
                Completed{' '}
                <span className='ml-2 w-16 h-6 bg-zinc-600 text-white flex justify-center items-center rounded-xl text-sm'>
                  {completedCount} de {totalCount}
                </span>
              </p>
            </div>
            <div className='w-full h-px bg-gray-400 mt-2'></div>
          </div>
        </div>
      </section>
    </main>
  );
}
