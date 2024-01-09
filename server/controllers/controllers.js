//IMPORT THE LOWER CASE UTILS HERE
import {Animal} from '../../database/model.js'
import { User } from '../../database/model.js'
import {FavoriteAnimal} from '../../database/model.js'

//FETCH ALL ANIMAL DATA
const getAnimals = async (req,res) =>{
    if(req.session.user){
        let animals = await Animal.findAll({include:{
            model: User, 
            where: {userId: req.session.user.userId},
            required: false,
        }})
        res.json(animals)
    }else{
        let animals = await Animal.findAll()
        res.json(animals)
    }
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
            userId: req.session.user.userId,
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

//EDIT CONTACT INFO
const updateContact = async (req,res) =>{
    const {id} = req.params
    const {address, city, state, zipcode, email} = req.body
    const user = await User.findByPk(+id)
        user.address = address || user.address
        user.city = city || user.city
        user.state = state || user.state
        user.zipcode = zipcode || user.zipcode
        user.email = email || user.email
        user.save()
        res.json(user)
}

export {getAnimals, getUsers, getFavoriteAnimals, starAnimal, updateContact}