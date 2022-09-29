import React from 'react';
import './Singleplay.css'

const Singleplay = (props) => {
    const {img, des, time, category} = props.singleplay;
    return (
        <div>
            
              <div className='card'>
                <img src={img} alt="" />
                <h2>Category:{category}</h2>
                <p>Des:{des}</p>
                <p>Time:{time}</p>
                <button className='btn'>Click</button>
            </div>
            
        </div>
    );
};

export default Singleplay;