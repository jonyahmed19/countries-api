import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  let URL = "https://restcountries.com/v2/all";

  const searchFilter = (e) => {
    const region = e.target.value.toLowerCase();

    if (region !== "all") {
      URL = `https://restcountries.com/v2/region/${region}`;
    } else {
      URL = "https://restcountries.com/v2/all";
    }
    countiesData(URL);
  };

  const countiesData = async (URL) => {
    const countiesFetch = await fetch(URL);
    const countiesRes = await countiesFetch.json();
    setCountriesList(countiesRes);
  };
  useEffect(() => {
    countiesData(URL);
  }, []);

  let text = "";
  const searchInput = (e) => {
    text = e.target.value;
  };

  const searchButton = (e) => {
    searchCountry(text);
    e.preventDefault();
  };

  const searchCountry = (searchTxt = "") => {
    if (countriesList.length > 0) {
      const data = countriesList.filter((country) => {
        return country.name.toLowerCase().includes(searchTxt.toLowerCase());
      });
      setFilteredList(data);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Filter
            searchFilter={searchFilter}
            search={searchButton}
            searchtext={searchInput}
          />
          <Countries
            countriesList={
              filteredList.length > 0 ? filteredList : countriesList
            }
          />
        </Route>
        <Route path="/countries/:name" children={<CountryInfo />}></Route>
      </Router>
    </div>
  );
}

export default App;
