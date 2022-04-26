import * as React from 'react';
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




const Dashboard = () => {

  const {isLoading, contentCard} = useFetch()



  return (
    <div>
      <h1 style={{color:"blue", marginTop:"3rem"}}> ──  Dashboard  ── </h1>

      {isLoading ? (
        <img src={loading} alt="loading" />
      ):
      contentCard?.length=== 0 ?
      
      ( <p style={{color:"black",fontSize:"20px"}}>Gösterilecek blog yazısı yok, haydi bir yazı yazalım..</p>
      ):(
        contentCard?.map((item,index)=>(
          <div key={index}>
           <Card sx={{ maxWidth: 345 }}>
          <img src={item.image} alt={item.title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {item.content}
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
  );
}

export default Dashboard