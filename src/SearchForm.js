import React from "react";
import { useGlobalContext } from "./context";
import "./SearchForm.css";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <div className="search-control">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Search movies</h2>
        <input
          type="text "
          className="form-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="error">
        {error.show && <div className="error">{error.msg}</div>}
      </div>
    </div>
  );
};

export default SearchForm;
