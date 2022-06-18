import { readFile } from 'fs/promises';

import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import Job from './models/Job.js';

dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Job.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    );
    await Job.create(jsonProducts);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
