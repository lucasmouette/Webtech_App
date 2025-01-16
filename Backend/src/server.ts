// Code written by Lucas Mouette

import dotenv from 'dotenv';
import app from './app';
import mongoose from 'mongoose';

dotenv.config();

const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

mongoose.connect(uri || '').then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.error('Error connecting to database:', error);
});