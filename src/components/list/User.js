import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';
import "./User.css"
import "../form/Form"



const User = () => {


  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [documents, setDocuments] = useState([]);
  const [state, setState] = useState({});

  const URL = "http://localhost:8000";



  const handleUpdate = (doc) => {
    console.log(doc);
    // navigate("/addUser");
    const { name, age, userName } = state

    let newData = { id: doc._id, name, age, userName };


    axios.put(`${URL}/updateUser`, newData)
      .then((res) => {

        toast.success('User has been updated!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      })
      .catch(err => {

        toast.error(err, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      // .finally(() => {
      //   setState({})
      // })
  };

  const handleUpdateSubmission = (e) => {
    e.preventDefault();
    setState(...state)

  };

  const handleUpdateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((s) => ({ ...s, [name]: value }));

  }


  const handleDelete = (doc) => {
    console.log(doc);
    const { _id } = doc;

    axios.delete(`${URL}/deleteUser/${_id}`)
      .then((res) => {
        // console.log("user has been deleted",res.data);
        toast.success('User has been deleted!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        let newArray = documents.filter((doc, i) => {
          return _id !== doc._id

          // console.log(doc._id);
          // console.log(documents._id);
        })
        // console.log(newArray);

        setDocuments(newArray);

      })
      .catch((err) => {
        console.log(err);
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
      .finally(() => {
        console.log("Working");

      })
  }
  useEffect(() => {

    axios.get(`${URL}/getUsers`)
      .then(
        (res) => {
          // console.log(res.data);
          setDocuments(res.data);
          setIsLoading(false);


        }
      )
      .catch((err) => {
        console.error(err)
      })

  }, [documents]);

  return (
    <>
      {/* <Navbar /> */}

      {isLoading ?
        <div className="container d-flex align-items-center justify-content-center mt-5">
          <div className="row d-flex flex-direction-column">
            <div className="col ">
              <ThreeDots color="#00BFFF" height={80} width={80} />

            </div>
          </div>
        </div> :
        <>

          <div className="container offset-lg-2">
            <div className="row">
              <div className="col m-5">
                <table className="table  text-dark mt-3 table-sm w-75">
                  <thead>
                    <tr className='text-center'>
                      <th>Name</th>
                      <th >Age</th>
                      <th >User Name</th>
                      <th >Modify</th>

                    </tr>
                  </thead>

                  {documents.map((doc, i) => {
                    return <tbody className="table-group-divider align-middle text-center " id='hover-effect' key={i}>
                      <tr>
                        <td>{doc.name}</td>
                        <td>{doc.age}</td>
                        <td>{doc.userName}</td>
                        <td>

                          <div className=" d-flex flex-column">


                            {/* Update Modal     */}
                            <button type="button" className="btn text-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i className="fa-solid fa-pen"></i>
                            </button>


                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body">
                                    <form onSubmit={handleUpdateSubmission} >
                                      <div className="mb-3">
                                        <p className='text-start mb-2'>Name</p>
                                        <input type="text" className="form-control" name='name' onChange={handleUpdateChange} placeholder="Name" required />
                                      </div>
                                      <div className="mb-3">
                                        <p className='text-start mb-2'>Age</p>
                                        <input type="number" className="form-control" name='age' onChange={handleUpdateChange} placeholder="Age" required />
                                      </div>
                                      <div className="mb-3">
                                        <p className='text-start mb-2'> User Name</p>
                                        <input type="text" className="form-control" name='userName' onChange={handleUpdateChange} placeholder="User Name" required />
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => { handleUpdate(doc) }}>Update</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Deletet Modal */}
                            <button type="button" className="btn text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                              <i className="fa-solid fa-trash fa-1x"></i>
                            </button>
                          </div>

                          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="staticBackdropLabel">Alert</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                  Are you sure you want to delete?
                                </div>
                                <div className="modal-footer">

                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { handleDelete(doc) }}>Delete</button>
                                </div>
                              </div>
                            </div>
                          </div>


                        </td>
                      </tr>
                    </tbody>

                  })}



                </table>
              </div>
            </div>
          </div>
        </>
      }




    </>
  )
}

export default User