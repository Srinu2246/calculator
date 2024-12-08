import axios from 'axios'
import React, { useState } from 'react'



const Cart = () => {
const [user_id,setuser_id] = useState(null)
const [product_id,setproduct_id] =useState(null)
const [quantity,setquantity ] =useState(null)

    const items =async()=>{
        const data=new FormData()
        data.append("user_id",user_id)
        data.append("product_id",product_id)
        data.append("quantity",quantity)
        const response = await axios.post("https://manojkoravangi.com/amazonapi/insert-cart.php",data,{Headers:{'content-type':'multipart/dataform'}})
        if(response.data){
            console.log(response.data)
            
        }
      
        localStorage.setItem('user',JSON.stringify('response.data'))
        
    }
  return (

   <div className='col-lg-4  mx-auto justify-content-center'>
    <input type="text" onChange={(event)=>(event.target.value)}  placeholder="user_id"/><br></br>
   <input type='tel' onChange={(event)=>(event.target.value)} placeholder='products_id'/><br></br>
   <input type='text' onChange={(event)=>(event.target.value)} placeholder='quantity'/><br></br>

   <button className='btn btn-primary' onClick={items}>Add to Cart</button>

   </div>
   


  )
}

export default Cart