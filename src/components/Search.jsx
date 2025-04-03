import React from "react";
import styles from "./styles_modules/Search.module.css";

function Search({ onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Поиск..."
      onChange={handleSearchChange}
    />
  );
}

export default Search;