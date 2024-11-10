import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import ConnectDB from './ConnectDB/ConnectDB.js';
import cookieParser from 'cookie-parser';

const app = express();

ConnectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


const p = 9000;

app.listen(p, () => console.log(`App running at port ${p}`));