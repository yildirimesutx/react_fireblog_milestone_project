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
import {  useFetch } from '../helpers/firebase';
import loading from "../assets/loading.gif"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { AccountCircle } from "@mui/icons-material";
// import {ChatBubbleOutlineOutlinedIcon} from "@mui/icons-material";
// import IconButton from '@mui/material/IconButton';
// import {email} from    "../pages/Login"



const Dashboard = () => {

  const {isLoading, contentCard} = useFetch()
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='das_main'>
      <h1 style={{color:"blue", marginTop:"3rem"}}> ──  Dashboard  ── </h1>
      <div className='blog_card'>
      {isLoading ? (
        <img src={loading} alt="loading" className='loading' />
      ):
      contentCard?.length=== 0 ?
      
      ( <p style={{color:"black",fontSize:"20px"}}>Gösterilecek blog yazısı yok, haydi bir yazı yazalım..</p>
      ):(
       
        contentCard?.map((item,index)=>(
          <div className='card' key={index} onClick={()=>currentUser
            ? navigate("details/")
            : alert("Please log in to see details")}>
           <Card sx={{ maxWidth: 345, maxHeight:500 }} >

          <img src={item.image} alt={item.title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.content}
          </Typography>
        </CardContent>

        

         <CardContent>
         <Typography variant="body2" color="text.secondary">
         <AccountCircle/>{item.date}
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