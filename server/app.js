import ViteExpress from 'vite-express';
import morgan from 'morgan';
import express from 'express';
import session from 'express-session';
import { 
  getAnimals, 
  getUsers, 
  getFavoriteAnimals, 
  starAnimal, 
  updateContact, 
  upload ,
  updateScore
} from './controllers/controllers.js';
import {
  login,
  logout,
  checkStatus,
  register
} from './controllers/authControllers.js';

const app = express();
const port = '8000';
//STATIC IMAGES FOLDER
app.use('../public/profileimg', express.static('./public/profileimg'))
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: 'this is a secret', saveUninitialized: true, resave: false })
  // this line was added for login functionality
  
);

ViteExpress.config({ printViteDevServerHost: true });

// ENDPOINTS GO HERE

//AUTH ENDPOINTS
app.get('/api/auth/status', checkStatus);
app.post('/api/auth/login', login);
app.post('/api/auth/logout', logout);
app.post('/api/auth/register', register);

//ANIMAL ENDPOINTS
app.get('/api/animal', getAnimals);

//FAVORITE ANIMALS ENDPOINTS
app.get('/api/favoriteanimals', getFavoriteAnimals);
app.post('/api/favoriteanimals', starAnimal);

//USERS ENDPOINTS
app.get('/api/user', getUsers);
app.put('/api/user/:id', upload, updateContact);
app.put('/api/user', updateScore)

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));

