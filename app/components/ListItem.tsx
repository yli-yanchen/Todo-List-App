import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface ListItemProps {
  text: string;
  isCompleted: boolean;
  id: number;
  onToggleComplete: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  text,
  isCompleted,
  id,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <li
      key={id}
      className={`p-2 rounded-lg mb-2 flex justify-between items-center ${
        isCompleted ? 'bg-gray-500 line-through' : 'bg-gray-600'
      }`}
    >
      <div className='flex items-center'>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
          className='mr-2'
        />
        <span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
      </div>
      <AiOutlineDelete
        onClick={() => onDelete(id)}
        className='text-white cursor-pointer'
      />
    </li>
  );
};

export default ListItem;
