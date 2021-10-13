import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>This is Booking Part: {serviceId}</h2>
        </div>
    );
};

export default Booking;