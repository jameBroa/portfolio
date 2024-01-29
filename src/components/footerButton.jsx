import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const FooterButton = (props) => {
  return (
    <div>
        <Button color="white" variant="text" sx={{textTransform:'none', height:'60px'}}>
            <Stack direction="column" alignItems="flex-start">
                <Typography sx={{fontWeight:'300'}}>{props.title}</Typography>
                <Typography variant="p" sx={{fontWeight:'300', color:'grey'}}>{props.handle}</Typography>
            </Stack>
        </Button>


    </div>
  )
}

export default FooterButton