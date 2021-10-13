import React from 'react';
import { Link } from 'react-router-dom';

import notfound from '../../images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <div>
                <img src={notfound} alt="" />
            </div>
            <Link to="/home">
                <button className="btn btn-primary px-3 py-2">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;