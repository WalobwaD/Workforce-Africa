import NavBar from "../../components/NavBar/NavBar"
import HomeCard from "../../components/home/HomeCard"
import { ThemeProvider } from '@mui/material/styles';
import {Box} from "@mui/material"
//context providers imports
import theme from '../../context/themeContext';
import HomeTitle from "../../components/home/HomeTitle";
import { ComponentWrapper } from "./styles";
const Home =()=>{
    return (
        <>
            <ThemeProvider theme={theme}>
                <NavBar />
                <Box sx={ComponentWrapper}>
                    <HomeTitle />
                    <HomeCard />
                </Box>
            </ThemeProvider>


        </>
    )
}

export default Home