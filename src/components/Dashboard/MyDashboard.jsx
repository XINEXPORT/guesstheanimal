import './MyDashboard.css';
import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from 'react-bootstrap'
import { FaPencil } from "react-icons/fa6";
import { BsFillFloppy2Fill } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";


//create a !isEditing state to return the my-dashboardcard view, else return the editing state
//create buttons on the dashboard, delete EditContactInfoButtons component

const MyDashboard = ({ userId,firstName, lastName, address,setAddress, city,setCity, state,setState, zipcode,setZipcode, email,setEmail, image, setImage }) => {
    const [isEditing, setisEditing]=useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const handleCancelClick=()=>{
      setisEditing(false);
    }
  
    const handleEditClick=()=>{
      setisEditing(true);
    }

    const handleImageChange = (e)=>{
      const file = e.target.files[0];
      setPreviewImage(URL.createObjectURL(file));
      setImage(file);
    }
  
    const handleSaveClick= async () => {
        const formData = new FormData()

        formData.append('image', image)
        formData.append('address', address)
        formData.append('city', city)
        formData.append('state', state)
        formData.append('zipcode', zipcode)
        formData.append('email', email)
        
        let {data}=await axios.put (`/api/user/${userId}`, formData)

        setImage(data.image)
        setAddress(data.address)
        setCity(data.city)
        setState(data.state)
        setZipcode(data.zipcode)
        setEmail(data.email)

        setisEditing(false);

    }
//?? determines whether the image is null and then uses the ../../../public/profileimg variable instead
      return (
        <div className={`my-dashboardcard ${isEditing ? 'edit-mode' : ''}`}>
          <h1 className = "rainbow rainbow_text_animated">Hello, {firstName} {lastName}</h1>
          {image || previewImage? (
          <img className="profileimg" src={previewImage || image} alt="Profile Image" />
          ):(
          <img className = "profileimg" src="../../../public/profileimg/placeholder.png"/>  
          )}
          <p id = "contact-info">Contact Information</p>

       {isEditing ? (  
      <>  
      <Form method = "PUT" encType = 'multipart/form-data' >

      <Form.Group controlId="fileName" className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control 
            type="file" 
            name= "image" 
            onChange= {handleImageChange}
            size="lg" />
      </Form.Group>
      <Form.Group controlId="address" className="mb-3">
          <Form.Label> Address </Form.Label>
          <Form.Control 
            type = "text" 
            value = {address} 
            onChange={(e)=>setAddress(e.target.value)}/>
       </Form.Group>    
       <Form.Group controlId="city" className="mb-3">
          <Form.Label> City </Form.Label>
          <Form.Control 
            type = "text" 
            value = {city} 
            onChange={(e)=>setCity(e.target.value)}/>
       </Form.Group> 
       <Form.Group controlId="state" className="mb-3">
          <Form.Label> State </Form.Label>
          <Form.Control 
            type = "text" 
            value = {state} 
            onChange={(e)=>setState(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="zipcode" className="mb-3">
          <Form.Label> Zipcode </Form.Label>
          <Form.Control 
            type = "text" 
            value = {zipcode} 
            onChange={(e)=>setZipcode(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="emailaddress" className="mb-3">
          <Form.Label> Email Address </Form.Label>
          <Form.Control 
            type = "text" 
            value = {email} 
            onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          </Form>

          <button className = "save-btn" onClick={handleSaveClick}><BsFillFloppy2Fill /></button>
          <button className = "cancel-btn" onClick={handleCancelClick}><MdOutlineCancelPresentation /></button>
      </>
  
      ):(
  
      <div>
          <label htmlFor = "address" > Address </label>
          <div className = "form">{address}</div>
          <label htmlFor = "city" > City </label>
          <div className = "form">{city}</div>
          <label htmlFor = "state" > State </label>
          <div className = "form">{state}</div>
          <label htmlFor = "zipcode" > Zipcode </label>
          <div className = "form">{zipcode}</div>
          <label htmlFor = "emailaddress" > Email Address </label>
          <div className = "form">{email}</div>
  
        <button className = "edit-btn" onClick = {handleEditClick}><FaPencil /></button>
        </div>
      )}
      </div>
      );
      }

      export default MyDashboard