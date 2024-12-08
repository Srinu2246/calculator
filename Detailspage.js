import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detailspage = () => {
  const {product_id} = useParams();


const[product_data,setProductdata]=useState(null)   


  const Getproductdetails = async () => {
    const data = new FormData();
    data.append("product_id",product_id);

    const response = await axios.post("https://manojkoravangi.com/amazonapi/get-product-details.php", data,{ headers: { 'Content-Type': 'multipart/form-data' } } 
    );

    if (response && response.data) {
      console.log(response.data);
      console.log(response.data.data)
      setProductdata(response.data.data);
      console.log(product_data);
    }
  };

  useEffect(() => {
    Getproductdetails();
  }, [product_id]); 

  return (
    <>
   {product_data?<>
    <h2>{product_data.brand}</h2>
   <h4>{product_data.name}</h4>
   <img  className='w-50'src={product_data.images} ></img>
   <h3>{product_data.price}</h3>
   </> :
   
   <>
   
   <p>loading....</p>
   </>}
    






    </>
  )
}


export default Detailspage