import { Avatar, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import './App.css';
import Header from './components/header';
import { useAnimation, useScroll, motion, useSpring } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Photo from './images/photo.png';
import Experience from './components/experience';
import BentoText from './components/bentoText';
import Java from './images/java.png';
import Python from './images/python.png'
import Figma from './images/figma.png';
import reactNative from './images/reactNative.png'
import js from './images/js.png';
import react from './images/react.png';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import HorizontalCarousel from './components/horizontalCarousel';
function App() {

  const {scrollYProgress} = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(()=> {
    console.log(scrollYProgress.current)
  })


  return (
    <div className="App">
      <motion.div
      className="progress-bar"
      style={{scaleX}}
      
      >
      {/* <Paper sx={{boxShadow:'none', backgroundColor:'black', height:'100px', width:'50px'}}/> */}

      </motion.div>
      <Grid container>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid mb={20} item xs={12} sx={{height:{
          xs:'550px',
          lg:'600px',
        }, 
          display:'flex', flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <Stack spacing={4} direction="column" alignItems="center" >
            <motion.div 
            animate={{scale:[0,1]}}
            whileInView={{scale:[0,1]}}
            transition={{type:'spring'}}
          
            >
            <Typography variant="h1" sx={{fontSize:{    
              xl:'124px',
              lg:'100px',
              md:'80px',
              sm:'52px',
              xs:'36px'}}}>Hi 👋, I’m James</Typography></motion.div>
            <motion.div 
            animate={{scale:[0,1]}} 
            whileInView={{scale:[0,1]}} 
            transition={{type:'spring', delay:0.2}}>

            <Typography variant="h1" sx={{fontSize:{
              xl:'124px',
              lg:'100px',
              md:'80px',
              sm:'52px',
              xs:'36px'}}}>And I like to make things</Typography>
              </motion.div>

              <motion.div
            animate={{scale:[0,1]}}
            whileInView={{scale:[0,1]}} 
            transition={{type:'spring'}}
            >
            <Button endIcon={<ArrowForwardIcon/>} color='black' variant='contained' sx={{color:'white', borderRadius:'50px', height:'60px', width:'300px', textTransform:'none'}}>
                  <Typography variant="h6" sx={{fontWeight:'300'}}>Let's have a look!</Typography>
            </Button>
            </motion.div>

          </Stack>
        </Grid>

        <Grid item lg={5} xs={12} sx={{display:'flex', justifyContent:{
          lg:'flex-end',
          xs:'center'}}}>
          <Avatar src={Photo} sx={{width: {
            lg:'600px',
            md:'400px',
            xs:'300px'
          }, height:{
            lg:'600px',
            md:'400px',
            xs:'300px'
          }}}/>
        </Grid>

        <Grid mb={20} item lg={7} xs={12} sx={{display:'flex', justifyContent:{lg:'flex-end', xs:'center'}, textAlign:{xs:'center', lg:'left'}}}>
          <Typography variant="h1" sx={{
            width:{
              md:'900px',
              sm:'600px',
              xs:'350px',
            },
            paddingLeft:{
              lg:'20px'}, 
            paddingTop:{
              xs:'20px'
            },
            fontSize:{
            lg:'82px',
            md:'64px',
            sm:'32px',
            xs:'22px'}}}>
          Hi! My name is James Broadhurst and I am an aspiring Full stack developer who is currently in my third year at the University of Edinburgh.
          </Typography>
        </Grid>

        <Grid item lg={4} xs={12} sx={{ display:'flex', justifyContent:{xs:'center', lg:'flex-end'}}}>
            <Experience number={1} desc="Year of experience"/>
          </Grid>

          <Grid item lg={4} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Experience number={10} desc="Guided Projects"/>

          </Grid>

          <Grid mb={20} item lg={4} xs={12} sx={{ display:'flex', justifyContent:{xs:'center', lg:'flex-start'}}}>
            <Experience number={7} desc="Languages"/>
          </Grid>



          

          <Grid mb={20} item xs={12} sx={{ display:'flex', justifyContent:'center'}}>
            <Grid item xs={11} sx={{}}>
              <Grid container spacing={1}>
                <Grid item lg={4} xs={12} md={6} sx={{height:{xs:'600px', sm:'600px', md:'800px', lg:'800px'}}}>
                  {/* <motion.div className="motionDiv" initial={{opacity:0}} whileInView={{y:[500,0], opacity:1}} transition={{type:'spring'}}> */}
                  <Paper sx={{backgroundColor:'#F1F5F9', height:'100%', width:'100%'}}>
                    <BentoText imgSrc={js} secondImgSrc={react} title="Web dev" desc="tes"/>
                  </Paper>
                  {/* </motion.div> */}
                </Grid>
                <Grid item lg={4} xs={12} md={6}sx={{ height:'800px'}}>
                  <Stack direction="column" spacing={2}>
                    <Paper sx={{backgroundColor:'#F1F6F5', height:'388px', width:'100%'}}>
                      <BentoText imgSrc={Java} title="Java and C" desc="More Text"/>
                    </Paper>
                    <Paper sx={{backgroundColor:'#F8EDE4', height:'388px', width:'100%'}}>
                    <BentoText imgSrc={reactNative} title="Mobile Dev." desc="More Text"/>
                    </Paper>
                  </Stack>
                
                </Grid>
                <Grid item lg={4} xs={12} md={12} sx={{height:'800px'}}>
                <Stack direction="column" spacing={2}>
                    <Paper sx={{backgroundColor:'#F8F8F8', height:'388px', width:'100%'}}>
                    <BentoText imgSrc={Python} title="Python" desc="More Text"/>
                    </Paper>
                    <Paper sx={{backgroundColor:'#FFFAE9', height:'388px', width:'100%'}}>
                      <BentoText imgSrc={Figma} title="Design" desc="More Text"/>
                    </Paper>
                  </Stack>
                </Grid>
              
                
              </Grid>
              

            </Grid>

          </Grid>
          <Grid mb={2} item lg={12}>
            <HorizontalCarousel/>
          </Grid>

          <Grid item lg={12}>
            <Stack direction="row" spacing={4}>
              <Paper sx={{width:'500px', height:'250px', backgroundColor:'#a8a8a8'}}/>
              <Paper sx={{width:'500px', height:'250px', backgroundColor:'#a8a8a8'}}/>
              <Paper sx={{width:'500px', height:'250px', backgroundColor:'#a8a8a8'}}/>
              <Paper sx={{width:'500px', height:'250px', backgroundColor:'#a8a8a8'}}/>
            </Stack>
          </Grid>





        {/* <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1, scale:[0,1]}}
        transition={{duration:1}}
        >
      
    
          <Paper sx={{height:'500px', width:'1000px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'skyblue'}}><Typography variant="h1">Giant placeholder</Typography></Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1, y:[300,0]}}
        transition={{duration:1, type:'spring'}}
        >
      
    
          <Paper sx={{height:'800px', width:'1000px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'pink'}}><Typography variant="h1">Giant placeholder</Typography></Paper>
          </motion.div>
        </Grid> */}

      </Grid>

    </div>
  );
}

export default App;
