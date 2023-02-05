import { useContext } from "react"

import {Grid, Typography} from "@mui/material"

import { SearchContext } from "../../context/searchContext"
import JobCards from "./JobCards"
import { SignInContext } from "../../context/googleSignInContext"
import {signInWarn} from "./styles"

const Jobs = ()=> {

    const {searchTerm, jobs} = useContext(SearchContext)
    const {currentUser} = useContext(SignInContext)
    return (
        <>{currentUser ?                 
        
            <Grid container lg={12} item spacing={3} mb={5} sx={{ justifyContent: 'center'}}>

                {jobs.filter((job)=> {
                    if (!searchTerm || job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return job;
                    }
                }).map((filteredJob)=> {
                    return (
                    <JobCards job = {filteredJob} key={filteredJob.id}/>
                    )
                })}
                
            </Grid>: 
            <Typography color='secondary' sx={signInWarn} variant="h3" component='h2'>
                You Need to Sign In to See Jobs Offered
            </Typography>}
        </>

    )
}

export default Jobs;