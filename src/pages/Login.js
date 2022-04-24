import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  "./Login.css"
import blogImg  from "../assets/blok.png"
import { useState } from 'react'
import google from "../assets/google.png"

const Login = () => {

const [email, setEmail] = useState()
const [password, setPassword] = useState()

const handleSubmit = (e)=>{
  e.preventDefault()
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
    <input type="email"   className="form-control mt-5 mb-4"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
  </div>
  <div class="mb-3">
   
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
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






















// import blogImg  from "../assets/blok.png"
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import  "./Login.css"

// const Login = () => {
//   return (
//       <div className='container'>
//     <div className='loginCard'>
//         <img src={blogImg} alt="" />
//         <h3>LOGIN</h3>
//         <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Email" variant="outlined" required />
//       <TextField id="outlined-basic" label="Password" variant="outlined" required />
//       </Box>
//       <Stack spacing={2} direction="row">
  
//       <Button variant="contained">Login</Button>
//       <Button variant="contained">With Google</Button>
//         </Stack>



//      </div>
//     </div>
//   )
// }

// export default Login