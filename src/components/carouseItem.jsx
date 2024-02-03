import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import './css/carouselItem.css'

const CarouselItem = (props) => {
  console.log(props.stack)

  const print = (e) => {
    console.log(props.stack)
  }
  return (
    <Stack className="img" direction="column" spacing={2} pl={1} alignItems="center" sx={{display:'flex', height:'100%'}}> 
        <Typography  sx={{fontSize:{sm:'50px', xs:'30px'}}}>{props.title}</Typography>
        <img className="exp-img" src={props.imgSrc}/>
        <Typography sx={{width:'auto', height:{sm:'120px',xs:'150px'}, textAlign:'center'}} >{props.desc}</Typography>
        <Stack direction="row" spacing={2} >
          {props.stack.map((image, index)=>(
            <img key={index} src={image}  height="40px"/>
          ))}
        </Stack>
        <Button onClick={print} variant="outlined" color='black' sx={{textTransform:'none'}}>
          {!props.unfinished && (
            <a href={props.url} className="links-proj"><Typography>See Project!</Typography></a>
          )}
          {props.unfinished && (
            <Typography>Coming soon!</Typography>
          )}
        </Button>
    </Stack>
  )
}

export default CarouselItem