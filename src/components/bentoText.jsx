import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BentoText = (props) => {
  return (

        <Stack pl={1} direction="column" justifyContent={"space-around"} sx={{height:'100%'}}>
            <Typography sx={{fontSize:{
              lg:'70px',
              md:'70px',
              xs:'80px'
            }}}variant="h1">{props.title}</Typography>
            <Stack direction="column" spacing={5} alignItems="center" justifyContent="center" sx={{ height:'100%'}}>
                <img width="150px" src={props.imgSrc}/>
                {props.secondImgSrc && (
                  <img width="150px" src={props.secondImgSrc}/>
                )}
                
            </Stack>
            <Button color='black' sx={{textTransform:'none', width:'120px'}} endIcon={<ArrowForwardIcon/>}>
                  <Typography sx={{color:'black'}} variant="p">Learn More</Typography>
            </Button>
        </Stack>
  )
}

export default BentoText