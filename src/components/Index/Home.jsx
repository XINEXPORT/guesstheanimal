import './Home.css';
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGlitch } from "react-icons/si";


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
            <a href="https://www.linkedin.com/in/christine-hoang-profile/">
            <span className = "linkedin-icon"><FaLinkedin /></span>
            </a>
            <a href="https://github.com/XINEXPORT">
            <span className = "github-icon"><FaGithub /></span>
            </a>
            <a href="https://glitch.com/@XINEXPORT">
            <span className = "glitch-icon"><SiGlitch /></span>
            </a>
        </div>
        </main>
    )
}

export default Home;