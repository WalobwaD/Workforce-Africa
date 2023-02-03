import { useContext} from "react"
import {Search, SearchIconWrapper, StyledInputBase} from "./styles"
import SearchIcon from "@mui/icons-material/Search"
import { SearchContext } from "../../../context/searchContext"

const SearchBar = ()=> {
    const {searchTerm, setSearch} = useContext(SearchContext)
    const handleChange = (e)=> {
        setSearch(e.target.value)
    }
    return (

        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for job title ..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                value={searchTerm}
                variant= 'standard'
            />
        </Search>
    )
}

export default SearchBar;