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
            setDisplay(<IncorrectAnswer/>)
        }
    }
},[answered])

return(
    <main>
        <h1 className = 'guesstheanimalheader'>Guess the Animal</h1>
        <div className = 'animalcard'>
        {display}
        {/* /*gamestate is page* */}
        </div>
    </main>
)}


export default MainGame