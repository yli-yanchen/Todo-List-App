import React from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const handleClick = () => {
    if (!id || isNaN(id)) {
      console.error('Invalid task ID:', id);
      return;
    }
    router.push(`/tasks/edit/${id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!id || isNaN(id)) {
      console.error('Invalid task ID for deletion:', id);
      return;
    }
    onDelete(id);
  };

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
        <span
          onClick={handleClick}
          className={`${isCompleted ? 'line-through text-gray-400' : ''}`}
        >
          {text}
        </span>
      </div>
      <AiOutlineDelete
        onClick={handleDelete}
        className='text-white cursor-pointer mr-2 size-4'
      />
    </li>
  );
};

export default ListItem;
