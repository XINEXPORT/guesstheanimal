//IMPORT THE LOWER CASE UTILS HERE
import {Animal} from '../../database/model.js'
import { User } from '../../database/model.js'


//FETCH ALL ANIMAL DATA
const getAnimals = async (req,res) =>{
    let animals = await Animal.findAll()
    res.json(animals)
}

//FETCH ALL USER DATA
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

export {getAnimals, getUsers}