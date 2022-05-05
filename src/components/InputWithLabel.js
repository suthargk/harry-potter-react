import React from "react";
import SearchIcon from "../icons/SearchIcon";

const InputWithLabel = ({
  children,
  id,
  type = "text",
  value,
  onHandleChange = (f) => f,
  onHandleSubmit = (f) => f,
}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor={id} style={{ display: "none" }}>
        {children}
      </label>
      <div className="search-input-with-button">
        <input
          className="search-input"
          id={id}
          type={type}
          value={value}
          onChange={onHandleChange}
          placeholder="Search..."
        />
        <button type="submit" disabled={!value} className="search-button">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default InputWithLabel;
