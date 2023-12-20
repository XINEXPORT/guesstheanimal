import MainGame from "./MainGame"
import '../index.css';

const IncorrectAnswer =()=>{

    return(
        <main id = "incorrect-answer">
            <div id="try-again">
                <p>Try Again!</p>
            </div>
            <button className="btn">Back</button>
        </main>
    )

}

export default IncorrectAnswer