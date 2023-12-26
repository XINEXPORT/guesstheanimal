import './SoundButtons.css';
import {Link} from 'react-router-dom'


const SoundButtonLink=({sound, setAnswered, setUserResponse, animalId})=>{
console.log(sound)
return(
   <div className='sound-btn'>
    <audio src={sound} controls></audio>

    <button id="select" onClick={() =>{
        setUserResponse(animalId)
        setAnswered(true)
    }}>
    <p>Select</p>
    </button>
   </div>

)
}

export default SoundButtonLink