import SearchBar from "./searchBar";
import './header.css'

function Header({setLineName}) {
    return (
        <div id="header">
            <div id="innerHead">
                <div id="searchWrapper">
                <SearchBar onSelect={setLineName}/>
                </div>
            </div>
        </div>
    )
}

export default Header;