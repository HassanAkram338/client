import React from 'react'
import "./UserScreen.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../navbar/Navbar'
import {useNavigate} from "react-router-dom";
import User from '../list/User';
// import Footer from '../footer/Footer';
const UserScreen = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    
    <div className='btn button position-fixed bottom-0 end-0  mb-4 me-2   ' style={{color : "#fca311", zIndex :"1"}} onClick={()=> {navigate("/adduser")}}>   <i className="fa-solid fa-circle-plus fa-4x"></i></div>
   

        <User />
    

    {/* <Footer /> */}
    </>
  )
}

export default UserScreen