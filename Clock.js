import React, { useState,useEffect } from 'react'

const Clock = () => {
const [time,setTime]=useState("");
useEffect(() => {


    const ShowTime = ()=>{
 
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session ="Am";

        if(h==0){
            h=12;
            session ="Am"
        }
        if(h > 12){
            h=h-12;
            session="pm";
        }

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;


        setTime(`${h}:${m}:${s}: ${session}`);

    }
    const interval = setInterval(ShowTime,1000);
 
  
  return () => clearInterval(interval);
    }, [])

    return (
   <>
   
<div className='clock'>
    <div id="Digitalclock">{time}</div>

</div>
   
   
   </>
  )
}

export default Clock