import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png';

const Header = () => {
  return (
    <div>
        <Grid container >
            <Grid item xs={8} sm={8} md={10} lg={10} >
                <Box sx={{display:'flex', alignItems:"center", paddingLeft:{
                    xs:'10px',
                    lg:'7px'
                    },height:{
                    xs:'100px',
                    sm:'120px',
                    lg:'180px',
                }}}>
                    <img id="logo" src={logo}/>
                </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={2} xs={2} sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                <Button className="headerButton" color='black' sx={{textTransform:'none'}}>
                    <Typography variant="h5" sx={{color:'black'}}>About</Typography>
                </Button>
            </Grid>
            <Grid item lg={1} md={1} sm={2} xs={2} sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                <Button className="headerButton" color='black' sx={{textTransform:'none'}}>
                    <Typography variant="h5" sx={{color:'black'}}>CV</Typography>
                </Button>
            </Grid>
        </Grid>


    </div>
  )
}

export default Header