import './Dashboard.css';
import React from 'react';
import {useState, useEffect} from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {user} = useLoaderData();
  const navigate = useNavigate();
  const [view, myView] = useState()

  console.log(user);

  const MyDashboard = ({ firstName, lastName, email }) => {
    return (
      <div className='my-dashboard'>
        <h1>Hello,{firstName} {lastName}</h1>
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
    <div>

      <MyDashboard
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      />
    
  </div>
    );
};

export default Dashboard;
