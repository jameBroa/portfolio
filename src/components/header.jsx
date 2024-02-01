import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Grid container >
            <Grid item xs={7} sm={8} md={10} lg={10} >
                <Box sx={{display:'flex', alignItems:"center", paddingLeft:{
                    xs:'10px',
                    lg:'7px'
                    },height:{
                    xs:'100px',
                    sm:'120px',
                    lg:'180px',
                }}}>
                    {/* <img id="logo" src={logo}/> */}
                </Box>
            </Grid>
            
            <Grid item lg={2} md={2} sm={3} xs={4} sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                <a href="https://github.com/jameBroa/portfolio/blob/master/resume_latest.pdf" >
                <Button className="headerButton" variant="outlined" color='black' sx={{textTransform:'none', width:'175px', borderRadius:'50px', border:'solid', borderWidth:'1px', height:'60px'}}>
                    <Typography variant="h5" sx={{color:'black', fontWeight:'400', fontSize:'16px'}}>Download CV</Typography>
                </Button></a>
            </Grid>
        </Grid>


    </div>
  )
}

export default Header