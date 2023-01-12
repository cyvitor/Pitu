import express from 'express';
import linkRouter from './routes/links';
//configurações para funcionamento do front
import cors from 'cors';
//
const app = express();
app.use(express.json());
app.use(cors());
app.use(linkRouter);

export default app;