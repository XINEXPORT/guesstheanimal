import '../index.css';
import Quiz from './Quiz.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';
import lodash from 'lodash';
import { useLoaderData } from 'react-router-dom';

const MainGame = ()=>{
    const {animals} =useLoaderData()
    let choices = lodash.sampleSize(animals, 3)
    const [quiz,setQuiz]=useState(choices);
    const [page,setPage]=useState(<Quiz q={quiz}/>)
    const [answered,setAnswered]=useState(false);

useEffect(()=>{
    if(answered){
    }
},[answered])

return(
    <main>
        <h1 className = 'guesstheanimalheader'>Guess the Animal</h1>
        <div className = 'animalcard'>
        {page}
        </div>
    </main>
)}


export default MainGame