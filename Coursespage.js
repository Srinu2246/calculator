import React from 'react'
import { useState } from 'react'
import axios from 'axios'



const Coursespage = () => {
    const [courseslist,setcourseslist]=useState(null)
    const [limit,setlimit]= useState(200)



    
    const courselogin= async({mode})=>{
   
        const data = new FormData()
        data.append("limit",limit)
         data.append("mode",mode)
       
        
        const response = await axios.post("https://skillsuprise.com/get-courses.php",data,{headers:{"content-type":"multipart/form-data"}})


        if(response){
            setcourseslist(response.data.data)
        
        }


    }
    return (

 


        
    <div>
        <div className='justify-content-center py-3'>
            <button onClick={()=>setlimit(10)}>10</button>
             <button onClick={()=>setlimit(5)}>5</button>
                <hr></hr>
        </div>
        <button onClick={()=>courselogin({mode:"offline"})}>offline courses</button>
        <button onClick={()=>courselogin({mode:"live"})}>online courses</button>
        <button onClick={()=>courselogin({mode:"specialization"})}>specialization courses</button>
        <button onClick={()=>courselogin({mode:"selfpaced"})}>selfpaced courses</button>
        <hr></hr>
        <div className='d-flex flex-wrap '>
  
       
   
    <>
    {courseslist?.map((data) =>{
        <p>{data.course_title}</p>
    
    })}
    
    </>

    
    </div>
    
  
  </div>









        

    )
}

export default Coursespage