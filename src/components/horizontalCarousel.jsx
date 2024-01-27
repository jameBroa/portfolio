import { Paper, Stack, Typography } from '@mui/material';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
import '../App.css';

const HorizontalCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

  const x = useTransform(scrollYProgress, [0, 1], ['25.5px', "-26%"]);
  return (
    <section ref={targetRef} className="horizontalSection">
      <div className="carousel-div" >
        <motion.div style={{ x }} className="horizontalMotionDiv">
            <Stack direction="row" spacing={2}>

            
          <Paper sx={{height:'800px', width:'500px', backgroundColor:'#000000'}}>
            <Stack  direction="column">
                <Typography variant="h1" className="carousel-text">Lol Boobs</Typography>
            </Stack>
          </Paper>
          <Paper sx={{height:'800px', width:'500px', backgroundColor:'#000000'}}>
            <Stack  direction="column">
                <Typography variant="h1" className="carousel-text">Lol Boobs</Typography>
            </Stack>
          </Paper><Paper sx={{height:'800px', width:'500px', backgroundColor:'#000000'}}>
            <Stack  direction="column">
                <Typography variant="h1" className="carousel-text">Lol Boobs</Typography>
            </Stack>
          </Paper><Paper sx={{height:'800px', width:'500px', backgroundColor:'#000000'}}>
            <Stack  direction="column">
                <Typography variant="h1" className="carousel-text">Lol Boobs</Typography>
            </Stack>
          </Paper><Paper sx={{height:'800px', width:'500px', backgroundColor:'#000000'}}>
            <Stack  direction="column">
                <Typography variant="h1" className="carousel-text">Lol Boobs</Typography>
            </Stack>
          </Paper><Paper sx={{height:'800px', width:'500px', backgroundColor:'#000000'}}>
            <Stack  direction="column">
                <Typography variant="h1" className="carousel-text">Lol Boobs</Typography>
            </Stack>
          </Paper><Paper sx={{height:'800px', width:'500px', backgroundColor:'#000000'}}>
            <Stack  direction="column">
                <Typography variant="h1" className="carousel-text">Lol Boobs</Typography>
            </Stack>
          </Paper>



          </Stack>
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalCarousel