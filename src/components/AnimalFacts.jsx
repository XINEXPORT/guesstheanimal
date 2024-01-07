import './AnimalFacts.css';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from 'axios';

const AnimalFacts = () => {
  const { animals } = useLoaderData();
  const loggedIn = useSelector((state) => state.loggedIn);

  const AnimalCard = ({ animalName, animalImg, animalDetails, animalId }) => {
    const [showDetails, setShowDetails] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#F1E3B7');
    const[isFavorited, setIsFavorited] = useState(false);

    const toggleCard = (e) => {
      if(e.target.className === "star"){
        return
      }else{
        setShowDetails(!showDetails);
        setBackgroundColor(backgroundColor === '#ffc0cb' ? 'pink' : '#ffc0cb');
      }
    };

    const favAnimal  = async () => {
      let res = await axios.post ('/api/favoriteanimals', {
          animalId
        });
        setIsFavorited(true);
    };

    const cardStyle = {
      background: backgroundColor,
      width: '300px', 
      height: showDetails ? '500px' : '500px'
    };
    
    return (
      <div className="animal-card" onClick={toggleCard} style={cardStyle}>
        {showDetails ? (
          //FRONT OF CARD
          <>
            <h1 className="animal-name">{animalName}</h1>
            <div><img src={animalImg} alt={`Animal ${animalName}`} /></div>
              {loggedIn && !isFavorited && (
              <button className="star" onClick={favAnimal}>
                <FaStar id="starclosed" className='starclosed' />
              </button>
            )}
          </>
        ) : (
          //BACK OF CARD
          <>
            <p id="animal-details">{animalDetails}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <div id = "cardcontainer">
       {animals.map((animal, index) => (
         <AnimalCard
           key={index}
           animalId = {animal.animalId}
           animalName={animal.animalName}
           animalImg={animal.animalImg}
           animalDetails={animal.animalDetails}
         />
       ))}
     </div>
   );
};

export default AnimalFacts;
