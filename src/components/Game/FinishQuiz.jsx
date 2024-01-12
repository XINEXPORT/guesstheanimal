import './FinishQuiz.css';
import React from 'react';
import Confetti from './Confetti';
import {useState} from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import MainGame from './MainGame';
import axios from 'axios';

//PROPERTIES
const FinishQuiz = ({scoreCount, correctAnswerCount, incorrectAnswerCount}) => {
    const {animals} =useLoaderData()
    const navigate = useNavigate();

    let allAnimals = animals.map(
        (animalObj)=>{
             return <img src={animalObj.animalImg}/>
        }
    )

  const updateTotalScore = async () => {
      const gameScore = correctAnswerCount*5;
        await axios.put(`/api/user`, {
        totalScore: gameScore,
      });
}
updateTotalScore()

    return(
        <main id="home">
            <div id = "finalanimals">
            <h1 className = "finished">Finished!</h1>
            <main id = "scorecard">
                <h1 id = "result">Result</h1>
                <label id ="score">Total Score: </label>
                <p>{correctAnswerCount*5}</p>
                <label id = "correctanswers">Correct Answers:</label>
                <p>{correctAnswerCount}</p>
                <label id = "incorrectanswers">Incorrect Answers:</label>
                <p>{incorrectAnswerCount}</p>
            </main>
            <button onClick={()=>{navigate("/animalflashcards")}} id="contanimalflashcards" style={{}}>Continue to Animal Flash Cards</button>
            <Confetti/>
            </div>
        </main>
    )
}

export default FinishQuiz;