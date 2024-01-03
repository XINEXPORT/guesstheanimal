import './SoundButtons.css';
import {Link} from 'react-router-dom'


const SoundButtonLink=({sound, setAnswered, setUserResponse, animalId})=>{
console.log(sound)
return(
   <div className='sound-btn'>
    <audio src={sound} controls></audio>

    <button id="sound-select-btn" onClick={() =>{
        setUserResponse(animalId)
        setAnswered(true)
    }}>
    <p id = "select-sound">Select</p>
    </button>
   </div>

)
}

export default SoundButtonLink