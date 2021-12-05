import axios from 'axios';
import React , {useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import "./Form.css";
const RescForm = () => {
     const [title, setName] =useState('');
     const [location, setLoc]=useState('');
     const [description, setDes]=useState("Enter details like how to approach contact person, types of material available etc.");
     const [contact, setContact]=useState('');
     const [resType, setType]=useState('Oxygen');


     const handleSubmit=(e)=>{
       e.preventDefault();
       setName("");
       setLoc("");
       setDes("");
       setContact("");
       axios.post("http://localhost:4000/api/v2/resource/new", {title,location,description,contact,resType})
       .then(res=>console.log(res)).catch(err=>console.log(err));
     }


    return (
        <div className="resource ">
   <Form className="form w-75 " onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formTitle">
    <Form.Label>Resource Name</Form.Label>
    <Form.Control type="text" placeholder="Enter resource name" onChange={e=>setName(e.target.value)} value={title}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Enter resource location" onChange={e=>setLoc(e.target.value)}  value={location}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formDescription">
    <Form.Label>Enter description</Form.Label>
    <Form.Control as="textarea"
      placeholder={description}
      style={{ height: '100px' }} onChange={e=>setDes(e.target.value)}/>
  </Form.Group>
   <Form.Label> Type of Resource </Form.Label>
  <Form.Select aria-label="Default select example"onChange={e=>setType(e.target.value)}>
  <option value="Oxygen">Oxygen</option>
  <option value="Plasma" >Plasma</option>
  <option value="Beds">Beds</option>
  <option value="Medicine" >Medicine</option>

   </Form.Select>

  <Form.Group className="mb-3" controlId="formLocation">
    <Form.Label>Contact Details</Form.Label>
    <Form.Control type="text" placeholder="Phone number" onChange={e=>setContact(e.target.value)} value={contact}/>
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>


</Form>
        </div>
    )
}

export default RescForm
