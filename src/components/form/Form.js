import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "../form/Form.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import User from '../list/User';

const Form = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [state, setState] = useState({
  });

  const URL = "http://localhost:8000"

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setState((s) => ({ ...s, [name]: value }));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = { ...state };
    console.log(userData);

    axios.post(`${URL}/createUser`, userData)
      .then(() => {
        // console.log("User has been successfully added");
        toast.success('User has been successfully added!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/")
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })

  };

  useEffect(() => {

    axios.get(`${URL}/getUsers`,)
      .then((res) => {
        // console.log(res.data);
        setDocuments(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
  }, []);

  return (
    <>

      <center>
        <div className="container-1">
          <header>
            <h1 className='text-white' >INFORMATION</h1>
          </header>
          <hr className="line" />
          <main>
            <section>
              <form onSubmit={handleSubmit}>
                <label    >Name</label>
                <input type="text" name="name" id="name-field" className="form-control" placeholder="Enter your name" onChange={handleChange} required />
                <br />
                <label >Age</label>
                <input type="text" name="age" id="password-field" className='form-control' placeholder="Enter your age" onChange={handleChange} required />
                <br />
                <label  >User Name</label>
                <input type="text" name="userName" id="password-field" className='form-control' placeholder="Enter your username" onChange={handleChange} required />
                <br />
                <input type="submit" value="Add User" className="login-button mx-auto mb-4" />
              </form>
              {/* <div className="btn btn-primary m-3" onClick={() => { navigate("/") }}>  Home</div> */}

            </section>
          </main>
        </div>
      </center>
    </>


  );
};

export default Form




// <form onSubmit={handleUpdateSubmission}>
// <label className='me-3'>Name</label>
// <input type="text" className=''  name="name" placeholder='Name' onChange={handleUpdateChange} required/> <br /><br />
// <label className='me-4 '>Age</label>
// <input type="number" name="age" placeholder='Age' onChange={handleUpdateChange} required/> <br /> <br />
// <label className='me-1'>User Name</label>
// <input type="text" className='' name="userName" placeholder='User Name' onChange={handleUpdateChange}  required/> <br /> <br />
// </form> 