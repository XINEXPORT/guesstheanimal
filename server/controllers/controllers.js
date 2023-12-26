//IMPORT THE LOWER CASE UTILS HERE
import {Animal} from '../../database/model.js'


//FETCH ALL ANIMAL DATA
const getAnimals = async (req,res) =>{
    let animals = await Animal.findAll()
    res.json(animals)
}

//FETCH ALL ANIMAL API DATA
// const getAnimalsAPI = async (req, res)=>{
// }

export {getAnimals}