import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const[ setProduct] = useState(null)


  

    const Product =async()=> {
      const data=new FormData()
      const Response = await axios.post('https://manojkoravangi.com/amazonapi/get-products.php' ,data,{Headers:{'content-type':'multipart/form-data'}})
  
  }
  
  
  
     if(Response){
        
         console.log(Response.data.data)
         
         if(Response.data.data){
             
           console.log(Response.data.data)
           setProduct(Response.data.data)
     }else{
         setProduct(false)
     }
  }
 useEffect(()=>{
  Product();
 },[])
      return (
        <div>
      
          {Product?
          <>
          <div className=' d-flex flex-wrap '>
          {Product.map((element)=>(
           <>
           <div className='col-lg-3 p-3 mx-2 border '>
            <img  className='w-50'src={element.images} ></img>
           
            </div>
          
            </>
          ))}
        </div>
          </>:
          <>
          </>
          
  
        
        }
        </div>
  
      )
    }
  


export default Product
