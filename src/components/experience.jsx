import { Stack, Typography } from '@mui/material'
import React from 'react'

const Experience = (props) => {
  return (
    <div>
        <Stack direction="column" sx={{alignItems:{xs:'center', lg:'flex-start'}}} spacing={1}>
            <Typography variant="h1" sx={{fontSize:{lg:'130px', xs:'100px'}}}>{props.number}</Typography>
            <Typography variant="h6" sx={{fontSize:{lg:'32px', xs:'24px'}}}>{props.desc}</Typography>
        </Stack>
    </div>
  )
}

export default Experience