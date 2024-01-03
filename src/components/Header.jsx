import React from 'react';  
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './LoginPage.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

  // Header Component
  const Header = () => {
  // Header State
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.loggedIn);

  // Display Login page
  const openPage = () => {
    dispatch({ type: 'page-on' });
  };

  // Logout User
  const logoutUser = async () => {
    const { data } = await axios.post('/api/auth/logout');
    if (data.success) {
      dispatch({ type: 'logout' });
    }
  };

  return (
    <header>
      <h1>Welcome to Guess the Animal</h1>
      <nav>
        <Link to="/" id="homelink">
          Home
        </Link>
        <Link to="/game" id="gamelink">
          Game
        </Link>
        <Link to="/animalflashcards" id="animal-flashlink">
          Animal Flash Cards
        </Link>
        {loggedIn ? (  
        <Link to="/dashboard" id="dashboard">
          My Dashboard
        </Link>): <></>
        }
        <nav to="/login" id="login-register">
          {loggedIn ? (
            <button id = "logout" onClick={logoutUser}>Logout</button>
          ) : (
            //assign OnClick event with useNavigate to replicate Link tag behvavior
            //useNavigate forces events to navigate to a different page
            <button onClick={()=>{
                navigate("/login")
            }} id="login" style={{color: '#000000' }}>Login/Register</button>
          )}
        </nav>
      </nav>
    </header>
  );
};

export default Header;
