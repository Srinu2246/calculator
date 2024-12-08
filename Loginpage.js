import axios from 'axios'
import React, { useState } from 'react'

const Loginpage = () => {


  const[number,setnumber]=useState()
  const[password,setpassword]=useState()
  const productdata = async()=>{

    const data=new FormData()
    data.append('phone_number',number)
    data.append('password',password)

    const response=await axios.post("https://manojkoravangi.com/amazonapi/Select_user.php",data,{Headers:{'content-type':'multipart/dataform'}})
    if(response.data)
    {
      console.log(response.data)
      localStorage.getItem("user",JSON.stringify(response.data))
      
    }else{

    }
   
  }
  return (
    <div>
<>

<div className='d-flex flex-wrap p-2 justify-content-center'>
        
        <input  type='tel' id='phone' placeholder='enter your number' onChange={(event)=>setnumber(event.target.value)}/>
        <input  type ='text' name='password' placeholder='enter your password' onChange={(event)=>setpassword(event.target.value)}/>
        <button className="btn-btn-success from-control" onClick={productdata}>Add</button>











      </div>
      

</>

    </div>
  )
}

export default Loginpage