import LogoutIcon from '@mui/icons-material/Logout';
import {Box} from "@mui/material"
import {logoutButton} from "./logoutStyle"

const LogOut = ()=> {

    const handleClick = ()=> {
        localStorage.clear()
        window.location.reload()
    }
    
    return (
        <Box
        component= 'button'
        onClick={handleClick}
        sx={logoutButton}
        >
            <LogoutIcon color='primary'/>
        </Box>
    )
}

export default LogOut;