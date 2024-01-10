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
    animalSound: '../public/audio/roostercrow.wav',
    animalQuestion: 'What sound does a Rooster make?',
    animalDetails: 'Roosters crow all the time! They’ll crow to greet the day, to lead their flocks to forage, to cue a boundary, and to alert about predators.'
})
const cat = await Animal.create({
    animalName: 'Cat',
    animalImg: '../public/img/cat.png',
    animalSound: '../public/audio/meow.wav',
    animalQuestion: 'What sound does a Cat make?',
    animalDetails: "Cats are believed to be the only mammals who don’t taste sweetness."
})
const duck = await Animal.create({
    animalName:'Duck',
    animalImg:'../public/img/duck.png',
    animalSound:'../public/audio/duck.wav',
    animalQuestion:'What sound does a Duck make?',
    animalDetails:'Mallard ducks swim with their tail held above the water. When they are alarmed, they can spring directly out of the water and into the air.'
})
const pig = await Animal.create({
    animalName:'Pig',
    animalImg:'../public/img/pig.png',
    animalSound:'../public/audio/pig.mp3',
    animalQuestion:'What sound does a Pig make?',
    animalDetails:'Pigs have the intelligence of a human toddler and are ranked as the fifth most intelligent animal in the world!'
})
const dog = await Animal.create({
    animalName:'Dog',
    animalImg:'../public/img/dog.png',
    animalSound:'../public/audio/dogbark.wav',
    animalQuestion:'What sound does a Dog make?',
    animalDetails:'Dogs are color-blind. They have trouble seeing shades of red and green but can see blues and yellows.'
})
const elephant = await Animal.create({
    animalName:'Elephant',
    animalImg:'../public/img/elephant.png',
    animalSound: '../public/audio/elephant.wav',
    animalQuestion:'What sound does a Elephant make?',
    animalDetails:'Elephant are the largest mammals that live on land and are known for their gentle attitude and intelligence.'
})
const lion = await Animal.create({
    animalName:'Lion',
    animalImg:'../public/img/lion.png',
    animalSound: '../public/audio/lion.wav',
    animalQuestion:'What sound does a Lion make?',
    animalDetails:'Often known as the "king of the jungle", most lions actually live in the savannah or grasslands. Just one population of wild forest-dwelling lions remains, in Gir Forest National Park, India.'
})
const owl = await Animal.create({
    animalName:'Owl',
    animalImg:'../public/img/owl.png',
    animalSound:'../public/audio/owl.mp3',
    animalQuestion:'What sound does a Owl make?',
    animalDetails:'Owls are farsighted, meaning they cannot see things close to their eyes clearly.'

})
const monkey = await Animal.create({
    animalName:'Monkey',
    animalImg:'../public/img/monkey.png',
    animalSound:'../public/audio/chimpanzee.mp3',
    animalQuestion:'What sound does a Monkey make?',
    animalDetails:'Monkeys are clever, social animals. They are known for running and leaping through trees with ease. Like apes and humans, monkeys belong to the group of mammals called primates.'

})
const bear = await Animal.create({
    animalName:'Bear',
    animalImg:'../public/img/bear.png',
    animalSound:'../public/audio/bear.mp3',
    animalQuestion:'What sound does a Bear make?',
    animalDetails:'American Black Bears are found in North America, Canada and Mexico. They may be called black bears, but their coat can be blue-gray or blue-black, brown and sometimes white!'

})
const snake = await Animal.create({
    animalName:'Snake',
    animalImg:'../public/img/snake.png',
    animalSound:'../public/audio/snake.mp3',
    animalQuestion:'What sound does a Snake make?',
    animalDetails:'Snakes do not have external ears to hear sound waves in the air. Instead, bones in their lower jaw pick up vibrations in the ground or water. The vibes trigger signals in the snakes brain, which are received as messages.'

})
const horse = await Animal.create({
    animalName:'Horse',
    animalImg:'../public/img/horse.png',
    animalSound:'../public/audio/horse.mp3',
    animalQuestion:'What sound does a Horse make?',
    animalDetails:'A horse’s eyes are amazing! Horses can almost see what is going on all the way around their body! This is because their eyes are near the side of their head!'

})

//TEST USER SEED
let arr = [{firstName: 'John', 
            lastName: 'Doe',
            address: '909 Main St',
            city: 'Detroit',
            state: 'Michigan',
            zipcode: '48127'
            }, 
            {firstName: 'Christopher', 
             lastName: 'Walken',
             address: '2 Emu St',
             city: 'Dallas',
             state: 'Texas',
             zipcode: '75052'
            }, 
            {firstName: 'Sean', 
             lastName: 'Smith',
             address: '808 Roland Ave',
             city: 'New York City',
             state: 'New York',
             zipcode: '10001'
        }]

for (let i=0; i < arr.length; i++){
    await User.create({
        firstName: arr[i].firstName, 
        lastName: arr[i].lastName, 
        address: arr[i].address,
        city: arr[i].city,
        state: arr[i].state,
        zipcode: arr[i].zipcode,
        email: `test${i}@email.com`, 
        password:'test', 
    })
}

const christine = await User.create({
    firstName: 'Christine',
    lastName: 'Hoang',
    address: '60 Juno Ave',
    city: 'Dallas',
    state: 'TX',
    zipcode: '75001',
    email: 'christinehoangt@gmail.com',
    password: 'test',
    image: '../public/profileimg/Shep.png'
})

//FAVORITE ANIMAL SEED
const christineFavAnimals = await FavoriteAnimal.create({
    userId: '4',
    animalId: '2'
})

const christineFavAnimals2 = await FavoriteAnimal.create({
    userId: '4',
    animalId: '1'
})

console.log(cat)
console.log(christine)
console.log(christineFavAnimals)

await db.close()