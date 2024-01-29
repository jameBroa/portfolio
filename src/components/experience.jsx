import { Stack, Typography } from '@mui/material'
import TextScramble from '@twistezo/react-text-scramble'
import React, { useEffect, useRef, useState } from 'react'
import '../components/css/experience.css'
import { useInView, motion } from 'framer-motion'

const Experience = (props) => {

  const scrambleText=[
    props.number
  ]


  const [pause, setPause] = useState(false);
  return (
    <div>
        <Stack direction="column" sx={{alignItems:{xs:'center', lg:'flex-start'}}} spacing={1}>
            <motion.div

            whileInView={{x:[200,0]}}
                        
            >

              <Typography variant="h1" sx={{fontSize:{lg:'130px', xs:'100px'}}}>{props.number}</Typography>

            
            <Typography variant="h6" sx={{fontSize:{lg:'32px', xs:'24px'}}}>{props.desc}</Typography></motion.div>
        </Stack>
    </div>
  )
}

export default Experience