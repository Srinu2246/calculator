
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';


const Signuppage = () => {
  const [email,setemail] =useState(null)
  const [password,setpassword]=useState(null)
  const [username,setusername] =useState(null)
  const [first_name,setfirst_name] =useState(null)
  const [last_name,setlast_name] =useState(null)
  const [address,setaddress] =useState(null)
  const [phone_number,setphone_number] =useState(null)
  const [button,setbutton] =useState()

  const signin = async() => {
    const data=new FormData()
    data.append('username',username)
    data.append('email',email)
    data.append('password',password)
    data.append('first_name',first_name)
    data.append('last_name',last_name)
    data.append('address',address)
    data.append('phone_number',phone_number)
    const response = await axios.post("https://manojkoravangi.com/amazonapi/insertuserdata.php",data,{Headers:{'content-type':'multipart/form-data'}})

    if(response){
      console.log(response.data)
      
      localStorage.getItem('user',JSON.stringify('response.data'))
       
      
     
    }else{
     
    }


  }

  return (
    <div className=' col-sm-2 flex-wrap justify-content-center mx-auto p-3 align-items-center'>
    <input type="text"  name="username:" onChange={(event)=>setusername(event.target.value)} placeholder="username"/><br></br>
    <input type='tel' id='phone:' onChange={(event)=>setphone_number(event.target.value)} placeholder='phonenumber'/><br></br>
    <input type="text"  name="password:" onChange={(event)=>setpassword(event.target.value)} placeholder="password"/><br></br>
    <input type="text"  name="first_name:" onChange={(event)=>setfirst_name(event.target.value)} placeholder="first_name"/><br></br>
    <input type="text"  name="last_name:" onChange={(event)=>setlast_name(event.target.value)} placeholder="last_name"/><br></br>
    <input type="text"  name="address:" onChange={(event)=>setaddress(event.target.value)} placeholder="address"/><br></br>
    <input type="text"  name="email:" onChange={(event)=>setemail(event.target.value)} placeholder="email"/><br></br>

    < button className='Form-control btn btn-primary' onClick={signin}>Signup</button>
   </div>

            

   

  )
}

export default Signuppage

































