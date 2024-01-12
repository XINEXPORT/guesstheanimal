import axios from "axios";

const {data}= await axios.get('/api/auth/status')

const initialState = {
    loggedIn: data.loggedIn,
    user: data.user,
    modal:'none',
    correct: 0,
    incorrect: 0,
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'login':
            return {...state, user: action.payload, loggedIn: true}
        case 'logout':
            return {...state, user:null, loggedIn: false}
        case 'page-on':
            return {...state, modal:'flex'}
        case 'page-off':
            return {...state, modal:'none'}
        case 'correct':
            return{...state, correct:action.payload}
        case 'incorrect':
            return{...state, incorrect:action.payload}
        case 'reset':
            return{...state, correct:0, incorrect:0}
        default:
            return state
}}