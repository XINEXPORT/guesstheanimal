import './Quiz.css';
import {useState} from 'react'
import SoundButtonLink from './SoundButtons';
import lodash from 'lodash';

const Quiz = ({q, setAnswered, setUserResponse})=>{
    const [animalName, setAnimalName] = useState()
    const [animalImg, setAnimalImg] = useState()
    const [animalQuestion, setAnimalQuestion] = useState()

    let quizArr = lodash.shuffle(q)
    let btns = quizArr.map(
        (animalObj)=>{
            return <SoundButtonLink key={animalObj.animalId} sound={animalObj.animalSound} qstn={animalObj.animalQuestion}setAnswered={setAnswered} setUserResponse={setUserResponse} animalId={animalObj.animalId}/>
        }
    )

return(
    <main className = "quiz">
    <p id="animal-qstn">{q[0].animalQuestion}</p>
    <img id = "animalImg" src= {q[0].animalImg}/>
    <div id="btns">{btns}</div>
    </main>
)
}

export default Quiz