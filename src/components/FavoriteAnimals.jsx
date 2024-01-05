import { useState, useEffect } from 'react'
import './FavoriteAnimals.css'

const FavoriteAnimals = ({ favoriteAnimalData }) => {
    const [favoriteAnimals, setFavoriteAnimals] = useState([]);

    console.log(favoriteAnimalData)
    
    useEffect(() => {
            const myFavList = favoriteAnimalData.map(( animal ) => (
                <div key={animal.favoriteAnimalId}>
                    <img src={animal.animalImg} />
                    <h1 className='favAnimalName'>{animal.animalName}</h1>
                </div>
            ));
            setFavoriteAnimals(myFavList);
    }, [favoriteAnimalData]);

    return (
        <div id="myfavanimals">
            <h1 className="rainbow rainbow_text_animated">My Favorite Animals</h1>
            <div id="myfavlist">{favoriteAnimals}</div>
        </div>
    );
}

export default FavoriteAnimals;
