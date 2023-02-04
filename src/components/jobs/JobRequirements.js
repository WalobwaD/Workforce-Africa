import { Typography, Box } from "@mui/material"

const JobRequirements =({requirements})=>(
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Typography>{requirements}</Typography>
    </Box>
)

export default JobRequirements;