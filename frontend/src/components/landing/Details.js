import React , {useCallback, useState} from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import "./Details.css";
import axios from 'axios'



function Details({title,info,phoneno,verified,likes,id}) {
  const [like, setlike]=useState(likes)
  const onLike=(e)=>{
    e.preventDefault();
    setlike(like+1)
    axios.post("http://localhost:3000/api/v1/resources/0/"+id).then(res=>console.log(res)).catch(err=>console.log(err));
  }
  
  const onDislike=(e)=>{
    e.preventDefault();
    setlike(like-1)
    axios.post("http://localhost:3000/api/v1/resources/1/"+id).then(res=>console.log(res)).catch(err=>console.log(err));
  }


    return (
      <>
<Card class="mt-3 mr-2 card mb-3 flex flex-row" style={{width:"100%"}}>
  <Card.Body>
            <Card.Title>{title}</Card.Title>
    <Card.Text>
    {info}
              <p>{verified}</p>
              <p>{phoneno}</p>
    </Card.Text>
    <div class="btns">
    <button class="btn  btn-primary detailsBtn"  onClick={onLike}><i class="fas fa-thumbs-up"></i> </button>
    &nbsp;{like} &nbsp;
    <button class="btn  btn-primary detailsBtn" onClick={onDislike}><i class="fas fa-thumbs-down"></i> </button>
    </div>   
  </Card.Body>
</Card>
        </>
  

       
    )
}

export default Details
