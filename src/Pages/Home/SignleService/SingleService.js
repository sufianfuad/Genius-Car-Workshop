import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({ service }) => {
    // const {service} = props 
    const { id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <h5>Price: {price}</h5>
                <p className="px-3">{description}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn btn-warning">Book {name}</button>
                </Link>
            </div>

        </div>
    );
};

export default SingleService;