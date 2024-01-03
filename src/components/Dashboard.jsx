import './Dashboard.css';
import React from 'react';
import {useState, useEffect} from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {user} = useLoaderData();
  const navigate = useNavigate();

  console.log(user);

  const MyDashboard = ({ firstName, lastName, email }) => {
    return (
      <div className='my-dashboard'>
        <h1 class = "rainbow rainbow_text_animated">Hello, {firstName} {lastName}</h1>
        <p>Email: {email}</p>
      </div>
    );
  };

  useEffect(()=>{
    if(user.error){
      navigate("/login")
    }
  }, [])

    return(
    <div id="mydashboard">
      <MyDashboard
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      />
      <div id = "myfavanimals">
      <p>My Favorite Animals</p>
      </div>
  </div>
  
    );
};

export default Dashboard;
