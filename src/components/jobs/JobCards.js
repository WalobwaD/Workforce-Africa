//React imports (useState)
import { useState } from "react";

//import material ui and styles
import { Button, Grid, Link, Backdrop, Box, Paper, Typography} from "@mui/material";
import {paperStyles, buttonBox, applyButton, backDrop, flexBox, jobTitle, requirementsLink, jobLocation, jobDesc} from "./styles"

//JobRequirements component import
import JobRequirements from "./JobRequirements";


const Jobs = ({job})=> {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };
      
      const handleToggle = () => {
        setOpen(!open);
      };

    return (
        
        <Grid item xs={1} align='center' sx={{marginTop:5}}>
            <Paper elevation={5} sx={paperStyles}>
                <Box paddingX={3} sx={flexBox}>

                    <Typography color='secondary' variant="h5" content="h3" align='left' mt={2} sx={jobTitle}>
                        {job.title}
                    </Typography>

                    <Box sx={flexBox}>
                        <Typography color='primary' sx={jobLocation} variant="body2" content="p">
                            {job.location}
                        </Typography>
                    </Box>

                     <Box sx={flexBox}>
                        <Typography sx={jobDesc} color='secondary' variant="body1" content="p" paragraph= {true} align='left'>
                            {job.description}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={buttonBox}>

                    <Link onClick ={handleToggle} sx={requirementsLink} component='button'>
                        Requirements
                    </Link>

                    <Button sx={applyButton} variant="outlined">
                        Apply Now
                    </Button>

                    <Backdrop sx={backDrop} open={open} onClick={handleClose}>
                        <Typography>{job.title}</Typography>

                        <Box sx={flexBox}>
                            {job.requirements.map((requirement, index)=>(
                            <JobRequirements requirements={requirement} key={index}/>
                            ))}
                        </Box>

                    </Backdrop>

                </Box>
            </Paper>
        </Grid>
    )
}

export default Jobs;