import { NextApiRequest, NextApiResponse } from 'next';
import { storage, app, database } from '../../firebaseConfig';

const firestore = (req:NextApiRequest ,res: NextApiResponse) => {
    res.status(200).json({text:"Hello World ! "});
}

export default firestore