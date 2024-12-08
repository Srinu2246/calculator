import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const [key,setKey]=useState(null)
    const [mapping,setmapping] =useState(null)
  

    const searchlogin = async() =>{
        const data=new FormData()
        data.append("key",key)
        data.append("category",'courses')
        data.append("limit",9)
        const response = await axios.post("https://skillsuprise.com/basic-search.php",data,{headers:{'content-type':'multipart/form-data'}})

        if(response){
          console.log(response.data)
          setmapping(response.data.data)
          

        }
   
    }
  return (
    <>
    <div>
      <input value={key} onChange={(e)=>{setKey(e.target.value);searchlogin()}}placeholder='search your courses' type="search"  className='Form-control'></input>
      
      <button onClick={searchlogin} className='btn btn-success w-50'>search</button>
    
     {mapping? 
     <>
      <div className='d-flex flex-wrap mt-1'>
     {mapping.map((element)=>(
     
     <div className=' col-lg-3 shadow'>
          <div className='m-3 '>
          <img src={element.course_cover_url} className="w-100"></img>
          <p>{element.course_title}</p>
       
        </div>
       </div>
     
     

    ) )}
     
     </div>
     
     </> :
     <></>
     
    
    }


      
    
   </div>
        
      
      </>
      
      
  )   
    

}


export default Search