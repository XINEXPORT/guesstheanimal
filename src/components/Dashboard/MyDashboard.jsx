import './MyDashboard.css';
import { useState } from "react";
import axios from "axios";

//create a !isEditing state to return the my-dashboardcard view, else return the editing state
//create buttons on the dashboard, delete EditContactInfoButtons component

const MyDashboard = ({ userId,firstName, lastName, address,setAddress, city,setCity, state,setState, zipcode,setZipcode, email,setEmail }) => {
    const [isEditing, setisEditing]=useState(false);
  
    const handleEditClick=()=>{
      setisEditing(true);
    }
  
    const handleSaveClick= async ()=>{
      const {data} = await axios.put (`/api/user/${userId}`, {
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        email: email
      })
        setAddress(data.address)
        setCity(data.city)
        setState(data.state)
        setZipcode(data.zipcode)
        setEmail(data.email)
  
      setisEditing(false);
    }
  
      return (
        <div className={`my-dashboardcard ${isEditing ? 'edit-mode' : ''}`}>
          <h1 className = "rainbow rainbow_text_animated">Hello, {firstName} {lastName}</h1>
          <p id = "contact-info">Contact Information</p>
  
       {isEditing ? (  
      <>
          <label htmlFor = "address" > Address: </label>
          <input type = "text" value = {address} onChange={(e)=>setAddress(e.target.value)}/>
          <label htmlFor = "city" > City: </label>
          <input type = "text" value = {city} onChange={(e)=>setCity(e.target.value)}/>
          <label htmlFor = "state" > State: </label>
          <input type = "text" value = {state} onChange={(e)=>setState(e.target.value)}/>
          <label htmlFor = "zipcode" > Zipcode: </label>
          <input type = "text" value = {zipcode} onChange={(e)=>setZipcode(e.target.value)}/>
          <label htmlFor = "emailaddress" > Email Address: </label>
          <input type = "text" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
  
          <button onClick={handleSaveClick}>Save</button>
      </>
  
      ):(
  
      <div>
          <label htmlFor = "address" > Address: </label>
          <div className = "form">{address}</div>
          <label htmlFor = "city" > City: </label>
          <div className = "form">{city}</div>
          <label htmlFor = "state" > State: </label>
          <div className = "form">{state}</div>
          <label htmlFor = "zipcode" > Zipcode: </label>
          <div className = "form">{zipcode}</div>
          <label htmlFor = "emailaddress" > Email Address: </label>
          <div className = "form">{email}</div>
  
        <button onClick = {handleEditClick}>Edit</button>
        </div>
      )}
      </div>
      );
      }

      export default MyDashboard