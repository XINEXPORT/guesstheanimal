import {useLoaderData} from 'react-router-dom'
import { useState } from 'react'
import './FavoriteAnimals.css'

const FavoriteAnimals = ({favoriteAnimalData}) => {
    const [favoriteAnimals, setFavoriteAnimals] = useState([])

    console.log(favoriteAnimalData)

    const myFavList = favoriteAnimalData.favoriteanimals.map(
        ({animal}) => {
        return(
        <div key = {animal.favoriteAnimalId}>
        <img src={animal.animalImg}></img>
        <h1 className='favAnimalName'>{animal.animalName}</h1>
        </div>
         )
    })

    return(
        <div id = "myfavanimals">
        <h1 className = "rainbow rainbow_text_animated">My Favorite Animals</h1>
        <div id = "myfavlist">{myFavList}</div>
        </div>
)
}

export default FavoriteAnimals