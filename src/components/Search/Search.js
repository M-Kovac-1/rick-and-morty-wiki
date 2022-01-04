import React from "react";
import classes from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(event) => {
          setPageNumber(1);
          setSearch(event.target.value);
        }}
        type="text"
        placeholder="Search for characters"
        className={classes.input}
      ></input>
      <button onClick={event => {
        event.preventDefault();
      }} className={`${classes.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
