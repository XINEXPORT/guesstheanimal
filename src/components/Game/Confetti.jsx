import React, {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti'

const Confetti = () => {
    const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight})

    const detectSize = () =>{
    setWindowDimension({width: window.innerWidth, height: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return()=>{
        window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension])

    return(
        <div>
            <ReactConfetti
            width = {windowDimension.width}
            height = {windowDimension.height}
            tweenDuration={5000}
            numberOfPieces = {1000}
            gravity = {0.2}
            />
        </div>
    )
}

export default Confetti;