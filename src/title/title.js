import { Typography } from "@mui/material";
import { textStyles, innerStyle } from "./styles";

const Title = ()=> (
    
    <Typography sx={textStyles} color='secondary' variant="h6" component='h1' align='center'>
        Land your 
        <Typography color='primary' sx={innerStyle} variant='h5' display='inline' component='span'> Dream Job </Typography> 
        with us!
    </Typography>
)

export default Title;