import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  "./Login.css"
import blogImg  from "../assets/blok.png"
import { useState } from 'react'
import google from "../assets/google.png"
import { signInAnonymously } from 'firebase/auth'
import { signIn } from '../helpers/firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e)=>{
  e.preventDefault()
  signIn(email, password, navigate)
}

const handleLogin = ()=>{
  
}

return (
  <div className='main'>
    <div className='container'>
   <div className='loginCard'>    
   <img className='imgBlog' src={blogImg} alt="" />

   <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <input type="email"   className="form-control mt-5 mb-4"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
   
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  <input
            type="submit"
            className="btn btn-primary form-control mt-5"
            value="Login"
            
            // onSubmit={handleSubmit}
          />

</form>

<button className='btn btn-primary form-control mt-3'>Continue with Google</button>

</div> 
</div>
</div>
)
}
export default Login
