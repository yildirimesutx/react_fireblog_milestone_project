import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from "../pages/Dashboard"
import NewBlog from '../pages/NewBlog'


const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
          <Routes>
              <Route path='/' element={<BlogForm/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/logout' element={<Login/>}/>
              <Route path='/new' element={<NewBlog/>}/>
          </Routes>
    </Router>
  )
}

export default AppRouter