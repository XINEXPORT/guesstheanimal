import '../index.css';
import Quiz from './Quiz.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';
import lodash from 'lodash';
import { useLoaderData } from 'react-router-dom';
import CorrectAnswer from './CorrectAnswer.jsx'
import IncorrectAnswer  from './IncorrectAnswer.jsx';


//PROPERTIES

const MainGame = ()=>{
    const {animals} =useLoaderData()
    let choices = lodash.sampleSize(animals, 3)
    //QUIZ STATE
    const [quiz,setQuiz]=useState(choices);
    //ISGAME ANSWERED STATE
    const [answered,setAnswered]=useState(false);
    //USER RESPONSE STATE
         //null is an empty javascript variable
    const[userResponse, setUserResponse]=useState(null);
    //DISPLAY State
    const [display,setDisplay]=useState(<Quiz q={quiz} setAnswered={setAnswered} setUserResponse={setUserResponse}/>)


useEffect(()=>{
    if(answered){
        let answer=quiz[0].animalId
        if(answer === userResponse){
            setDisplay(<CorrectAnswer/>)
        } else{
            setDisplay(<IncorrectAnswer setUserResponse={setUserResponse} setAnswered={setAnswered} quiz={quiz} setDisplay={setDisplay}/>)
        }
    }
},[answered])

return(
    <main>
        <div className = 'animalcard'>
        {display}
        </div>
    </main>
)}


export default MainGame