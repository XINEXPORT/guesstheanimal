
import {useLoaderData} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './FavoriteAnimals.css'

const FavoriteAnimals = ({favAnimalData}) => {
    // const [favoriteAnimals, setFavoriteAnimals] = useState()

    // const myList = favAnimalData.map((favAnimalData)=>(
    //     <tr key = {favAnimalData.favoriteAnimalId}>
    //     <th>{favAnimalData.userId}</th>
    //     <th>{favAnimalData.animalId}</th>
    //     </tr>
    // ))

    return(
        <div id = "myfavanimals">
        <p className = "rainbow rainbow_text_animated">My Favorite Animals</p>
        {/* <div>{myList}</div> */}
        </div>
    )
};

export default FavoriteAnimals