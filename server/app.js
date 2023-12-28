import ViteExpress from 'vite-express';
import express from 'express';
import morgan from 'morgan';
import {getAnimals} from './controllers/controllers.js';
// import{
//     login,
//     logout,
//     checkStatus,
//     register
// } from './controllers/authControllers.js'

//await db.sync and db.close  needs to be at the beginning and end of each function

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use(session({secret: 'this is a secret', saveUniinitialized: true, resave:false}))
//this line was added for login functionality

ViteExpress.config({ printViteDevServerHost: true });

// Routes go here

//FETCH ALL ANIMAL DATA
app.get('/api/animal', getAnimals)

//AUTH ENDPOINTS
// app.get('/api/auth/status',checkStatus)
// app.post('/api/auth/login',login)
// app.post('/api/auth/logout', logout)
// app.post('/api/auth/register',register)


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
