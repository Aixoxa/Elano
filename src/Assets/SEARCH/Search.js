import React from "react";
import "./Search.css";

function Search() {
  return (
    <div style={{ borderBottom: "1px solid rgb(179, 177, 177)", paddingBottom:20}}>
      <form data-type="search-bar">
        <input type="text" placeholder="Search" />
        <img src="../images/icons/search.png" alt="" />
      </form>
    </div>
  );
}

export default Search;
