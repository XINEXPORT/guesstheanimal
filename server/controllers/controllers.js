//IMPORT THE LOWER CASE UTILS HERE
import {Animal} from '../../database/model.js'


//FETCH ALL ANIMAL DATA
const getAnimals = async (req,res) =>{
    let animals = await Animal.findAll()
    res.json(animals)
}



export {getAnimals}