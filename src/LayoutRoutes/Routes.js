import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Logout from '../components/Logout/Logout'
import Productdetails from '../components/Productdetails/Productdetails'


function RoutesLayout() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Logout' element={<Logout/>}/>
<Route path='/product/:id' element={<Productdetails/>}/>


    </Routes>
    <Footer/>
   </Router>
   
   </>
  )
}

export default  RoutesLayout
