import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "../form/Form.css";
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

<section className="wrapper d-flex justify-content-center align-items-center">
        <div className="container ps-lg-5 ">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-4 col-xl-4 offset-xll-4 text-center">
            <h1 className="text-center mt-5 fw-bold mb-3">Add User</h1>

            <form onSubmit={handleSubmit} name="suForm" className="rounded bg-white shadow p-5 mt-5">
              {/* <h3 className="text-dark fw-bolder fs-4 mb-2">Fill all Fields</h3> */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="floatingLastName"
                  placeholder="Name"
                  required onChange={handleChange}
                />
                <label for="floatingLastName"> Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="age"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Age"
                  required onChange={handleChange}
                />
                <label for="floatingInput">Age</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="User Name"
                  required onChange={handleChange}
                />
                <label for="floatingPassword">User Name</label>
              </div>

              <button
                type="submit"
                className="btn btn-success submit_btn w-75 my-3"
              >
                {/* <i className="fas fa-user-plus p-2"></i> */}
                ADD USER
              </button>
            
                

            </form>
          </div>
        </div>
      </section>
              {/* </span> */}
    </>


  );
};

export default Form


