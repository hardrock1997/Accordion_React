import './Accordion.css';
import {accordionData} from './data.js';
import { useState} from 'react';
export default function Accordion() {
    const [data,setData]=useState(accordionData);

    function handleClick(id) {
        const accordionData=data.map((d)=>{
            if(d.id===id) {
                d.open=!d.open;
            }
            else {
                d.open=false;
            }
            return d;
        })
        setData(accordionData)
        
    }

    return (
        <div className='main_container'>
         

            {
            accordionData.map((data)=>{
                return (
                <div key={data.id} className='container'>
                <div className='title' onClick={()=>handleClick(data.id)}>
                    <p>{data.title}</p>
                    <span>+</span>
                </div>
               {data.open && <p>{data.description}</p>}
                </div>
                
                )
            })}
        </div>
    )
}