import { Typography, Box, Paper } from "@mui/material"
import {paperStyles, paperWrap, subtitleStyle, title} from "./styles"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {motion} from "framer-motion"
const HomeCard =()=>{
    return (
        <Box 
            component={motion.div}
            initial={{ opacity: 0.2}}
            transition={{duration:2}}
            whileInView={{ opacity: 1 }}
            sx={paperWrap}>
            <Paper elevation={8} sx={paperStyles}>
                <Box>
                    <Typography sx={title} variant='h4' component='h2' >Learn More About Us</Typography>
                </Box>
                <Box>
                    <Typography sx={subtitleStyle} color='secondary' variant='subtitle1' component='h6'>
                        <ArrowCircleRightIcon/> 
                        <>Tailor Made Solutions</>
                    </Typography>
                    <Typography >
                        We believe each client is unique and we treat them so.
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={subtitleStyle} color='secondary'> 
                    <ArrowCircleRightIcon/> 
                    <>Return on Investments (ROI)</></Typography>
                    <Typography>
                        We pride ourselves in providing world class services that will
                         guarantee you a return on investment.
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={subtitleStyle} color='secondary'>
                        <ArrowCircleRightIcon/>
                        <>We are Experts</>
                    </Typography>
                    <Typography>
                        We have an inhouse combined experience of over 40 years in HR practice.
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default HomeCard;