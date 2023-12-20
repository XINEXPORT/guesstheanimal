import '../index.css';
import axios from 'axios';
import {useState} from 'react'

const Quiz = ({q})=>{
    const [animalName, setAnimalName] = useState()
    const [animalImg, setAnimalImg] = useState()
    const [animalQuestion, setAnimalQuestion] = useState()

    console.log(q[0])


return(
    <div className = "quiz">

    </div>
)
}

export default Quiz