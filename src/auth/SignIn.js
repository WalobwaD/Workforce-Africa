import { Button, Box, Paper, Typography } from "@mui/material"
import { useContext } from "react";
import { SignInContext } from "../context/googleSignInContext";
import { boxWrap, paperStyles, textBox, googleButton } from "./signInStyles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GoogleIcon from '@mui/icons-material/Google';
const SignIn = ()=> {
    const {handleClick} = useContext(SignInContext)
    return (
        <Box sx={boxWrap}>
            <Paper sx={paperStyles} elevation={8}>
                <Typography color='secondary' variant='h4' component='h2'>
                    Welcome to WorkForce Africa!
                </Typography>
                <Typography color='secondary' variant="h6" component='h5'>Our Services:</Typography>
                <Box sx={textBox}>
                    <Typography>
                        <KeyboardArrowRightIcon/>
                        <>Flexible Employee Solutions</>
                    </Typography>
                    <Typography>
                        <KeyboardArrowRightIcon/>
                        <>Business Support</>
                    </Typography>
                    <Typography>
                        <KeyboardArrowRightIcon/>
                        <>WorkForce Africa Academy</>
                    </Typography>
                    <Typography>
                        <KeyboardArrowRightIcon/>
                        <>Industry Sector</>
                    </Typography>
                    <Typography>
                        Start by Clicking the Sign In button and explore
                        the various opportunities we offer
                    </Typography>
                </Box>
                <Button sx={googleButton} color='primary' onClick={handleClick}>
                    <GoogleIcon sx={{marginRight: 1}}/>
                    <>Sign In With Google.</>
                </Button>
            </Paper>
        </Box>
    )
}

export default SignIn;