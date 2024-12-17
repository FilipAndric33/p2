import express from 'express';
import cors from 'cors';
import { createTables } from './postgres/tableCreation';
import './controllers/RootController';
import { AppRouter } from './routes/AppRouter';

createTables();

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

app.listen(port, () => {
  console.log('listening on port 6k');
});
