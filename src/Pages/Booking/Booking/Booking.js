import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    // dynamic route with useParams
    const {serviceId}=useParams();
    const [service,setService]=useState({});

    useEffect(()=>{
        fetch(`https://protected-lowlands-75573.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h1>{service.name} </h1>
            <h4>Service id: {serviceId}</h4>
        </div>
    );
};

export default Booking;