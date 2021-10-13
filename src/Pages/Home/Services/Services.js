import React, { useEffect, useState } from 'react';
import SingleService from '../SignleService/SingleService';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="services mt-5">
            <h2 className="text-primary mb-3">Our Services</h2>
            <div className="services-container">
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;






