import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://dummyjson.com/quotes';

function Fetchapi() {
  const [Data,setData] = useState([]);
const apiGet=async()=>{
    const response=await fetch(API_URL)
    .then((res)=>res.json())   
    .then((dat)=>dat.quotes)
    const responsedata=response.filter((data)=>data.id<=30)
    setData(responsedata)
} 
 useEffect(()=>{
    apiGet();
 },[]);
 return(
    <div >
        {Data.map((obj)=>(
        <div style={{backgroundColor: 'yellow',color:'black'}}>
        <h2>{obj.id}-{obj.quote}
        </h2>
        </div>
        ))}
        
    </div>
 )
 

}

export default Fetchapi