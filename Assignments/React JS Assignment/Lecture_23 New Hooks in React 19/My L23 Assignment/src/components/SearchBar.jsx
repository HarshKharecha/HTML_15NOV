import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const styles = {
    input: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "6px",
      border: "1px solid #334155",
      backgroundColor: "#1e293b",
      color: "#ffffff",
      marginBottom: "1.5rem",
      boxSizing: "border-box",
    },
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={styles.input}
    />
  );
}

export default SearchBar;