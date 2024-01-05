//REFERENCE model.js from WB-ASSESS-5
import { DataTypes, INTEGER, Model } from 'sequelize';
import connectToDB from './db.js';
import util from 'util';
import url from 'url';

export const db = await connectToDB('postgresql:///animals'); //This is the dbURI

//ANIMALS TABLE
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

//USERS TABLE
class User extends Model{
    [util.inspect.custom](){
        return this.toJSON()
    }
}
User.init(
    {
        userId:{
            type:DataTypes. INTEGER,
            autoIncrement: true,
            primaryKey:true,
            unique:true,
            allowNull:false,
        },
        firstName:{
            type:DataTypes. STRING,
            unique:false,
        },
        lastName:{
            type:DataTypes. STRING,
            unique:false,
        },
        address:{
            type:DataTypes. TEXT,
            unique:false,
        },
        city:{
            type:DataTypes. TEXT,
            unique:false,
        },
        state:{
            type:DataTypes. TEXT,
            unique:false,
        },
        zipcode:{
            type:DataTypes. STRING,
            unique:false,
        },
        email: {
            type:DataTypes. STRING,
            unique:true,
            allowNull:false,
        },
        password: {
            type:DataTypes. STRING,
            allowNull:false,
    }
},
{
    modelName:'user',
    sequelize:db
}
)

//FAVORITE ANIMALS TABLE
class FavoriteAnimal extends Model{
    [util.inspect.customer](){
        return this.toJSON()
    }
}

FavoriteAnimal.init(
    {
        favoriteAnimalId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false,
        }
     },
{
    modelName: 'favoriteAnimal',
    sequelize: db, 
},
);

//ALWAYS MAKE SURE 'ID' IS 'Id'
User.belongsToMany(Animal, {through: FavoriteAnimal, foreignKey: 'userId'});
Animal.belongsToMany(User, {through: FavoriteAnimal, foreignKey: 'animalId'});


if(process.argv[1]===url.fileURLToPath(import.meta.url)){
    console.log("Syncing database")
    await db.sync({force:true});
    console.log("Finished syncing database!")
}

export {Animal, User, FavoriteAnimal}