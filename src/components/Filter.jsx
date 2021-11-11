import React from "react";
import { FaSearch } from "react-icons/fa";

const Filter = ({ search, searchtext, searchFilter }) => {
  return (
    <div className="container">
      <section className="filter">
        <form className="form-control" onSubmit={search}>
          <button type="submit">
            <FaSearch />
          </button>
          <input
            placeholder="Search for a country.."
            type="search"
            name="search"
            id="search"
            onChange={searchtext}
          />
        </form>
        <div>
          <select name="select" id="select" onChange={searchFilter}>
            <option value="all">Filter by region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Filter;
