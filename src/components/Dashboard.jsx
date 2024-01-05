import './Dashboard.css';
import FavoriteAnimals from './FavoriteAnimals.jsx';
import React from 'react';
import {useEffect} from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {userInfo} = useLoaderData();
  const {favoriteanimals} = useLoaderData();
  const navigate = useNavigate();

//HAVING ISSUES DESTRUCTURING ZIPCODE
  const MyDashboard = ({ firstName, lastName, address, city, state, zipcode, email }) => {
    return (
      <div className='my-dashboardcard'>
        <h1 className = "rainbow rainbow_text_animated">Hello, {firstName} {lastName}</h1>
        <p id = "contact-info">Contact Information</p>
        <label htmlFor = "address" > Address: </label>
        <div className = "form">{address}</div>
        <label htmlFor = "city" > City: </label>
        <div className = "form">{city}</div>
        <label htmlFor = "state" > State: </label>
        <div className = "form">{state}</div>
        <label htmlFor = "zipcode" > Zipcode: </label>
        <div className = "form">{userInfo.zipcode}</div>
        <label htmlFor = "emailaddress" > Email Address: </label>
        <div className = "form">{email}</div>
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
        address={userInfo.address}
        city={userInfo.city}
        state={userInfo.state}
        zip={userInfo.zipcode}
        email={userInfo.email}
      />
      <div id = "myfavoriteanimals">
        <FavoriteAnimals
        favoriteAnimalData={favoriteanimals}
        />
      </div>
  </div>
  
    );
};

export default Dashboard;
