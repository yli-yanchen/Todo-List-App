'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CiCirclePlus } from 'react-icons/ci';
import { IoArrowBack } from 'react-icons/io5';
import { RiCheckboxCircleLine } from 'react-icons/ri';

interface ListItemProps {
  text: string;
  isCompleted: boolean;
  id: number;
  onToggleComplete: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const CreateItem: React.FC<ListItemProps> = ({
  text,
  isCompleted,
  id,
  onToggleComplete,
  onDelete,
}) => {
  const router = useRouter();
  const colorPalette = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'teal',
    'Khaki',
  ];
  const [selectedColor, setSelectedColor] = useState<string>('red');
  const [taskText, setTaskText] = useState<string>('');

  const backToHome = () => {
    router.push('/');
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const createTask = async () => {
    if (!taskText.trim()) {
      alert('Please enter a task title.');
      return;
    }

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: taskText,
          color: selectedColor,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Task added successfully!');
        setTaskText('');
        setSelectedColor('');
      } else {
        alert(data.error || 'Failed to create task.');
      }
    } catch (error) {
      alert('An error occurred while creating the task.');
      console.error(error);
    }
  };

  return (
    <div className='relative w-full'>
      <div className='flex flex-col absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1/2 justify-center items-start'>
        <IoArrowBack
          onClick={backToHome}
          className='text-white stroke-[2] mb-6'
        />

        {/* Task Input */}
        <p className='text-blue-400 font-bold py-2 mt-4'>Title</p>
        <input
          type='text'
          placeholder='Ex. Brush your teeth'
          className='bg-zinc-600 h-8 w-full rounded-lg indent-2 p-2 text-sm text-white'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        ></input>
        <p className='text-blue-400 font-bold py-2 mt-4'>Color</p>

        {/* Select Color */}
        <div className='flex space-x-4'>
          {colorPalette.map((color) => (
            <div
              key={color}
              onClick={() => handleColorSelect(color)}
              className={`w-8 h-8 mb-8 rounded-full cursor-pointer ${
                selectedColor === color ? 'border-2 border-white' : ''
              }`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>

        {/* Add the task */}
        <div
          onClick={createTask}
          className='flex flex-row w-full h-8 bg-blue-500 justify-center items-center rounded-lg border-2 border-transparent hover:border-white'
        >
          <p className='text-white text-sm font-semibold '>Add Task</p>
          <CiCirclePlus className='pl-2 size-6 text-white stroke-[1]' />
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
