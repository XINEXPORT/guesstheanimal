import './MainGame.css';
import Quiz from './Quiz.jsx';
import {useState, useEffect} from 'react';
import lodash from 'lodash';
import { useLoaderData } from 'react-router-dom';
import CorrectAnswer from './CorrectAnswer.jsx'
import IncorrectAnswer  from './IncorrectAnswer.jsx';
import FinishQuiz from './FinishQuiz.jsx';


//PROPERTIES
const MainGame = ()=>{
    const {animals} =useLoaderData()
    let choices = lodash.sampleSize(animals, 3)

    console.log(choices)

    //QUIZ STATE
    const [quiz,setQuiz]=useState(choices);
    //IS GAME ANSWERED STATE
    const [answered,setAnswered]=useState(false);
    //USER RESPONSE STATE
    //null is an empty javascript variable
    const[userResponse, setUserResponse]=useState(null);
    //DISPLAY State
    const [display,setDisplay]=useState(<Quiz q={quiz} setAnswered={setAnswered} setUserResponse={setUserResponse}/>)
    //CORRECT ANSWER COUNT STATE
    const [correctAnswerCount,setCorrectAnswerCount]=useState(0);
    //ANIMAL ARR
    const [animalArr, setAnimalArr]=useState(animals)


useEffect(()=>{
    if(answered){
        let answer=quiz[0].animalId
        if(answer === userResponse){
            setCorrectAnswerCount(correctAnswerCount+1)
            //this is where the gamecount state will increase
            //if the gamecount is less than num, set display to correct answer, otherwise set to finished component
            // setDisplay(<FinishQuiz/>)
            if(correctAnswerCount < 4){
            
            //Make a copy of the animal array and filter out the correct answer
            //then set the new animal array to the filtered copy
                let arrCopy = [...animalArr]
                arrCopy = arrCopy.filter(animal=>animal!==quiz[0])
                setAnimalArr(arrCopy)
                
                setDisplay(
                    <CorrectAnswer 
                        animals={animalArr} 
                        quiz={quiz} 
                        setQuiz= {setQuiz} 
                        setUserResponse={setUserResponse} 
                        setAnswered={setAnswered} 
                        setDisplay={setDisplay}
                        />)
            } else{
                setDisplay(
                <FinishQuiz/>)
            }
        } else{
            setDisplay(
            <IncorrectAnswer 
                setUserResponse={setUserResponse} 
                setAnswered={setAnswered} 
                quiz={quiz} 
                setDisplay={setDisplay}/>)
        }
    } else{
        setDisplay(<Quiz q={quiz} setAnswered={setAnswered} setUserResponse={setUserResponse}/>)
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