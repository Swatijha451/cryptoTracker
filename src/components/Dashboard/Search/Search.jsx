// import React, { useState } from "react";
import styles from "./Search.module.css"
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, handleChange }) {
  return (
    <div className={styles.searchFlex}>
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className={styles.searchInput}
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;