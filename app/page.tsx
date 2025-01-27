'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewToDo] = useState([]);

  return (
    <main className=''>
      <h1 className='flex justify-center align-top m-4 text-2xl font-bold '>
        My To Do List
      </h1>
      {/* <div>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewToDo(e.target.value)}
          placeholder='Add a new task'
          className='p-2 border border-gray-300 rounded-md'
        ></input>
      </div> */}
    </main>
  );
}
