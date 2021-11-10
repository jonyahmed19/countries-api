import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";
import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Filter />
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<CountryInfo />}></Route>
      </Router>
    </div>
  );
}

export default App;
