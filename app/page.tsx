'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CiCirclePlus } from 'react-icons/ci';
import { LuNotebookText } from 'react-icons/lu';

import ListItem from './components/ListItem';

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

export default function ToDoList() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const totalCount = tasks.length || 0;
  const completedCount = tasks.filter((task) => task.isCompleted).length;

  const handleNavigateToCreateTask = () => {
    console.log('Navigating to create task page');
    router.push('/tasks/create');
  };

  // Toggle task completion
  const handleToggleCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Delete task
  const handleDelete = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <section className='relative h-1/4 w-full bg-black flex justify-center items-center'>
        <div
          style={{ zIndex: 10 }}
          onClick={handleNavigateToCreateTask}
          className='flex flex-row absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-1/2 h-8 bg-blue-500 justify-center items-center border-2 border-transparent hover:border-yellow-200'
          tabIndex={0}
          role='button'
        >
          <button className='text-white text-sm font-semibold pointer-events-none'>
            Create Task
          </button>
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

            {totalCount === 0 ? (
              <div className='flex flex-col justify-center items-center my-16'>
                <LuNotebookText className='pl-2 size-14 text-gray-400 stroke-[1]' />
                <p className='text-gray-400 text-lg font-bold my-6'>
                  You don't have any tasks registered yet.
                </p>
                <p className='text-gray-400 text-lg'>
                  Create tasks and organize your to-do items.
                </p>
              </div>
            ) : (
              tasks.map((task) => (
                <ListItem
                  key={task.id}
                  text={task.text}
                  isCompleted={task.isCompleted}
                  id={task.id}
                  onToggleComplete={handleToggleCompletion}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
