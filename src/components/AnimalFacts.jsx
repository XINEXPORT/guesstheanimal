import './AnimalFacts.css';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const AnimalFacts = () => {
  const { animals } = useLoaderData();

  const AnimalCard = ({ animalName, animalImg, animalDetails, animalId }) => {
    const [showDetails, setShowDetails] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#F1E3B7');

    const toggleCard = (e) => {
      if(e.target.className === "star"){
        return
      }else{
        setShowDetails(!showDetails);
        setBackgroundColor(backgroundColor === '#ffc0cb' ? 'pink' : '#ffc0cb');
      }
    };

    const favAnimal  = async () => {
      let res = await axios.post (
        '/api/favoriteanimals', {
          animalId
        }
      )
    }

    const cardStyle = {
      background: backgroundColor,
      width: '300px', 
      height: showDetails ? '500px' : '500px'
    };
    
    return (
      <div className="animal-card" onClick={toggleCard} style={cardStyle} >

        {showDetails ? (
          <>
            <h1 className = "animal-name">{animalName}</h1>
            <div><img src={animalImg} alt={`Animal ${animalName}`} /></div>
            <button className = "star" onClick={favAnimal}><img id = "staricon" src = "../public/img/star.svg"/></button>
          </>
          
        
        ) : (
          <p id="animal-details">{animalDetails}</p>
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
