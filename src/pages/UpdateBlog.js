import React, { useContext, useState } from 'react'
import {Box, Stack,TextareaAutosize, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';
import blogImg  from "../assets/blok.png"
import { AddContent } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { BlogContext } from '../contexts/BlogContext';
import { EditBlog } from '../helpers/firebase';


const UpdateBlog = () => {

  const [title, setTitle] = useState()
  const [imageUrl, setImageUrl]= useState()
  const [content, setContent]= useState()
  const navigate = useNavigate()
 const {currentUser} = useContext(AuthContext)
 const {detail, setDetail}   = useContext(BlogContext)

const handleFormSubmit = (e)=>{
      e.preventDefault()
    if(detail.id){
      EditBlog(detail) 
      // setDetail(id.detail, title.detail, image.detail, content.detail, date.detail, email.detail)

    }else{
      AddContent(title, imageUrl, content,  new Date().toLocaleString("tr-TR"), currentUser.email)
    }
      navigate("/dashboard")
}


// const handleFormSubmit = (e)=>{
//   e.preventDefault();
//   if(detail.id){
//     setUpdate(false)
//     EditBlog(detail)
    
//   }
// else{
//   AddContent(detail)
// }
// }

  return (
          <div  style={{backgroundImage: "url(https://picsum.photos/1600/900/)", backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"93vh", marginTop:"0px", padding:"40px"}}>
        
          <div style={{ border:"solid white", width:"60ch", margin:"auto", backgroundColor:"white", borderRadius:"10px"}}>
          <img style={{margin:"30px"}} className='imgBlog' src={blogImg} alt="" />
        <h2 style={{margin:"10px", fontFamily: "'Girassol', cursive"}}> ── Update Blog    ── </h2>
       <Box style={{backgroundColor:"white", padding:"20px"}} >
       
           <form onSubmit={handleFormSubmit}>
           <Stack direction="column" textAlign="center" justifyContent="center"
            alignItems="center">

           <TextField id="outlined-basic" label="Title" variant="outlined" sx={{ m: 1, width: '50ch'}} required onChange={(e)=>setTitle(e.target.value)}
           value={detail.title}
           />

           <TextField id="outlined-basic" label="Image URL" variant="outlined" required sx={{ m:1, width: '50ch'}} onChange={(e)=>setImageUrl(e.target.value)}
           value={detail.image}
           />

           <TextareaAutosize
               aria-label="minimum height"
               minRows={8}
               placeholder="Content" required
               style={{ width: '50ch', m:2 }}
               onChange={(e)=>setContent(e.target.value)}
               value={detail.content}
            />

        <Button type="submit" variant="contained" sx={{ m:3, width: '55ch'}}>UPDATE</Button>

             </Stack>
            </form>
           </Box>
          </div>
        </div>
  )
}

export default UpdateBlog