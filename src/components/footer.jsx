import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import './css/footer.css'
import EmailIcon from '@mui/icons-material/Email';
import {motion} from 'framer-motion';
import FooterButton from './footerButton';

const Footer = () => {
  return (
    <Grid className="grid" container>
        <Grid item lg={12} sx={{display:'flex', justifyContent:'center', height:'inherit', width:'inherit'}}>

            <Stack sx={{width:'inherit'}} className="block" alignItems="center" justifyContent="center" spacing={3}>
                <motion.div whileInView={{x:[100,0], opacity:[0.5, 1]}}>        
                    <Typography className="text" variant="h1" 
                    sx={{
                        fontSize:{
                            lg:'134px',
                            md:'124px',
                            xs:'64px',
                        }, 
                        width:{
                            lg: '600px',
                            md:'600px',
                            xs:'300px',
                            }, 
                        textAlign:'center'
                        
                        }}>Let's work together</Typography>
                </motion.div>    
                <Button startIcon={<EmailIcon/>}color="white" variant="outlined" sx={{textTransform:'none', width:'300px', height:'60px', borderRadius:'40px'}}>
                    <a className="links" href="mailto:jbroadhurst2802@gmail.com"><Typography>jbroadhurst2802@gmail.com</Typography></a>
                </Button>
                <Divider sx={{
                    width:{ 
                        lg:'1000px',
                        xs:'500px',
                        md:'800px',
                        sm:'500px',
                        xs:'300px'
                        }, 
                    bgcolor:'#eee',}}/>
                <Stack direction="row" spacing={2} sx={{display:"flex", alignItems:"flex-start", width:{lg:'1000px', md:'800px', sm:'500px', xs:'300px'}}}alignItems="flex-start" justifyContent={"flex-start"}>
                    <a className="links" href="https://www.linkedin.com/in/jbroa2802/"><FooterButton title="LinkedIn" handle="@jbroa2802"/></a>
                    <a className="links" href="https://github.com/jameBroa/"><FooterButton title="Github" handle="@jameBroa"/></a>
                </Stack>

            </Stack>


        </Grid>
    </Grid>
  )
}

export default Footer