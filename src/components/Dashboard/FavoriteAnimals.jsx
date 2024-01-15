import { useState, useEffect } from 'react'
import './FavoriteAnimals.css'
import AnimalFacts from '../AnimalFlashCards/AnimalFacts.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FavoriteAnimals = ({ favoriteAnimalData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [favoriteAnimals, setFavoriteAnimals] = useState([]);
    
    useEffect(() => {
            const myFavList = favoriteAnimalData.map(( animal ) => (
                <div key = {animal.animalImg} className="child bounce">
                    <img key={animal.animalId} src={animal.animalImg} />
                    <h1 className='favAnimalName'>{animal.animalName}</h1>
                </div>
            ));
            setFavoriteAnimals(myFavList);
    }, [favoriteAnimalData]);

    return (
        <div id="myfavanimals">
            <div id="myfavlist">
            <h1 className="rainbow rainbow_text_animated">My Favorite Animals</h1>
            <div>{favoriteAnimals}</div>
            <button onClick={()=>{
                navigate("/animalflashcards")
            }} className = "jelly-button" style={{}}><span>Add Animals</span></button>
            </div>
        </div>
    );
}

export default FavoriteAnimals;
