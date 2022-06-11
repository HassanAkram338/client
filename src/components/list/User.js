import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from '../navbar/Navbar'
import "./User.css"
import "../form/Form"
const User = () => {
const [documents,setDocuments] = useState([]); 
const URL = "http://localhost:8000";

const handleUpdate = (doc) => {
    console.log(doc);
    let newData = { id : doc._id, name : "Moaz", age : "20", userName : "itx-Moaz"};
  
  
    axios.put(`${URL}/updateUser`,newData)
  .then((res)=>{console.log("message from server", res.data);})
  .catch(err =>{console.error("error",err)})
}

const handleDelete = (doc) => {
console.log(doc);
const {_id} = doc;

axios.delete(`${URL}/deleteUser/${_id}`)
.then((res)=>{
  console.log("user has been deleted",res.data);
})
.catch((err)=>{console.log(err);})
.finally(()=>{
  console.log("Working");
})
}
  useEffect(() => {
    
    axios.get(`${URL}/getUsers`)
    .then(
      (res) =>{
        // console.log(res.data);
        setDocuments(res.data);
      }
    )
    .catch((err)=>{
      console.error(err)
    })

  }, []);  

  return (
    <>
    <Navbar />
    
    <div className="row">
      <div className="col m-5">
      <table className="table text-dark mt-3 table-sm">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">User Name</th>
      <th scope="col">Modify</th>
      
    </tr>
  </thead>

{documents.map((doc,i)=>{
  return <tbody className="table-group-divider" key = {i}>
  <tr>
    
    <td>{doc.name}</td>
    <td>{doc.age}</td>
    <td>{doc.userName}</td>
    <td>
      <div className="row">
        <div className="col ">
          <div className="btn btn-primary me-3" onClick={()=>{handleUpdate(doc)}}>Update</div>
          <div className="btn btn-danger" onClick={()=>{handleDelete(doc)}}>Delete</div>
        </div>
      </div>
    </td>
  </tr>
  

</tbody>

})}  

 

</table>
      </div>
    </div>
    
    </>
  )
}

export default User