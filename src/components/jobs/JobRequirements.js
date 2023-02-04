import { Typography, Box, Link } from "@mui/material"
import {CheckCircle} from "@mui/icons-material"

import { requirementBox, requirementsText } from "./styles";

const JobRequirements =({requirements})=>(

    <Box sx={requirementBox}>
        <CheckCircle sx={{color:'#FD510C', opacity: 0.9}}/>
        <Typography sx={requirementsText}>{requirements}</Typography>
    </Box>
)

export default JobRequirements;