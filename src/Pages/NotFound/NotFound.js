import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../images/Oops404.png"

const NotFound = () => {
    return (
        <div>
            <img style={{width:"30%"}} src={notFound} alt="" />
            <h3 className="text-primary">Page Not Found</h3>
            <Link to="/home">
            <button className="btn btn-primary">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;