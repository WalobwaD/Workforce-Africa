import { useContext} from "react"

import SearchIcon from "@mui/icons-material/Search"
import { Box, TextField } from "@mui/material"
import {searchBox} from "./styles"

import { SearchContext } from "../../../context/searchContext"

const SearchBar = ()=> {
    const {searchTerm, setSearch} = useContext(SearchContext)
    const handleChange = (e)=> {
        setSearch(e.target.value)
    }
    return (
        <Box sx={searchBox}>
            <SearchIcon color="primary" sx={{ boxShadow: '0 0 10px #FD510C', border:'none',mr: 1, my: 0.5 }} />
            <TextField 
                onChange={handleChange} 
                label="Search for job title..." 
                value={searchTerm}
                id="input-with-sx" 
                variant="standard" 
                autoFocus= {true}
                color='primary'
        />
      </Box>
    )
}



export default SearchBar;