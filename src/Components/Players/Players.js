import React from 'react';
import Singleplay from '../SinglePlay/Singleplay';
import './Players.css'

import './Players.css'
const Players = ({players}) => {
    console.log(players);
    return (
        <div>
           <div className='single'>
           {
           players.map(singleplay => <Singleplay
             key={singleplay.id}
             singleplay={singleplay}
             ></Singleplay>)
           }
           </div>
        </div>
    );
};

export default Players;