import { Typography, Box } from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
const JobRequirements =({requirements})=>(


    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf : 'flex-start',
        marginY: 1,
        paddingX: 1

    }}>
        <CheckCircle sx={{color:'#FD510C', opacity: 0.9}}/>
        <Typography sx={{
                    marginLeft: 1,
                    opacity: 1,
                    fontWeight: 600,
                    fontSize: {
                        mobile: '0.7rem',
                        tablet: '1rem',
                        laptop: '1.2rem'
                    }
        }}>{requirements}</Typography>
    </Box>
)

export default JobRequirements;