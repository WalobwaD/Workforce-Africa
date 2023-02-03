import { Button, Grid, Link } from "@mui/material";
import {Box, Paper, Typography} from "@mui/material"
const Jobs = ({job})=> {
    return (
        
        <Grid item xs={1} align='center' sx={{marginTop:5}}>
                <Paper
                    elevation={5}
                    sx={{
                        height: {
                            mobile: '100%',
                            tablet: 300,
                            laptop: '100%'
                        },
                        width: {
                            mobile : '80%',
                            tablet: '70%',
                            laptop: 400

                        }
                    }}
                    >
                    <Box paddingX={3} sx={{
                        display: 'flex',
                        alignItem: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'

                    }}>
                        <Typography 
                            variant="h5" 
                            content="h3"
                            align='left'
                            mt={2}
                            sx={{
                                fontWeight: 600,
                                fontSize: {
                                    mobile: 20,
                                    tablet: 20,
                                    laptop: 30
                                }
                            }}
                            >
                            {job.title}
                        </Typography>
                        <hr></hr>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="body2" content="p">
                                {job.location}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                marginTop:2
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                content="p" 
                                paragraph= {true}
                                align='left'
                            >
                                {job.description}
                            </Typography>

                        </Box>


                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingX: 1,
                        marginBottom: 3
                    }}>
                        <Link 
                            sx={{
                                color: '#636365',
                                '&:hover' : {
                                    color: '#FD510C'
                                }
                            }}
                            component='button'>Requirements</Link>
                        <Button
                            sx={{
                                borderColor: '#FD510C',
                                color: '#636365',
                                '&:hover' : {
                                    backgroundColor: '#FD510C',
                                    opacity: 0.75,
                                    borderColor: 'white',
                                    color: 'white'
                                }
                            }}
                                variant="outlined"
                        >
                            Apply Now
                        </Button>

                    </Box>
                </Paper>
            

        </Grid>

        
    )
}

export default Jobs;