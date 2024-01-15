import MainGame from "./MainGame.jsx"
import './IncorrectAnswer.css';
import {Link} from 'react-router-dom'
import Quiz from './Quiz.jsx';


const IncorrectAnswer =({setAnswered, setUserResponse, quiz, setDisplay})=>{

    return(
        <main id = "incorrect-answer">
            <div>
            <h1 id = "incorrect-title">Incorrect</h1>
                <button className="jelly-button-green"
                onClick={()=>{
                    setUserResponse(null)
                    setDisplay(<Quiz q={quiz} setAnswered={setAnswered} setUserResponse={setUserResponse}/>)
                    setAnswered(false)
                }}><span>Try Again!</span></button>
            </div>
        </main>
    )

}

export default IncorrectAnswer