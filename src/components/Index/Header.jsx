import React from 'react';  
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../Login/LoginPage.jsx';
import axios from 'axios';


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
      navigate("/")
    }
  };

  return (
    <div>
    <header>
      <h1>Welcome to Guess the Animal</h1>
      <nav>
        <Link to="/" id="homelink">
          Home
        </Link>
        <Link to="/game" id="gamelink" onClick={() => dispatch({type: 'reset'})}>
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
            <button className = "jelly-button" onClick={logoutUser}>
              <span>Logout</span>
              </button>
          ) : (
            //assign OnClick event with useNavigate to replicate Link tag behvavior
            //useNavigate forces events to navigate to a different page
            <button onClick={()=>{
                navigate("/login")
            }} className="jelly-button" style={{color: '#000000' }}>
              <span>Login/Register</span>
              </button>

          )}
        </nav>
      </nav>
    </header>
    </div>
  );
};

export default Header;
