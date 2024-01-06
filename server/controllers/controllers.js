//IMPORT THE LOWER CASE UTILS HERE
import {Animal} from '../../database/model.js'
import { User } from '../../database/model.js'
import {FavoriteAnimal} from '../../database/model.js'

//FETCH ALL ANIMAL DATA
const getAnimals = async (req,res) =>{
    let animals = await Animal.findAll()
    res.json(animals)
}

//FETCH ALL FAVORITE ANIMAL DATA
const getFavoriteAnimals = async (req,res) =>{
    let favoriteanimal = await User.findOne({
        where: {
        userId: req.session.user.userId
    },
        include: Animal,
        })
        console.log(favoriteanimal)
    res.json(favoriteanimal)
}

//STAR FAVORITE ANIMAL DATA
const starAnimal = async (req,res) =>{
    let {animalId} = req.body
    let favAnimal = await FavoriteAnimal.findOne({
        where:{
            // userId: req.session.user.userId,
            animalId: animalId
        }
    })
    if(favAnimal){
        favAnimal.destroy()
        res.json({isFavorite:false})
    } else{
        await FavoriteAnimal.create({
            userId: req.session.user.userId,
            animalId: animalId
        })
        res.json({isFavorite:true})
    }
}

//FETCH THE LOGGED IN USER
const getUsers = async (req,res) =>{
    if(req.session.user){
        let users = await User.findOne(
            {where: {
                userId: req.session.user.userId
            }}
        )
        res.json(users)
    } else{
        res.json({error: 'not logged in'})
    }  
}

//FETCH ALL ANIMAL API DATA
// const getAnimalsAPI = async (req, res)=>{
// }

export {getAnimals, getUsers, getFavoriteAnimals, starAnimal}