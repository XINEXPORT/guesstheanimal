//This is where default data needs to reside
//Reference Sqlize seed.js exercise

import {Op} from 'sequelize'
import {db, Animal} from '../database/model.js'

//DROP THE TABLE MEANS FORCE TRUE
await db.sync ({force:true})

//ANIMAL SEED
const rooster = await Animal.create({
    animalName: 'Rooster',
    animalImg: '../public/img/rooster.png',
    animalSound: 'https://actions.google.com/sounds/v1/ambiences/barnyard_with_animals.ogg',
    animalQuestion: 'What sounds does a Rooster make?',
    animalDetails: 'Itsa rooster'
})

const cat = await Animal.create({
    animalName: 'Cat',
    animalImg: '../public/img/cat.png',
    animalSound: 'https://actions.google.com/sounds/v1/animals/cat_purr.ogg',
    animalQuestion: 'What sound does a Cat make?',
    animalDetails: "Itsa Cat"
})

const duck = await Animal.create({
    animalName:'Duck',
    animalImg:'../public/img/duck.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/geese_outside.ogg',
    animalQuestion:'What sounds does a Duck make?',
    animalDetails:'Itsa Duck'
})


console.log(rooster)
console.log(cat)

await db.close()