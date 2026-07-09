import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("EVENT::", event);
    console.log("SEARCH TERM::", searchTerm);
    onSearch(searchTerm);
    setSearchTerm("");
  }

  return (
    <div className="mb-3 d-flex flex-row align-items-center justify-content-between gap-2 mt-3">
      <form onSubmit={handleSubmit} className="d-flex flex-grow-1">
        <input
          type="text"
          className="form-control me-2 flex-grow-1 width-auto"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            handleSubmit();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
