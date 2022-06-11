import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../navbar/Navbar'
import {useNavigate} from "react-router-dom";
const UserScreen = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    
    <div className="btn btn-primary btn-lg m-5 " onClick={()=> {navigate("/adduser")}}>Add User</div>  
    </>
  )
}

export default UserScreen