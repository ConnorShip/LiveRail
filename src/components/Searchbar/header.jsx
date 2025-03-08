import SearchBar from "./searchBar";

function Header({setLineName}) {
    return (
        <header>
            <SearchBar onSelect={setLineName}/>
        </header>
    )
}

export default Header;