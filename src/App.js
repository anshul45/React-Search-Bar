import { useState } from "react";
import "./app.css";
import { cities } from "./cities";
function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <input
        className="search"
        placeholder="search.."
        type="text"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {cities
          .filter((city) => city.name.toLowerCase().includes(query))
          .map((city) => (
            <li className="listItem" key={city.id}>
              {city.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
