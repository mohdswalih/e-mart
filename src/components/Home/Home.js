import { useState,useEffect } from 'react'
import React from 'react'
import './Home.css'
import { GetAllProducts } from '../../ApiService/api'
import { Link } from 'react-router-dom'

function Home() {
    const [products, setProducts] = useState([])
useEffect(() => {
const fetchProducts= async ()=>{
  const data=await GetAllProducts()
  // console.log(data,"thewerr")
  setProducts(data)
}
fetchProducts()
}, [])


  return (
    <div className='grid'>
      {
        products.map((Product)=>(
<div className='product' key={Product.id}>
<img src={Product.image} alt='alternative'/>
<h2>{Product.title}</h2>
<p>
    <span className='price'>${Product.price}</span>
    </p>
    <Link to={`/product/${Product.id}`}>    
    <button>Product Details</button>

</Link>
</div>
        ))
      }

      
    </div>
  )
}

export default Home
