import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface ListItemProps {
  text: string;
  isCompleted: boolean;
  id: number;
  color: string;
  onToggleComplete: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  text,
  isCompleted,
  id,
  color,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <li
      key={id}
      className={`p-2 my-6 text-white text-sm rounded-lg mb-2 flex justify-between items-center ${
        isCompleted ? 'bg-gray-600 line-through' : 'bg-gray-500'
      }`}
    >
      <div className='flex items-center'>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
          className='ml-2 mr-4 my-2 rounded-full'
        />
        <span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
      </div>
      <AiOutlineDelete
        onClick={() => onDelete(id)}
        className='text-white cursor-pointer mr-2 size-4'
      />
    </li>
  );
};

export default ListItem;
