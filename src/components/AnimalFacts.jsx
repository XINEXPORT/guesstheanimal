import './AnimalFacts.css';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AnimalFacts = () => {
  const { animals } = useLoaderData();

  const AnimalCard = ({ animalName, animalImg, animalDetails }) => {
    const [showDetails, setShowDetails] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#F1E3B7');

    const toggleCard = () => {
      setShowDetails(!showDetails);
      setBackgroundColor(backgroundColor === '#ffc0cb' ? 'pink' : '#ffc0cb');
    };

    const cardStyle = {
      background: backgroundColor,
      width: '300px', 
      height: showDetails ? '500px' : '500px', 
    };
    
    return (
      <div className="front-card" onClick={toggleCard} style={cardStyle}>
        {showDetails ? (
          <>
            <h1 className = "animal-name">{animalName}</h1>
            <img src={animalImg} alt={`Animal ${animalName}`} />
          </>
        ) : (
          <p id="animal-details">{animalDetails}</p>
        )}
      </div>
    );
  };

  return (
    <div>
      {animals.map((animal, index) => (
        <AnimalCard
          key={index}
          animalName={animal.animalName}
          animalImg={animal.animalImg}
          animalDetails={animal.animalDetails}
        />
      ))}
    </div>
  );
};

export default AnimalFacts;
