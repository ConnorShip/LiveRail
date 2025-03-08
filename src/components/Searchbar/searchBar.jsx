import lineNames from './lineNames';
import {useState} from 'react';

function SearchBar({ onSelect }) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = e => {
    const value = e.target.value.toLowerCase();
      setSearch(value);

      if(value) {
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
    <div>
      <input
        type="text"
        placeholder="Search lines..."
        value={search}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((line) => (
            <li key={line} onClick={() => handleSelect(line)}>
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

