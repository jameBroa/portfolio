import { Button, Paper, Stack, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import './css/modal.css'
import WorkIcon from '@mui/icons-material/Work';
const InformationModal = ({ isOpen, setIsOpen, bgColor }) => {
  return (
    <div>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => {setIsOpen(false)}}
                className="modal-div"
                
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="modal-box"
                    >   
                        <Paper sx={{backgroundColor: bgColor}}>
                        <Stack direction="column" alignItems="center" justifyContent="space-evenly" sx={{ height:'400px', width:'800px'}}>
                            <div className="modal-icon">
                                <WorkIcon style={{height:'80%', width:'80%'}} />
                            </div>
                            <Typography variant="h3">Relevant Experience</Typography>
                            <Button color="black" sx={{textTransform:'none'}} onClick={() => {setIsOpen(false)}}>Leave</Button>
                        </Stack></Paper>


                    </motion.div>



                </motion.div>
            )}


        </AnimatePresence>



    </div>
  )
}

export default InformationModal