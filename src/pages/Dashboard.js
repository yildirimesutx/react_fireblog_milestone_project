import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import NewBlog from './NewBlog';
import {  useFunc } from '../helpers/firebase';
import loading from "../assets/loading.gif"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { AccountCircle } from "@mui/icons-material";
import { BlogContext } from "../contexts/BlogContext";
// import {ChatBubbleOutlineOutlinedIcon} from "@mui/icons-material";
// import IconButton from '@mui/material/IconButton';
// import {email} from    "../pages/Login"



const Dashboard = () => {

  const {isLoading, contentCard} = useFunc()
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);

  const {setDetail} = useContext(BlogContext)
  console.log(contentCard);

  const handleDetails =(id, title, image, content)=>{
      setDetail({id, title, image, content})
      navigate("/details")
  }



  return (
    <div className='das_main'>
      <h1 style={{color:"white"}}> ──  Dashboard  ── </h1>
      <div className='blog_card'>
      {isLoading ? (
        <img src={loading} alt="loading" className='loading' />
      ):
      contentCard?.length=== 0 ?
      
      ( <p style={{color:"black",fontSize:"20px"}}>Gösterilecek blog yazısı yok, haydi bir yazı yazalım..</p>
      ):(
       
        contentCard?.map((item,index)=>(
          <div className='card' key={index} onClick={()=>handleDetails(item.id, item.title, item.image, item.content, item.date, item.email)}>


           <Card className="card_mui"  >
           {/* sx={{ maxWidth: 345, maxHeight:500 }} */}
          <img className="brand_logo" src={item.image} alt={item.title} />
        <CardContent>

          <h5 className="brand_title" > {item.title}</h5>
         
          <Typography variant="body2" color="text.secondary">
          {item.content}
          </Typography>
        </CardContent>

      
         <CardContent>
         <Typography variant="body2" color="text.secondary">
         <AccountCircle/>{item.date}{item.email}
          </Typography>


         </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
          </div>
        ))
      
      )}
      </div>
    </div>
  );
}

export default Dashboard