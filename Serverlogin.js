import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap'

  const Serverlogin = () => {
  const [email,setemail]  =useState(null)
  const [password,setpassword] =useState(null)



  const Loginuser = async() => {


  const data = new FormData()
   data.append("email",email)
   data.append("password",password)
  const response = await axios.post("https://manojkoravangi.com/login.php",data,{Headers:{'content-type':'multipart/form-data'}})

    if(response){
      console.log(response.data)
      if(response.data.status==='success'){
        localStorage.setItem("user_data",JSON.stringify(response.data.data))
        window.location.replace('/account')
        setdisplay(true)

      }
      else{
        setdisplay(false)
      }
      }
    }
    const[display,setdisplay] = useState(false)
  return (
    <>
    <div>
       <Modal show={display} onHide={()=>setdisplay(false)}>
       <Modal.Body>
       <h4>Invalid credentials</h4>
       </Modal.Body>
        </Modal>
        <div className='col-lg-4 mx-auto p-3'>
        <input  placeholder="Enter your email" onChange= {(event)=> setemail(event.target.value)}></input>
        <input  placeholder="Enter your password" onChange= {(event)=> setpassword(event.target.value)}></input>
      
       <button className=',btn btn-warning w-100 m-3' onClick={Loginuser}>add</button>
    </div>
   </div>
   </>
  )

}

export default Serverlogin
