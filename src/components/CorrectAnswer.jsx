import '../index.css';
import MainGame from "./MainGame"
import lodash from 'lodash';
import { useLoaderData } from 'react-router-dom';
import {useState} from 'react';

const CorrectAnswer =()=>{
return
<main>
    <h1>
        Correct!
    </h1>
    <button className="btn">
        Next
    </button>
    </main>
}


export default CorrectAnswer