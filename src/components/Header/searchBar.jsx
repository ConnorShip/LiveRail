import lineNames from "../TrainStatus/lineNames";
import { useState } from "react";
import "./searchBar.css";

function SearchBar({ onSelect }) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (value) {
      setSuggestions(lineNames.filter((line) => line.startsWith(value)));
    } else {
      setSuggestions([]);
      onSelect("");
    }
  };

  const handleSelect = (line) => {
    setSearch(line);
    setSuggestions([]);
    onSelect(line);
  };

  return (
    <div className="searchContainer">
      <input
        className="searchInput"
        type="text"
        placeholder="Search lines..."
        value={search}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestionList">
          {suggestions.map((line) => (
            <li
              className="suggestionItem"
              key={line}
              onClick={() => handleSelect(line)}
            >
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
