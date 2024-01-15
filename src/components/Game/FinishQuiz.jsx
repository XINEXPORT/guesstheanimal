import './FinishQuiz.css';
import React from 'react';
import Confetti from './Confetti';
import {useState,useEffect} from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainGame from './MainGame';
import axios from 'axios';

//PROPERTIES
const FinishQuiz = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const correct = useSelector(state=>state.correct)
    const incorrect = useSelector(state=>state.incorrect)
    const reduxValues = [correct, incorrect]
    const copyValues = [...reduxValues]
    const [copyCorrect, copyIncorrect] = copyValues


    // useEffect(() => {
    //     const updateTotalScore = async () => {
    //         const gameScore = correct*5;
    //         await axios.put(`/api/user`, {
    //             totalScore: gameScore,
    //         });
    //     }
    //     updateTotalScore()
    // },[])

    return(
        <main id="home">
            <div id = "finalanimals">
            <h1 className = "finished">Finished!</h1>
            <main id = "scorecard">
                <h1 id = "result">Result</h1>
                <label id ="score">Total Score: </label>
                <p>{copyCorrect*5}</p>
                <label id = "correctanswers">Correct Answers:</label>
                <p>{copyCorrect}</p>
                <label id = "incorrectanswers">Incorrect Answers:</label>
                <p>{copyIncorrect}</p>
            </main>
            <button onClick={()=>{navigate("/animalflashcards")}} className = "jelly-button" style={{}}><span>Continue to Animal Flash Cards</span></button>
            <Confetti/>
            </div>
        </main>
    )
}

export default FinishQuiz;