import { Stack, Typography } from '@mui/material'
import React from 'react'

const BentoText = (props) => {
  return (

        <Stack pl={1} direction="column" justifyContent={"space-between"} sx={{height:'100%'}}>
            <Typography variant="h1">{props.title}</Typography>
            <Typography variant="h4">{props.desc}</Typography>
        </Stack>
  )
}

export default BentoText