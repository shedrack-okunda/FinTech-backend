import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true,
    exposedHeaders: ["X-Total-Count"],
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello from our server!')
});

app.listen(port, () => {
    console.log('Server running on http://localhost:8080');
});