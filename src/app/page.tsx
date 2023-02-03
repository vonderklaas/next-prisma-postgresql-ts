import Form from '@/components/Form';
import Notes from '@/components/Notes';
import { NoteType } from '@/types';
import prisma from '../../prisma/client';

const getNotes = async (): Promise<NoteType[]> => {
  const notes: NoteType[] = await prisma.note.findMany();
  return notes;
};

const Home = async () => {
  const notes: NoteType[] = await getNotes();

  return (
    <main>
      <h1 className='text-center font-bold text-2xl mt-4'>Notes</h1>
      <Form />
      <Notes notes={notes} />
    </main>
  );
};

export default Home;
