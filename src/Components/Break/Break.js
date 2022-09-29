import React, { useEffect, useState } from 'react';
import './Break.css'

const Break = () => {

    const [items , setItems] = useState;
    const [exTime , setExTime] = useState(0);
    const [breakTime, setBreakTime] = useState();


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
        .then(data => setItems(data))
    },[])
    return (
        <div className="break">
                     <button onClick={()=>handleBreakTime(10)}>10s</button>
                    <button onClick={()=>handleBreakTime(20)}>20s</button>
                    <button onClick={()=>handleBreakTime(30)}>30s</button>
                    <button onClick={()=>handleBreakTime(40)}>40s</button>
                    <button onClick={()=>handleBreakTime(50)}>50s</button>
        </div>
    );
};

export default Break;


