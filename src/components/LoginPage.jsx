import { useSelector, useDispatch } from "react-redux"
import {useState} from 'react'
import axios from "axios"
import './LoginPage.css'
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const page = useSelector(state =>state.page)

    const [logEmail, setLogEmail] = useState('')
    const [logPassword, setLogPassword] = useState('')

    const [regEmail, setRegEmail] = useState('')
    const [regPassword, setRegPassword] = useState('')
    const [regFirstName, setRegFirstName] = useState('')
    const [regLastName, setRegLastName] = useState('')

    //If Login information doesn't exsist, then display error message
    const loginUser = async () =>{
        if(logEmail && logPassword){
            const {data} = await axios.post('/api/auth/login',{
                email: logEmail,
                password: logPassword
            })
            if(data.success){
                dispatch({type:'login', payload: data.user})
                dispatch({type:'page-off'})
                navigate("/dashboard")
    } else{
        alert('invalid data')
    }
    } else {
        alert('need both email and password')
    }
    }

//If Registered User exsists, then display error message
    const registerUser = async() =>{
        if(regEmail && regPassword){
            const {data} = await axios.post('/api/auth/register', {
                firstName: regFirstName,
                lastName: regLastName,
                email: regEmail,
                password: regPassword
            })
            console.log(data)
            if(data.success){
                dispatch({type:'login', payload: data.user})
                dispatch({type:'page-off'})
                navigate("/dashboard")
    } else{
        alert('invalid data')
        }
    } else{
        alert('Please provide an email and password')
    }
}

return(
    <div style={{display:page}} id="page">
        <main id="forms">
        <section className = "form">
            <h1 className = "title">Login</h1>
            <label htmlFor = "log-email">Email: </label>
            <input type="text"
                    name = "log-email"
                    placeholder = "enter your email"
                    onChange = {(e)=> setLogEmail(e.target.value)}
            ></input>

            <label htmlFor = "log-password">Password: </label>
            <input type="password"
                    name = "log-password"
                    placeholder = "enter your password"
                    onChange = {(e)=> setLogPassword(e.target.value)}
            ></input>
            <button
            onClick={loginUser}
            >Login</button>
        </section>

        <section className = "form">
        <h1 className = "title">Register</h1>

            <label htmlFor = "firstname">First Name: </label>
            <input type="text"
                    name = "firstname"
                    placeholder = "enter your first name"
                    onChange = {(e)=> setRegFirstName(e.target.value)}
            ></input>
            <label htmlFor = "lastname">Last Name: </label>
            <input type="text"
                    name = "lastname"
                    placeholder = "enter your last name"
                    onChange = {(e)=> setRegLastName(e.target.value)}
            ></input>
            <label htmlFor = "reg-email">Email: </label>
            <input type="text"
                    name = "reg-email"
                    placeholder = "enter your email"
                    onChange = {(e)=> setRegEmail(e.target.value)}
            ></input>
            <label htmlFor = "reg-password">Password: </label>
            <input type="password"
                    name = "reg-password"
                    placeholder = "enter your password"
                    onChange = {(e)=> setRegPassword(e.target.value)}
            ></input>
            <button
            onClick={registerUser}
            >Register</button>
        </section>
        </main>
    </div>
)
}

export default LoginPage





