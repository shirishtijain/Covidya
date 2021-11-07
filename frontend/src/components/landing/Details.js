import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import "./Details.css";
function Details({title,info,phoneno,verified,likes}) {
    return (
      <>
<Card class="mt-3 mr-2 card mb-3">
  <Card.Body>
            <Card.Title>{title}</Card.Title>
    <Card.Text>
    {info}
              <p>{verified}</p>
              <p>{phoneno}</p>
    </Card.Text>
    <div class="btns">
    <button class="btn  btn-primary detailsBtn"><i class="fas fa-thumbs-up"></i> </button>
    &nbsp;{likes} &nbsp;
    <button class="btn  btn-primary detailsBtn"><i class="fas fa-thumbs-down"></i> </button>
    </div>   
  </Card.Body>
</Card>
        </>
  

       
    )
}

export default Details
