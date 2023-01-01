import { useState } from "react";
import "./app.css";
import { cities } from "./cities";
import Table from "./Table";
function App() {
  const [query, setQuery] = useState("");
  const keys = ["name", "state"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        className="search"
        placeholder="search.."
        type="text"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(cities)} />
    </div>
  );
}

export default App;
