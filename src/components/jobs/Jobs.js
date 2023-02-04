import { useContext } from "react"

import {Grid} from "@mui/material"

import { SearchContext } from "../../context/searchContext"
import JobCards from "./JobCards"

const Jobs = ()=> {

    const {searchTerm, jobs} = useContext(SearchContext)

    return (
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
            
        </Grid>
    )
}

export default Jobs;