'use client';

import { FormDataType } from '@/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState<FormDataType>({
    title: '',
    content: '',
  });

  const router = useRouter();

  const refreshData = () => {
    router.push('');
  };

  const createNewNote = async (data: FormDataType) => {
    try {
      fetch('http://localhost:3000/api/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setForm({ title: '', content: '' });
      refreshData();
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      createNewNote(form);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  return (
    <>
      <h2>Add new Note!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Note Title
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            type='text'
            placeholder='Title'
          />
        </label>
        <label>
          Note Content
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder='Content'
          ></textarea>
        </label>
        <button className='bg-blue-500' type='submit'>
          Add Note
        </button>
      </form>
    </>
  );
};

export default Form;
