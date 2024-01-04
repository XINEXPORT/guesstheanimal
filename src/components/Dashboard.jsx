import './Dashboard.css';
import FavoriteAnimals from './FavoriteAnimals.jsx';
import React from 'react';
import {useEffect} from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {userInfo} = useLoaderData();
  const favAnimalData = useLoaderData();
  const navigate = useNavigate();

  const MyDashboard = ({ firstName, lastName, email }) => {
    return (
      <div className='my-dashboardcard'>
        <h1 className = "rainbow rainbow_text_animated">Hello, {firstName} {lastName}</h1>
        <div id = "email">Email: {email}</div>
      </div>
    );
  };

  useEffect(()=>{
    if(userInfo.error){
      navigate("/login")
    }
  }, [])

    return(
    <div id="mydashboard">
      <MyDashboard
        firstName={userInfo.firstName}
        lastName={userInfo.lastName}
        email={userInfo.email}
      />
      <div id = "myfavoriteanimals">
        <FavoriteAnimals
        favoriteAnimalData={favAnimalData}
        />
      </div>
  </div>
  
    );
};

export default Dashboard;
