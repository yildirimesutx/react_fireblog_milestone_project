import React, { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'

const Details = () => {

  const {detail} = useContext(BlogContext)
 console.log(detail);

  return (
    <div>

      <img src={detail.image} alt="" />
      
      
       Details </div>
  )
}

export default Details