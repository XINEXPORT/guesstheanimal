import MainGame from "./MainGame"
import '../index.css';
import {Link} from 'react-router-dom'
import Quiz from './Quiz.jsx';


const IncorrectAnswer =({setAnswered, setUserResponse, quiz, setDisplay})=>{

    return(
        <main id = "incorrect-answer">
            <div>
                <button id="try-again"
                onClick={()=>{
                    setUserResponse(null)
                    setDisplay(<Quiz q={quiz} setAnswered={setAnswered} setUserResponse={setUserResponse}/>)
                    setAnswered(false)
                }}>Try Again!</button>
            </div>
        </main>
    )

}

export default IncorrectAnswer