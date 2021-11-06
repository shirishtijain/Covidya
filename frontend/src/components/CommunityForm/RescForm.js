import React from 'react'
import {Form,Button} from 'react-bootstrap';
import "./Form.css";
const RescForm = () => {
    return (
        <div className="resource">
   <Form className="form w-75">
        
  <Form.Group className="mb-3" controlId="formTitle">
    <Form.Label>Resource Name</Form.Label>
    <Form.Control type="text" placeholder="Enter resource name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Enter resource location" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formDescription">
    <Form.Label>Enter description</Form.Label>
    <Form.Control as="textarea"
      placeholder="Enter details like how to approach contact person, types of material available etc."
      style={{ height: '100px' }} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formLocation">
    <Form.Label>Contact Details</Form.Label>
    <Form.Control type="text" placeholder="Phone number" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>


</Form>
        </div>
    )
}

export default RescForm
