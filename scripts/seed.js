//THIS IS WHERE THE ANIMAL DATA RESIDES
//REFERENCE seed.js from WB-ASSESS-5

import {Op} from 'sequelize'
import {db, Animal} from '../database/model.js'

//FORCE TRUE NEEDS TO BE AT THE TOP FILE
//FORCE TRUE MEANS DROP ALL TABLES AND RESEED
await db.sync ({force:true})

//ANIMAL SEED
const rooster = await Animal.create({
    animalName: 'Rooster',
    animalImg: '../public/img/rooster.png',
    animalSound: 'https://actions.google.com/sounds/v1/ambiences/barnyard_with_animals.ogg',
    animalQuestion: 'What sound does a Rooster make?',
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
    animalQuestion:'What sound does a Duck make?',
    animalDetails:'Itsa Duck'
})

const pig = await Animal.create({
    animalName:'Pig',
    animalImg:'../public/img/pig.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/animal_squealing.ogg',
    animalQuestion:'What sound does a Pig make?',
    animalDetails:'Itsa pig'
})

const dog = await Animal.create({
    animalName:'Dog',
    animalImg:'../public/img/dog.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/dog_barking.ogg',
    animalQuestion:'What sound does a Dog make?',
    animalDetails:'Itsa dog'
})

const fly = await Animal.create({
    animalName:'Fly',
    animalImg:'../public/img/fly.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/flies_buzzing_and_circling.ogg',
    animalQuestion:'What sound does a Fly make?',
    animalDetails:"Itsa fly"
})

const mouse = await Animal.create({
    animalName:'Mouse',
    animalImg:'../public/img/mouse.png',
    animalSound: 'https://actions.google.com/sounds/v1/animals/mouse_squeaking.ogg',
    animalQuestion:'What sound does a Mouse make?',
    animalDetails:'Itsa Mouse'
})

const owl = await Animal.create({
    animalName:'Owl',
    animalImg:'../public/img/owl.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/owl_hooting.ogg',
    animalQuestion:'What sound does a Owl make?',
    animalDetails:'Itsa owl'

})

const woodpecker = await Animal.create({
    animalName:'Woodpecker',
    animalImg:'../public/img/woodpecker.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/woodpecker_pecking_fast.ogg',
    animalQuestion:'What sound does a Woodpecker make?',
    animalDetails:'Itsa woodpecker'
})


console.log(rooster)
console.log(cat)
console.log(pig)

await db.close()