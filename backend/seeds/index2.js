const axios=require('axios');

//Register

axios.post("http://localhost:4000/api/v1/register" , {name:'testUser', email:'a@b.com', password:'helloworld'})
.then(res=>console.log(res))
.catch(err=>console.log(err))