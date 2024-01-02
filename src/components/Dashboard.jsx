import './Dashboard.css';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
  const { users } = useLoaderData();

  const MyDashboard = ({ firstName, lastName, email }) => {
    return (
      <div className='dashboard'>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
      </div>
    );
  };

  return (
    <div>
      {users.map((user, index) => (
        <MyDashboard
          key={index}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Dashboard;
