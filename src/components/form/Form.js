import React,{useEffect,useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../form/Form.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import User from '../list/User';

const Form = () => {
  const navigate = useNavigate();
  const [documents,setDocuments] = useState([]);
  const [state,setState] = useState({

  }); 

  const URL = "http://localhost:8000"
 
const handleChange = (e) => {

const name = e.target.name;
const value = e.target.value;

setState((s)=>({...s, [name]: value}));

}

const handleSubmit = (e) => {
  e.preventDefault();
  let userData = {...state} ;
  console.log(userData);

  axios.post(`${URL}/createUser`,userData)
  .then(()=>{
    console.log("User has been successfully added");
  })
  .catch((err)=>{
    console.log("err", err);
  })

};

useEffect(() => {

axios.get(`${URL}/getUsers`,)
.then((res)=>{
  // console.log(res.data);
    setDocuments(res.data);
})
.catch((err)=>{
  console.log("err",err);
})
}, []);

  return (
    <>
      
       <center>
      <div className="container">
        <header>
          <h1 className='text-white' >INFORMATION</h1>
        </header>
        <hr className="line" />
        <main>
          <section>
            <form onSubmit={handleSubmit}>
             <label    >Name</label>
              <input type="text" name = "name"  id="name-field" className="form-control" placeholder="Enter your name" onChange={handleChange} required/>
              <br/>
              <label >Age</label>
              <input type="text" name = "age" id="password-field" className='form-control' placeholder="Enter your age" onChange={handleChange} required />
              <br/>
              <label  >User Name</label>
              <input type="text" name = "userName"  id="password-field"  className='form-control' placeholder="Enter your username" onChange={handleChange} required />
              <br/>
                <input type="submit" value="Add User" className="login-button mx-auto"/>
            </form>
            <div className="btn btn-primary m-3" onClick={()=>{navigate("/")}}>  Home</div>
        
          </section>
        </main>  
      </div>
    </center>
    </>
  
 
  );
};

export default Form