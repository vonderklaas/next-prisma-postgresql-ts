import prisma from '../../../../prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const noteId = req.query.id;

  if (req.method === 'DELETE') {
    const note = await prisma.note.delete({
      where: {
        id: Number(noteId),
      },
    });
    res.status(200).json({ message: 'Deleted succesfully!' });
  } else {
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
