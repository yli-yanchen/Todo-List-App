'use client';

import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';

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
  return (
    <div>
      <p>Title</p>
      <input
        type='text'
        placeholder='Ex. Brush your teeth'
        className='bg-gray-400'
        onChange={(e) => e.target.value}
      ></input>
      <p>Color</p>
      <div className='flex flex-row w-1/2 h-8 bg-blue-500 justify-center items-center border-2 border-transparent hover:border-yellow-200'>
        <p className='text-white text-sm font-semibold'>Create Task</p>
        <CiCirclePlus className='pl-2 size-6 text-white stroke-[1]' />
      </div>
    </div>
  );
};

export default CreateItem;
