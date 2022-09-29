import React, { useState } from 'react';
import './Item.css';

const Item = ({plays,item,setPlays}) => {
    // console.log(props.item);
    
    const {id,category,time,img,des} = item;
    // console.log(plays);
    // const {btn} = props;
    // console.log(btn);
    // const {btn} = props.item;
    // const addTime = (time) => {
    //     console.log( time);
    // }
    // console.log(btn)
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2>{category}</h2>
            <p>Description : {des}</p>
            <p>Time : {time}</p>
            <p>ID:{id}</p>
            <button onClick={()=>setPlays(plays + time)}>CLick</button>
        </div>
    );
};
export default Item;