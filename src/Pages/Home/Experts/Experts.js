import React from 'react';

import mechanic1 from '../../../images/mechanic/ex-1.jpg'
import mechanic2 from '../../../images/mechanic/ex-2.jpg'
import mechanic3 from '../../../images/mechanic/ex-3.jpg'
import mechanic4 from '../../../images/mechanic/ex-4.jpg'
import mechanic5 from '../../../images/mechanic/ex-5.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Adward Lais',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Schok',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Mark Wings',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Maxowel Sid',
        expertize: '-Dainpaint Expert-'
    },
    {
        img: mechanic5,
        name: 'Smith Huks',
        expertize: '-Dainoma Expert-'
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container mt-5">
            <h2 className="text-primary mb-3">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;