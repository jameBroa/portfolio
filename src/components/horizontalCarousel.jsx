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

  const [calculatedValue1, setCalculatedValue1] = useState('20px');
  // const [calculatedValue2, setCalculatedValue2] = useState('-26%');
    const [calculatedValue2, setCalculatedValue2] = useState('-2500px');
  // Function to recalculate values based on window size
  const calculateValuesBasedOnWindowSize = () => {
    const windowWidth = window.innerWidth;
    // const windowHeight = window.innerHeight;




    if(windowWidth < 330){
      setCalculatedValue2('-1905px');

    }

    else if(windowWidth < 350){
      setCalculatedValue2('-1885px');

    }

    else if(windowWidth < 370){
      setCalculatedValue2('-1865px');

    }

    else if(windowWidth < 395){
      setCalculatedValue2('-1845px');

    }


    else if(windowWidth < 410){
      setCalculatedValue2('-1825px');

    }

    else if(windowWidth < 435){
      setCalculatedValue2('-1805px');

    }

    else if(windowWidth < 450){
      setCalculatedValue2('-1785px');

    }
    else if(windowWidth < 475){
      setCalculatedValue2('-1765px');

    }

    else if(windowWidth < 490){
      setCalculatedValue2('-1745px');

    }
    else if(windowWidth < 514){
      setCalculatedValue2('-1725px');
    }

    else if(windowWidth < 530){
      setCalculatedValue2('-1705px');
    }
    else if(windowWidth < 555){
      setCalculatedValue2('-1685px');
    }
    else if(windowWidth < 575){
      setCalculatedValue2('-1665px');
    }
    else if(windowWidth < 605){
      setCalculatedValue2('-1645px');
    }

    else if(windowWidth < 635){
      setCalculatedValue2('-3005px');
    }
    else if(windowWidth < 670){
      setCalculatedValue2('-2980px');
    }
    else if(windowWidth < 700){
      setCalculatedValue2('-2950px');
    }

    else if(windowWidth < 740){
      setCalculatedValue2('-2908px');
    }
    else if(windowWidth < 780){
      setCalculatedValue2('-2870px');
    }
    else if(windowWidth < 820){
      setCalculatedValue2('-2840px');
    }
    else if(windowWidth < 860){
      setCalculatedValue2('-2790px');
    }

    else if(windowWidth < 900){
      setCalculatedValue2('-2755px');
    }

    else if(windowWidth < 950){
      setCalculatedValue2('-2705px');
    }

    else if(windowWidth < 990){
      setCalculatedValue2('-2665px');
    }
    else if(windowWidth < 1040){
      setCalculatedValue2('-2620px');
    }

    else if(windowWidth < 1070){
      setCalculatedValue2('-2590px');
    }

    else if(windowWidth < 1120){
      setCalculatedValue2('-2545px');
    }
    else if(windowWidth < 1200) {
      setCalculatedValue1('50px');
      setCalculatedValue2('-2468px');
    }

    else if(windowWidth < 1290) {
      setCalculatedValue1('1235px');
      setCalculatedValue2('-1233px');
    }

    else if(windowWidth < 1370) {
      setCalculatedValue1('1185px');
      setCalculatedValue2('-1190px');
    }

    else if(windowWidth < 1450){
      setCalculatedValue1('1145px');
      setCalculatedValue2('-1148px');
    }

    else if(windowWidth < 1550) {
      setCalculatedValue1('1095px');
      setCalculatedValue2('-1103px');
    }

    else if(windowWidth < 1650){
      setCalculatedValue1('1055px');
      setCalculatedValue2('-1054px');
    }

    else if (windowWidth < 1800){
      setCalculatedValue1('1015px');
      setCalculatedValue2('-1008px');
    }

  
    else {

    // Update the state variables with the new calculated values
    setCalculatedValue1('950px');
    setCalculatedValue2('-960px');
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
          <Paper sx={{height:{sm:'800px', xs:'600px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:webDevColour, }}>
            <CarouselItem title="S/Library" url="https://www.youtube.com/watch?v=ZprjkS6JQkc"  imgSrc={SLibrary} stack={[REACT_LOGO, HTML_LOGO, CSS_LOGO, FIREBASE_LOGO]} desc="A self led and developed project in which I created a web-app based in React with Firebase Services to allow students to upload second hand textbooks for other students to purchase"/>
          </Paper>
          </motion.div>
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:{sm:'800px', xs:'600px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:javaColour, }}>
            <CarouselItem title="Weightlifting API" url="https://github.com/jameBroa/weightlifting-api" stack={[JAVA_LOGO, MONGODB_LOGO, SPRING_LOGO]} imgSrc={WeightLiftingAPI} desc="This Weightlifting API can be used to retrieve competition lifts from the Olympic Weightlifting during the Olympics in 2012. "/>
          </Paper>
          </motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:{sm:'800px', xs:'600px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:javaColour, }}>
            <CarouselItem title="Room Management" url="https://github.com/jameBroa/music-booking-application" stack={[JAVA_LOGO, MYSQL_LOGO]} imgSrc={RoomMgment} desc="This project was part of my Computer Science IA for the IB where I aimed to create a Java based application for the Music department in my school. The whole project revolved around the product development cycle. "/>
          </Paper></motion.div>


          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:{sm:'800px', xs:'600px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:webDevColour, }}>
            <CarouselItem imgSrc={OlyTracking} url="https://github.com/jameBroa/oly-tracking-web-app" stack={[HTML_LOGO, CSS_LOGO, REACT_LOGO, CHARTJS_LOGO, AWS_LOGO]} title="Fitness Tracking App" desc="This fitness tracking app can be used to record a users Olympic Weightlifting lifts. The design is modern and responsive and is primarily a mobile web app."/>
          </Paper></motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:{sm:'800px', xs:'600px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:pythonColour, }}>
            <CarouselItem title="Airbnb Data Analysis" url="https://raw.githubusercontent.com/jameBroa/cv/7181335fadc41d6cc790254f2e981f461e3cfa32/Airbnb's%20in%20Edinburgh.pdf" stack={[PYTHON_LOGO, MATPLOTLIB_LOGO, NUMPY_LOGO, SEABORN_LOGO]} imgSrc={Airbnb} desc="This project was part of my Data science course where I took an Airbnb dataset for Edinburgh and analyzed its contents to discover interesting details about the airbnb market using data analysis "/>
          </Paper>
          </motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:{sm:'800px', xs:'600px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:mobileColour}}>
            <CarouselItem title="Golf Companion App" unfinished stack={[HTML_LOGO, CSS_LOGO, REACT_LOGO, JS_LOGO]} imgSrc={IntelliPutt} desc="This Weightlifting API can be used to retrieve competition lifts from the Olympic Weightlifting during the Olympics in 2012. "/>

          </Paper></motion.div>
          
          <motion.div
            whileHover={{scale:1.025}}
            >
          <Paper sx={{height:{sm:'800px', xs:'600px'}, width:{sm:'500px', xs:'300px'}, backgroundColor:pythonColour}}>
            <CarouselItem title="Orbit Simulation" url="https://github.com/jameBroa/solarSystemModel" stack={[PYTHON_LOGO, MATPLOTLIB_LOGO, NUMPY_LOGO]} imgSrc={Solar} desc="This project was part of an optional elective in University where I had to model the orbits of our planets in our solar system. This was written in Python and MatPlotlib. The simulation was then used as part of an 'experiment' and subsequent report."/>
          </Paper></motion.div>



          </Stack>
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalCarousel