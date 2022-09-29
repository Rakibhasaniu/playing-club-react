import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => 
            console.log(data))

    },[])

    return (
        <div>
            <div className='home-container'>
                <div className='left-side'>
                    <div className='players-container'>
                        <Players></Players>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='cart'>
                        <p>This is cart</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;