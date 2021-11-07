import React,{useEffect,useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

import { Card, CardGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const headers={
    'Access-Control-Allow-Origin':'*',
}

function Cards() {
    const [data,setData]=useState([]);

    const fetchData = async () => {
    const tableData=await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
       
      
      setData(myJson);
     
      
    });
       
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
      
<div id="items" >
    {/* {
        data.map((d,idx)=>{
            return( */}
                <div id="cards " className="d-flex flex-row" >
                            {/* className="d-flex flex-row" */}
                            
                            <div className="card text-white bg-primary mb-3 h-20" id="cardOne" >
                                <div className="card-header">Infected</div>
                                <div className="card-body">
                                    <h5 className="card-title">{data.totalCases}</h5>
        
                                    <p className="card-text-white">Last Updated at</p>
                                    <p className="card-text-white text-muted">{data.lastUpdatedAtApify}</p>
       
                                    <p className="card-text-white">Number of Infected cases from Covid in India</p>
                                </div>
                            </div>

                            <div className="card text-white bg-warning mb-3" style={{ width: '25%' }} >
                                <div className="card-header">Active</div>
                                <div className="card-body">
                                    <h5 className="card-title">{data.activeCases}</h5>
        
                                    <p className="card-text-white">Last Updated at</p>
                                    <p className="card-text-white text-muted">{data.lastUpdatedAtApify}</p>
        
                                    <p className="card-text-white">Number of Active cases from Covid in India</p>
    
                                </div>
                            </div>

                            <div className="card text-white bg-success mb-3" style={{ width: '25%' }} >
                                <div className="card-header">Recovered</div>
                                <div className="card-body">
                                    <h5 className="card-title">{data.recovered}</h5>
                                    <p className="card-text-white">Last Updated at</p>
                                    <p className="card-text-white-muted">{data.lastUpdatedAtApify}</p>
        
                                    <p className="card-text-white">Number of Recovered cases from Covid in India</p>
    
                                </div>
                            </div>

                            <div className="card text-white bg-danger mb-3" style={{ width: '25%' }}>
                                <div className="card-header">Death</div>
                                <div className="card-body">
                                    <h5 className="card-title">{data.deaths}</h5>
                                    <p className="card-text-white">Last Updated at</p>
                                    <p className="card-text-white text-muted">{data.lastUpdatedAtApify} </p>
        
                                    <p className="card-text-white">Number of Deaths from Covid in India</p>
    
                                </div>
                            </div>

                            
    
                            {/* <div id="gif">

                                </div> */}
                            
                            {/* <div id="i2">

                                </div> */}
    
    
                </div>

                
            {/* )
        })
    } */}
</div>
    )
}

export default Cards



