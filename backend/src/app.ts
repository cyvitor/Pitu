import express from 'express';
import linkRouter from './routes/links';

const app = express();

app.use(express.json());
app.use(linkRouter);

export default app;