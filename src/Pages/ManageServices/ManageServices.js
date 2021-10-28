import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch("https://protected-lowlands-75573.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    //delete handler 
    const deleteHandler = (id)=>{
        const url = `https://protected-lowlands-75573.herokuapp.com/services/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.deletedCount > 0){
                alert("deleted Successfully")
                const remaining = services.filter(service =>service._id !==id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service=><div key={service._id}>
                    <br />
                    <h5>{service.name}</h5>
                    <p>{service.description}</p>
                    <h5>Price: {service.price}</h5>
                    <button onClick={()=>deleteHandler(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;