'use client';

import { useRouter } from 'next/navigation';
import { NoteType } from '@/types';
import React from 'react';

const deleteNote = async (id: number) => {
  try {
    fetch(`http://localhost:3000/api/note/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('DELETE NOTE');
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

interface NotesProps {
  notes: NoteType[];
}

const Notes = ({ notes }: NotesProps) => {
  const handleClick = async (id: number) => {
    await deleteNote(id);
    refreshData();
  };

  const router = useRouter();

  const refreshData = () => router.push('');

  return (
    <div>
      <h2>Your notes</h2>
      {notes.map((note: NoteType) => {
        return (
          <div key={note.id}>
            <p>{note.title}</p>
            <p>{note.content}</p>
            <p>Created: {note.createdAt.toString()}</p>
            <br />
            <button onClick={() => handleClick(note.id)}>Delete Note</button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
