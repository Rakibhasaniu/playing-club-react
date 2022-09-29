import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
import Swal from 'sweetalert2'

const Items = () => {

    
    const [items , setItems] = useState([]);
    // const [exTime , setExTime] = useState(0);
    const [plays, setPlays] = useState(0);
    const [times, setTimes] = useState(0);
    const [breakTime, setBreakTime] = useState();
    console.log(plays);


    const handleBreakTime = selectedBreakTime => {
        localStorage.setItem("Break-Time", selectedBreakTime);
        setBreakTime(selectedBreakTime);
    };

    useEffect(() => {
        const getBreakTime = localStorage.getItem("Break-Time");
        setBreakTime(getBreakTime);
    }, []);


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        // .then(data => setItems(data))
        .then(data => setItems(data))
    },[])

    
    

    const completeBtn = () =>{
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
 
    

    return (
        <div className='container'>
           
            { <div className='all-items'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        setPlays={setPlays}
                        plays={plays}
                        >
                        </Item>)      
                }
            </div> }
            <div className='cart'>
              <div className='info'>
                {/* <img src="WhatsApp Image 2022-09-29 at 2.05.18 AM.jpeg" alt="" /> */}
                <div>
                    <p>Rakib hasan</p>
                    <p>Dupchancia,Bogura</p>
                </div>
              </div>

              <div className='more-info'>
                <div>
                  <p>Weight</p>
                  <p>53kg</p>
                </div>
                <div>
                  <p>Height</p>
                  <p>5.7 feet</p>
                </div>
                <div>
                  <p>Age</p>
                  <p>23yrs</p>
                </div>
              </div>

              <hr />

              <div className='break'>
                <h2>Add a break</h2>
                <div className='btn'>
                    <button onClick={()=>handleBreakTime(5)}>5m</button>
                    <button onClick={()=>handleBreakTime(6)}>6m</button>
                    <button onClick={()=>handleBreakTime(8)}>8m</button>
                    <button onClick={()=>handleBreakTime(10)}>10m</button>
                    <button onClick={()=>handleBreakTime(12)}>12m</button>
                </div>
              </div>

              <hr />
               <div className='Ex-details'>
                 <h2>Exercise Details</h2>
                 <div className='time'>
                    <h2>Time Required</h2>
                    <p>{plays} Min</p>
                 </div>
                 <div className="break-time">
                    <h2>Break Time</h2>
                    <p>{breakTime} min</p>
                 </div>
               </div>

               <hr />

               <div>
                 <button  onClick={completeBtn} className='com-btn'>Completed</button>
               </div>
            </div>
        </div>
      
    );
};

export default Items;
