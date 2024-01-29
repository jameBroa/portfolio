import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import './css/carouselItem.css'

const CarouselItem = (props) => {
  console.log(props.stack)

  const print = (e) => {
    console.log(props.stack)
  }
  return (
    <Stack className="img" direction="column" spacing={3} pl={1} alignItems="center" sx={{display:'flex', height:'100%'}}> 
        <Typography  sx={{fontSize:'50px'}}>{props.title}</Typography>
        <img width="400px" height="400px" src={props.imgSrc}/>
        <Typography sx={{width:'auto', height:'120px'}} >{props.desc}</Typography>
        <Stack direction="row" spacing={2} >
          {props.stack.map((image, index)=>(
            <img key={index} src={image}  height="40px"/>
          ))}
        </Stack>
        <Button onClick={print} variant="outlined" color='black' sx={{textTransform:'none'}}>
            <Typography>See Project!</Typography>
        </Button>
    </Stack>
  )
}

export default CarouselItem