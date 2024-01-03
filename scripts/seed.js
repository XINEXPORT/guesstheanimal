//THIS IS WHERE THE ANIMAL DATA RESIDES
//REFERENCE seed.js from WB-ASSESS-5

import {Op} from 'sequelize'
import {db, Animal, User, FavoriteAnimal} from '../database/model.js'

//FORCE TRUE NEEDS TO BE AT THE TOP FILE
//FORCE TRUE MEANS DROP ALL TABLES AND RESEED
await db.sync ({force:true})

//ANIMAL SEED
const rooster = await Animal.create({
    animalName: 'Rooster',
    animalImg: '../public/img/rooster.png',
    animalSound: 'https://actions.google.com/sounds/v1/ambiences/barnyard_with_animals.ogg',
    animalQuestion: 'What sound does a Rooster make?',
    animalDetails: 'Roosters crow all the time! They’ll crow to greet the day, to lead their flocks to forage, to cue a boundary, and to alert about predators.'
})

const cat = await Animal.create({
    animalName: 'Cat',
    animalImg: '../public/img/cat.png',
    animalSound: 'https://actions.google.com/sounds/v1/animals/cat_purr.ogg',
    animalQuestion: 'What sound does a Cat make?',
    animalDetails: "Cats are believed to be the only mammals who don’t taste sweetness."
})

const duck = await Animal.create({
    animalName:'Duck',
    animalImg:'../public/img/duck.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/geese_outside.ogg',
    animalQuestion:'What sound does a Duck make?',
    animalDetails:'Mallard ducks swim with their tail held above the water. When they are alarmed, they can spring directly out of the water and into the air.'
})

const pig = await Animal.create({
    animalName:'Pig',
    animalImg:'../public/img/pig.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/animal_squealing.ogg',
    animalQuestion:'What sound does a Pig make?',
    animalDetails:'Pigs have the intelligence of a human toddler and are ranked as the fifth most intelligent animal in the world!'
})

const dog = await Animal.create({
    animalName:'Dog',
    animalImg:'../public/img/dog.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/dog_barking.ogg',
    animalQuestion:'What sound does a Dog make?',
    animalDetails:'Dogs are color-blind. They have trouble seeing shades of red and green but can see blues and yellows.'
})

const fly = await Animal.create({
    animalName:'Fly',
    animalImg:'../public/img/fly.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/flies_buzzing_and_circling.ogg',
    animalQuestion:'What sound does a Fly make?',
    animalDetails:"Flies have sensors on their tarsi, or feet, that help them determine whether that sandwich they just landed on will be a tasty snack."
})

const mouse = await Animal.create({
    animalName:'Mouse',
    animalImg:'../public/img/mouse.png',
    animalSound: 'https://actions.google.com/sounds/v1/animals/mouse_squeaking.ogg',
    animalQuestion:'What sound does a Mouse make?',
    animalDetails:'Mice are usually nocturnal animals. They have poor eyesight but make up for this with their very good hearing and smell.'
})

const owl = await Animal.create({
    animalName:'Owl',
    animalImg:'../public/img/owl.png',
    animalSound:'https://actions.google.com/sounds/v1/animals/owl_hooting.ogg',
    animalQuestion:'What sound does a Owl make?',
    animalDetails:'Owls are farsighted, meaning they can’t see things close to their eyes clearly.'

})

//USER SEED
let arr = [{firstName: 'John', lastName: 'Doe',}, {firstName: 'Christopher', lastName: 'Walken'}, {firstName: 'Sean', lastName: 'Smith'}]

for (let i=0; i < arr.length; i++){
    await User.create({email: `test${i}@email.com`, password:'test', firstName: arr[i].firstName, lastName: arr[i].lastName})
}

const christine = await User.create({
    firstName: 'Christine',
    lastName: 'Hoang',
    email: 'christinehoangt@gmail.com',
    password: 'test',
})

//FAVORITE ANIMAL SEED
const christineFavAnimals = await FavoriteAnimal.create({
    userId: '4',
    animalId: '2'
})

console.log(rooster)
console.log(cat)
console.log(christine)
console.log(christineFavAnimals)

await db.close()