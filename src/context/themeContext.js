import { createTheme } from "@mui/material";

const theme = createTheme({
    palette : {
        primary: {
            main: '#FD510C'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        }
    }
})

export default theme;