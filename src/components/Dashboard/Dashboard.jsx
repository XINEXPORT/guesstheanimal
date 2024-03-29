import './Dashboard.css';
import FavoriteAnimals from './FavoriteAnimals.jsx';
import MyDashboard from './MyDashboard.jsx';
import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

//MY DASHBOARD IS THE INITIAL STATE VIEW OF USER'S DASHBOARD
const Dashboard = () => {
  const {userInfo} = useLoaderData();
  const {favoriteanimals} = useLoaderData();
  const navigate = useNavigate();
  const [address, setAddress]=useState(userInfo.address)
  const [city, setCity]=useState(userInfo.city)
  const [state, setState]=useState(userInfo.state)
  const [zipcode, setZipcode]=useState(userInfo.zipcode)
  const [email, setEmail]=useState(userInfo.email)
  const [image, setImage]=useState(userInfo.image)

  useEffect(()=>{
    if(userInfo.error){
      navigate("/login")
    }
  }, [])

    return(
    <div id="mydashboard">
      <MyDashboard
        userId={userInfo.userId}
        firstName={userInfo.firstName}
        lastName={userInfo.lastName}
        address={address}
        setAddress={setAddress}
        city={city}
        setCity={setCity}
        state={state}
        setState={setState}
        zipcode={zipcode}
        setZipcode={setZipcode}
        email={email}
        setEmail={setEmail}
        image = {image}
        setImage = {setImage}
      />
       {/* <div id = "myscore">
          <label className = "rainbow_text_animated">My Score</label>
          <p id = "scorenum">{userInfo.totalscore}</p>
          <label className = "rainbow_text_animated">Game Plays</label>
          <p id = "gameplay">{userInfo.gamecount}</p>
      </div> */}
      <div id = "myfavoriteanimals">
        <FavoriteAnimals
        favoriteAnimalData={favoriteanimals}
        />
      </div>
    </div>
    );
};

export default Dashboard;