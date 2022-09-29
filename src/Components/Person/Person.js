import React from 'react';
import './Person.css'

const Person = () => {
    return (
        <div className="personal-info">
        <div>
            {/* <img src="person.webp" alt="" /> */}
            <div className="basic-info">
                <h4>Rakib hasan</h4>
                <p>Bogura, Bangladesh</p>
            </div>
        </div>
        <div className="person-profile">
            <div>
                <small>
                    Age
                <h3>35</h3>
                </small>
            </div>
            <div>
                <small>
                    Height
                    
                </small>
                <h3>5.7</h3>
            </div>
            <div>
                <small>
                    Midfielder
                    <br />
                    Footballer
                </small>
            </div>
        </div>
    </div>
);
};

export default Person;