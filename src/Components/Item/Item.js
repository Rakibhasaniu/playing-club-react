import React, { useState } from 'react';
import './Item.css';

const Item = ({plays,item,setPlays}) => {

    const {id,category,time,img,des} = item;

    
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2>Name:{category}</h2>
            <p>Description : {des}</p>
            <p>Time : {time}</p>
           
            <button onClick={()=>setPlays(plays + time)}>CLick</button>
        </div>
    );
};
export default Item;