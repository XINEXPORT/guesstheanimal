import './Home.css';
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGlitch } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const Home = ({}) => {
    const {animals} =useLoaderData()
    const [animalImg, setAnimalImg] = useState()

    let allAnimals = animals.map(
        (animalObj)=>{
             return <img key={animalObj.animalId} src={animalObj.animalImg}/>
        }
    )
    return(
        <main id="home">
            <div id = "allanimals">
            {allAnimals}
            </div>
            <div className = "footer-container">
            <div className = "chstudios">2024 Christine Hoang Studios. All Rights Reserved. </div>
            <a href="https://www.linkedin.com/in/christine-hoang-profile/" target="_blank" rel="noreferrer">
            <span className = "linkedin-icon"><FaLinkedin /></span>
            </a>
            <a href="https://github.com/XINEXPORT" target="_blank" rel="noreferrer">
            <span className = "github-icon"><FaGithub /></span>
            </a>
            <a href="https://glitch.com/@XINEXPORT" target="_blank" rel="noreferrer">
            <span className = "glitch-icon"><SiGlitch /></span>
            </a>
            <a href="https://www.youtube.com/@planetxine" target="_blank" rel="noreferrer">
            <span className = "youtube-icon"><FaYoutube /></span>
            </a>
        </div>
        </main>
    )
}

export default Home;