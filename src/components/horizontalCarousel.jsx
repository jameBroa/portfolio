import { Paper, Stack, Typography } from '@mui/material';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import '../App.css';
import CarouselItem from './carouseItem';
import SLibrary from '../images/slibrary-400x400.png';
import WeightLiftingAPI from '../images/weightlifting-api-400x400.png';
import RoomMgment from '../images/room-management-400x400.png';
import OlyTracking from '../images/oly-tracking-400x400.png';
import Airbnb from '../images/airbnb-400x400.png';
import IntelliPutt from '../images/golf-companion-400x400.png';
import Solar from '../images/solar-system-400x400.png';
import { REACT_LOGO, FIREBASE_LOGO, JAVA_LOGO, MONGODB_LOGO, SPRING_LOGO, MYSQL_LOGO, AWS_LOGO, CHARTJS_LOGO, HTML_LOGO, CSS_LOGO, PYTHON_LOGO, JS_LOGO, MATPLOTLIB_LOGO, NUMPY_LOGO, SEABORN_LOGO } from '../images/stackConstants';
import { javaColour, mobileColour, pythonColour, webDevColour } from '../styling/colourConstants';

const HorizontalCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

  // const x = useTransform(scrollYProgress, [0, 1], ['25.5px', "-26%"]);

  const [calculatedValue1, setCalculatedValue1] = useState('25.5px');
  const [calculatedValue2, setCalculatedValue2] = useState('-26%');

  // Function to recalculate values based on window size
  const calculateValuesBasedOnWindowSize = () => {
    const windowWidth = window.innerWidth;
    // const windowHeight = window.innerHeight;

    if(windowWidth < 470){
      setCalculatedValue2('-88.50%');
    }
    else if(windowWidth < 505){
      setCalculatedValue2('-87.50%');
    }
    else if(windowWidth < 540){
      setCalculatedValue2('-86.50%');
    }
    else if(windowWidth < 575){
      setCalculatedValue2('-85.50%');
    }

    else if(windowWidth < 615){
      setCalculatedValue2('-84.50%');
    }
    else if(windowWidth < 650){
      setCalculatedValue2('-83.50%');
    }
    else if(windowWidth < 670){
      setCalculatedValue2('-82.50%');
    }
    else if(windowWidth < 740){
      setCalculatedValue2('-81.90%');
    }

    else if(windowWidth < 740){
      setCalculatedValue2('-80.90%');
    }
    else if(windowWidth < 780){
      setCalculatedValue2('-79.98%');
    }
    else if(windowWidth < 820){
      setCalculatedValue2('-78.98%');
    }
    else if(windowWidth < 860){
      setCalculatedValue2('-77.65%');
    }

    else if(windowWidth < 900){
      setCalculatedValue2('-76.55%');
    }

    else if(windowWidth < 950){
      setCalculatedValue2('-75.55%');
    }

    else if(windowWidth < 990){
      setCalculatedValue2('-74.12%');
    }
    else if(windowWidth < 1040){
      setCalculatedValue2('-73.12%');
    }

    else if(windowWidth < 1070){
      setCalculatedValue2('-71.74%');
    }

    else if(windowWidth < 1120){
      setCalculatedValue2('-70.85%');
    }
    else if(windowWidth < 1200) {
      setCalculatedValue1('1.2px');
      setCalculatedValue2('-69.85%');
    }

    else if(windowWidth < 1290) {
      setCalculatedValue1('33.8px');
      setCalculatedValue2('-33.75%');
    }

    else if(windowWidth < 1370) {
      setCalculatedValue1('32.5px');
      setCalculatedValue2('-32.55%');
    }

    else if(windowWidth < 1450){
      setCalculatedValue1('31.5px');
      setCalculatedValue2('-31.95%');
    }

    else if(windowWidth < 1550) {
      setCalculatedValue1('30.5px');
      setCalculatedValue2('-30.45%');
    }

    else if(windowWidth < 1650){
      setCalculatedValue1('29.0px');
      setCalculatedValue2('-29.45%');
    }

    else if (windowWidth < 1800){
      setCalculatedValue1('27.5px');
      setCalculatedValue2('-27.5%');
    }

    else if(windowWidth < 1200){
      setCalculatedValue1('1.5px');
      setCalculatedValue2('-69%');
    }
    else {

    // Update the state variables with the new calculated values
    setCalculatedValue1('25.5px');
    setCalculatedValue2('-26%');
    }
  };

  // Attach an event listener to the window resize event
  useEffect(() => {
    window.addEventListener('resize', calculateValuesBasedOnWindowSize);

    // Call the calculation function once on component mount
    calculateValuesBasedOnWindowSize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateValuesBasedOnWindowSize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // Update the useTransform function with the new values
  const x = useTransform(scrollYProgress, [0, 1], [calculatedValue1, calculatedValue2]);






  // const x = useTransform(scrollYProgress, [0, 1], [`var(--x-start)`, `var(--x-end)`]);
  return (
    <section ref={targetRef} className="horizontalSection">
      <div className="carousel-div" >
        <motion.div style={{ x }} className="horizontalMotionDiv">
            <Stack direction="row" spacing={2}>

            <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:{sm:'800px', xs:'800px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:webDevColour, }}>
            <CarouselItem title="S/Library" imgSrc={SLibrary} stack={[REACT_LOGO, HTML_LOGO, CSS_LOGO, FIREBASE_LOGO]} desc="A self led and developed project in which I created a web-app based in React with Firebase Services to allow students to upload second hand textbooks for other students to purchase"/>
          </Paper>
          </motion.div>
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:'800px', width:'500px', backgroundColor:javaColour, }}>
            <CarouselItem title="Weightlifting API" stack={[JAVA_LOGO, MONGODB_LOGO, SPRING_LOGO]} imgSrc={WeightLiftingAPI} desc="This Weightlifting API can be used to retrieve competition lifts from the Olympic Weightlifting during the Olympics in 2012. "/>
          </Paper>
          </motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:'800px', width:'500px', backgroundColor:javaColour, }}>
            <CarouselItem title="Room Management" stack={[JAVA_LOGO, MYSQL_LOGO]} imgSrc={RoomMgment} desc="This project was part of my Computer Science IA for the IB where I aimed to create a Java based application for the Music department in my school. The whole project revolved around the product development cycle. "/>
          </Paper></motion.div>


          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:'800px', width:'500px', backgroundColor:webDevColour, }}>
            <CarouselItem imgSrc={OlyTracking} stack={[HTML_LOGO, CSS_LOGO, REACT_LOGO, CHARTJS_LOGO, AWS_LOGO]} title="Fitness Tracking App" desc="This fitness tracking app can be used to record a users Olympic Weightlifting lifts. The design is modern and responsive and is primarily a mobile web app."/>
          </Paper></motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:'800px', width:'500px', backgroundColor:pythonColour, }}>
            <CarouselItem title="Airbnb Data Analysis" stack={[PYTHON_LOGO, MATPLOTLIB_LOGO, NUMPY_LOGO, SEABORN_LOGO]} imgSrc={Airbnb} desc="This project was part of my Data science course where I took an Airbnb dataset for Edinburgh and analyzed its contents to discover interesting details about the airbnb market using data analysis "/>
          </Paper>
          </motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:'800px', width:'500px', backgroundColor:mobileColour}}>
            <CarouselItem title="Golf Companion App" stack={[HTML_LOGO, CSS_LOGO, REACT_LOGO, JS_LOGO]} imgSrc={IntelliPutt} desc="This Weightlifting API can be used to retrieve competition lifts from the Olympic Weightlifting during the Olympics in 2012. "/>

          </Paper></motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:'800px', width:'500px', backgroundColor:pythonColour}}>
            <CarouselItem title="Orbit Simulation" stack={[PYTHON_LOGO, MATPLOTLIB_LOGO, NUMPY_LOGO]} imgSrc={Solar} desc="This project was part of an optional elective in University where I had to model the orbits of our planets in our solar system. This was written in Python and MatPlotlib. The simulation was then used as part of an 'experiment' and subsequent report."/>
          </Paper></motion.div>



          </Stack>
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalCarousel