import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    // dynamic route with useParams
    const {serviceId}=useParams();
    return (
        <div>
            <h1>i am booking {serviceId}</h1>
        </div>
    );
};

export default Booking;