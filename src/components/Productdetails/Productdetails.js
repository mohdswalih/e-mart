import React, { useEffect,useState } from 'react'
import { GetProductId } from '../../ApiService/api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Productdetails.css'
import Swal from 'sweetalert2'

function Productdetails() {

    const{id}= useParams()
    const [productdetails, setProductdetails] = useState([])
useEffect(() => {
  const fetchProductdetails=async()=>{
    const data =await GetProductId(id)
    setProductdetails(data)
  }

 fetchProductdetails()
},
 [id])
const handleBuynow=()=>{
    // window.confirm("the product is out of stock")
    Swal.fire({
        // title: 'Error!',
        text: 'The product is out of stock',
        icon: 'info',
        confirmButtonText: 'Ok'
      })
}



  return (
    <div>
       <div className='Details-container'>
{/* <img src={Productdetails.image} alt='image' /> */}
<img src={productdetails.image} alt='alternative' className='img'/>

<div className='info'>
    <h2 className='title'>{productdetails.title}</h2>
    <p className='description'>{productdetails.description}</p>
    <p className='prices'>{productdetails.price}</p>
    <button className='Buynow' onClick={handleBuynow}>BuyNow</button>
    <Link to='/'>
    <button className='home'>Go back to Home</button>

    </Link>

    </div>      
    </div>
    </div>
  )
}

export default Productdetails
