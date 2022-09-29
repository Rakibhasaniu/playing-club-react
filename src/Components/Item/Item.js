import React from 'react';
import './Item.css';

const Item = (props) => {
    // console.log(props.item);
    const {category,time,img,des} = props.item;
    const {btn} = props;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2>{category}</h2>
            <p>days of week : {des}</p>
            <p>Time : {time}s</p>
            <button onClick={()=>btn(props.item.time)}>Add to List</button>
        </div>
    );
};
export default Item;