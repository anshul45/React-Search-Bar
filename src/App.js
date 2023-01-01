import { useState } from "react";
import "./app.css";
import { cities } from "./cities";
import Table from "./Table";
function App() {
  const [query, setQuery] = useState("");
  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.state.toLowerCase().includes(query)
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
