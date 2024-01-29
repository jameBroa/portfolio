// import { Avatar, Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import './App.css';
// import Header from './components/header';
import { useAnimation, useScroll, motion, useSpring } from 'framer-motion';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Photo from './images/photo.png';
// import Experience from './components/experience';
// import BentoText from './components/bentoText';
// import Java from './images/java.png';
// import Python from './images/python.png'
// import Figma from './images/figma.png';
// import reactNative from './images/reactNative.png'
// import js from './images/js.png';
// import react from './images/react.png';
import { useEffect, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';
// import HorizontalCarousel from './components/horizontalCarousel';
// import { figmaColour, javaColour, mobileColour, pythonColour, webDevColour } from './styling/colourConstants';
// import Footer from './components/footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/homePage';
import AllProjects from './routes/allProjects';
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>

    },
    {
      path:"/projects",
      element:<AllProjects/>
    }
  

  ])

  return (
    <RouterProvider router={router}/>

    
  );
}

export default App;
