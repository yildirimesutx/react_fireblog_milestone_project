import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from "../pages/Dashboard"
import NewBlog from '../pages/NewBlog'
import Details from '../pages/Details'
import UpdateBlog from '../pages/UpdateBlog'


const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/logout' element={<Login/>}/>
              <Route path='/new' element={<NewBlog/>}/>
              <Route path='/details' element={<Details/>}/>
              <Route path='/update' element={<UpdateBlog/>}/>
          </Routes>
    </Router>
  )
}

export default AppRouter