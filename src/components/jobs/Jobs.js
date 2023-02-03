import { SearchContext } from "../../context/searchContext"
import {Box} from "@mui/material"
import { useContext } from "react"
const Jobs = ()=> {
    const {searchTerm, jobs} = useContext(SearchContext)
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {jobs.filter((job)=> {
                if (searchTerm === "") {
                    return job
                } else if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return job
                }
            }).map((job)=> {
                return (
                    <div key={job.id}>
                        <h2>{job.title}</h2>
                        <h4>{job.location}</h4>
                        <p>{job.description}</p>
                        {job.requirements.map((requirement, index)=> {
                            return (
                                <li key={index}>{requirement}</li>
                            )
                        })}
                        
                    </div>
                )
            })}
        </Box>
    )
}

export default Jobs;