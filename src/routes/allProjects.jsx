import { Grid, Paper, Stack, Typography } from "@mui/material";
import Header from "../components/header";
import {ALL_PROJECTS, tagToIcon} from '../projects';
import {motion} from 'framer-motion'

export default function AllProjects() {




    return (
        <div>
            <Grid pl={2} pr={2} container>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid mb={20} item xs={12} sx={{display:'flex', justifyContent:'center'}}>
                    <Stack direction="column">
                        <Typography variant="h1">All Projects</Typography>
                    </Stack>
                </Grid>
                
                    <Grid item xs={12} sx={{display:'flex', justifyContent:'center', }}>
                        {/* off-center due to the ml and mr below */}
                        <Grid container sx={{}} columnSpacing={10} rowSpacing={5}>
                        {ALL_PROJECTS.map((project, index)=> {
                            return(
                        
                            <Grid item xl={3} lg={4} sm={6} xs={12} sx={{}}>
                                <motion.div
                            whileHover={{scale:1.05}}
                            
                            >
                                <Paper sx={{height:'400px'}}>
                                    <Stack direction="column" pt={2} alignItems='center' spacing={2}>
                                        <Typography sx={{textAlign:'center', width:'85%'}} variant="h4">{project.title}</Typography>
                                        <Typography sx={{textAlign:'center', width:'95%', height:'5rem', }} variant="p">{project.desc}</Typography>
                                        <img width="150px" height="150px" src={project.img}/>
                                            {project.tag.map((tags, index) => {
                                                return (
                                                <Stack direction="row">
                                                {tagToIcon.get(tags).map((src) => (
                                                    <img src={src} height="40px"/>
                                                ))}
                                                </Stack>
                                                )
                                            })}

                                        
                                        {/* <Typography variant="p">{project.tag}</Typography> */}
                                    </Stack>
                                </Paper>
                                </motion.div>
                            </Grid>
                            )})}
                        </Grid>
                    </Grid>
                    
                
                <Grid item xs={12}>
                    <p>test</p>
                </Grid>









            </Grid>

            
        </div>
    )
}