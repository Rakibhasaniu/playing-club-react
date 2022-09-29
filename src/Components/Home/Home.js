import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Players from '../Players/Players';
import Totalsummary from '../Totalsummary/Totalsummary';
import './Home.css'

const Home = () => {
    
    const 
    [players, setPlayers] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => 
            setPlayers(data))

    },[])

    return (
        <div>
            <div className='home-container'>
                <div className='left-side'>
                    <div className='players-container'>
                        <Players players={players}></Players>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='cart'>
                        <Person></Person>
                        <Totalsummary></Totalsummary>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;