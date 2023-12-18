import { DataTypes, Model } from 'sequelize';
import connectToDB from './db.js';
import util from 'util';
import url from 'url';

const db = await connectToDB('postgresql:///animals');