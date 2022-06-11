import React from 'react'
import {useNavigate,Link} from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
   <div className="row">
       <div className="col">
       <nav className="navbar navbar-expand-lg py-4 navbar-dark" style={{backgroundColor : "#14213d"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{cursor : "pointer"}} onClick={()=>{navigate("/")}}>Mongo DB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="row d-flex justify-content-end">
          <div className="col ">
          <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{cursor : "pointer"}} onClick={()=>{navigate("/")}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{cursor : "pointer"}} onClick={()=>{navigate("/adduser")}}>Add Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{cursor : "pointer"}} onClick={()=>{navigate("/list")}}>List</a>
        </li>
       
        
      </ul>
          </div>
      </div>
    </div>
  </div>
</nav>
       </div>
   </div>
    </>
  )
}

export default Navbar