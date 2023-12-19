import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import {getAnimals} from './controllers/controllers.js';

//await db.sync and db.close  needs to be at the beginning and end of each function

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

// Routes go here

//FETCH ALL ANIMAL DATA
app.get('/api/animal', getAnimals)



ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
