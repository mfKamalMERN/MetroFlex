import express from 'express';
import 'dotenv/config';

const app = express();
const port = 9000;


app.listen(port, () => console.log(`App running at port ${port}`));