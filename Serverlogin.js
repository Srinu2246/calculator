import { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'




const Serverlogin = () => {
  const [email,setemail]=useState(null)
  const [password,setpassword]=useState(null)
  const [Displayed,setDisplayed] = useState(false)


  const userlogin =async () => {
    const data=new FormData()
    data.append("email",email)
    data.append("password",password)
    const response = await axios.post("https://manojkoravangi.com/login.php",data,{headers:{'content-type':'multipart/form-data'}})
   
   
    if(response){
      console.log(response.data.data)
      if(response.data.status==='success'){
        setDisplayed(true)
        localStorage.setItem("user_id", JSON.stringify(response.data.data))  
   
        
      }else{
        setDisplayed(false)
      }
      

    }
  }

  return (
  
  <div>
   

      <Modal show={Displayed} onHide={()=>setDisplayed(false)}>
      <Modal.Body>
      <h1>invalid creditionals</h1>
      </Modal.Body>
      </Modal>
      <div className='col-lg-4 mx-auto p-3'>
        <input  placeholder="Enter your email" onChange= {(event)=>setemail(event.target.value)}></input>
        <input  placeholder="Enter your password" onChange= {(event)=>setpassword(event.target.value)}></input>
      
       <button className='btn btn-success w-100 m-3' onClick={userlogin}>add</button>
    </div>
 
  </div>
  
   
  )
}

export default Serverlogin