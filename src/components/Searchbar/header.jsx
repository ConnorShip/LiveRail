import SearchBar from "./searchBar";
import './header.css'

function Header({setLineName}) {
    return (
        <div id="innerHead">
            <span id="logo">LiveRail</span>
            <SearchBar onSelect={setLineName} id="search"/>
        </div>
    )
}

export default Header;