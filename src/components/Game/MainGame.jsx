import './MainGame.css';
import Quiz from './Quiz.jsx';
import {useState, useEffect} from 'react';
import lodash from 'lodash';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CorrectAnswer from './CorrectAnswer.jsx'
import IncorrectAnswer  from './IncorrectAnswer.jsx';
import FinishQuiz from './FinishQuiz.jsx';
import { useSelector, useDispatch } from 'react-redux';


//PROPERTIES
const MainGame = ()=>{
    const {animals} =useLoaderData()
    let choices = lodash.sampleSize(animals, 3)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
    const correct=useSelector(state=>state.correct)    
    //INCORRECT ANSWER COUNT STATE
    const incorrect=useSelector(state=>state.incorrect)
    //SCORE STATE
    const [scoreCount,setScoreCount]=useState(1)
    //ANIMAL ARR
    const [animalArr, setAnimalArr]=useState(animals)


useEffect(()=>{
    if(answered){
        let answer=quiz[0].animalId
        if(answer === userResponse){
            dispatch({type: 'correct', payload: correct + 1})
            
            //this is where the gamecount state will increase
            //if the gamecount is less than num, set display to correct answer, otherwise set to finished component
            // setDisplay(<FinishQuiz/>)
            //Win condition
            //SET GAME BACK TO <5
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
            dispatch({type: 'incorrect', payload: incorrect + 1})   

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

useEffect(() => {
    if(correct+incorrect >= 5){
            navigate('/game/finish')
        }
},[correct,incorrect])

return(
    <main>
        <div className = 'animalcard'>
        {display}
        </div>
    </main>
)}


export default MainGame