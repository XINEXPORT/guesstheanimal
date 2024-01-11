import React, { useRef } from 'react';
import { RxSpeakerLoud } from "react-icons/rx";
import './SoundButtons.css';
import { Link } from 'react-router-dom';

const SoundButtonLink = ({ sound, setAnswered, setUserResponse, animalId }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div className='sound-btn'>
      <audio ref={audioRef} src={sound}></audio>
      <button class = "pushable" onClick={playSound}>
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">
      <RxSpeakerLoud />
      </span>
      </button>

      <button class="sound-select-btn" onClick={() => {
        setUserResponse(animalId);
        setAnswered(true);
      }}>
        <p id="select-sound">Select</p>
      </button>
    </div>
  );
}

export default SoundButtonLink;
