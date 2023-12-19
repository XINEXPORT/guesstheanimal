//REFERENCE model.js from WB-ASSESS-5

import { DataTypes, INTEGER, Model } from 'sequelize';
import connectToDB from './db.js';
import util from 'util';
import url from 'url';

export const db = await connectToDB('postgresql:///animals'); //This is the dbURI

class Animal extends Model{
    [util.inspect.custom]() {
    return this.toJSON()};
};
Animal.init(
    {
        animalId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        animalImg:{
            type: DataTypes.TEXT,
        },
        animalName:{
            type: DataTypes.STRING,
        },
        animalSound:{
            type: DataTypes.TEXT,
        },
        animalQuestion:{
            type: DataTypes.TEXT,
        },
        animalDetails:{
            type: DataTypes.TEXT,
        },
    },
    {
        modelName: 'animal',
        sequelize: db,
    },
);

//ADD USERS ASSOCIATION HERE IN CASE YOU ADD LOGIN FUNCTINALITY
// Animal.hasMany(Users,{foreignKey: 'animalId'});
// Users.belongsTo(Animal, {foreignKey: 'animalId});

if(process.argv[1]===url.fileURLToPath(import.meta.url)){
    console.log("Syncing database")
    await db.sync({force:true});
    console.log("Finished syncing database!")
}

export {Animal}