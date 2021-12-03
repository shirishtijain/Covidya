const {
    factory
} = require('fakingoose');

const Resource=require('../models/resource');
const User=require('../models/user');

const connectDatabase=require("../config/database");

connectDatabase();

const resourceFactory=factory(Resource,{
    user:{
        skip:true
    },
    contact:{
        value:9000000000 + Math.floor(Math.random()*999999999)
    },
    description:{
        value: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis." 
    },
    likes:{
        skip:true
    }
});

for(let i=1;i<=20;i++){
    const mock=new Resource(resourceFactory.generate());
    mock.save()
    
    
}