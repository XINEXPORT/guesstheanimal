import '../index.css';
import Quiz from './Quiz.jsx';
import MainGame from "./MainGame"
import lodash from 'lodash';
import { useLoaderData } from 'react-router-dom';
import {useState} from 'react';

//CORRECT ANSWER PROPERTIES

const CorrectAnswer =()=>{
const {animals} =useLoaderData()
let newChoices = lodash.sampleSize(animals, 3)
//QUIZ STATE
const [quiz,setQuiz]=useState(newChoiceshoices);
//ISGAME ANSWERED STATE
const [answered,setAnswered]=useState(false);
//USER RESPONSE STATE
const[userResponse, setUserResponse]=useState(null);
//DISPLAY State
const [display,setDisplay]=useState(<Quiz q={quiz} setAnswered={setAnswered} setUserResponse={setUserResponse}/>)


return
<main>
    <h1>
        Correct!
    </h1>
    <button className="btn">
        Next
    </button>
    </main>
}


export default CorrectAnswer