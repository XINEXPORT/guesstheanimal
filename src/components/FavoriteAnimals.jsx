import { useState, useEffect } from 'react'
import './FavoriteAnimals.css'
import AnimalFacts from './AnimalFacts.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FavoriteAnimals = ({ favoriteAnimalData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            <div id="myfavlist">
            <h1 className="rainbow rainbow_text_animated">My Favorite Animals</h1>
            {favoriteAnimals}
            <button onClick={()=>{
                navigate("/animalflashcards")
            }} id="addanimals" style={{}}>Add Animals</button>
            </div>
        </div>
    );
}

export default FavoriteAnimals;
