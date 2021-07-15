/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('Server is running'));
