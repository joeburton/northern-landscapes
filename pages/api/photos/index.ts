import { NextApiRequest, NextApiResponse } from 'next';
import { photosData } from '../../../utils/photos-db';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(photosData)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(photosData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
