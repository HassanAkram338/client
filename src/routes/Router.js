import React from 'react'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Form from '../components/form/Form';
import UserScreen from '../components/userscreen/UserScreen';
import User from "../components/list/User"
const Router = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' exact element = {<UserScreen />}/>
  <Route path='/adduser' exact element = {<Form />}/>
  <Route path='/list' exact element = {<User/>} /> 
</Routes>
</BrowserRouter>
    </>
  )
}

export default Router