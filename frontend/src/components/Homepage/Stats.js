import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Map from '../Map/Map';

const headers = {
    'Access-Control-Allow-Origin': '*',
  }

export const Stats = () => {
        const [data,setData]=useState([]);

        const fetchData = async () => {
        const tableData=await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
           
          
          setData(myJson.regionData);
          console.log(data)
          
        });
           
        }
    

    useEffect(() => {
        fetchData();
    }, [])
    return (

        <div>
               
            
            <div className="container-fluid mt-5" style={{display:"block"}}>
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA </span>COVID-19 Dashboard</h1>
                </div>
                
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Active Cases</th>
                                <th>Recovered</th>
                                <th>Deceased</th>
                                <th>Total Infected</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((d,idx)=>{
                                return (
                                    <tr>
                               <td>{d.region}</td>
                                <td>{d.activeCases}</td>
                                <td>{d.recovered}</td>
                                <td>{d.deceased}</td>
                                <td>{d.totalInfected}</td>
                                 </tr>
                                )
                            })
                        }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
