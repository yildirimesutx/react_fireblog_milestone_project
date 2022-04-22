import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import Navbar from '../components/Navbar'


const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
          <Routes>
              <Route path='/' element={<BlogForm/>}/>
          </Routes>
    </Router>
  )
}

export default AppRouter