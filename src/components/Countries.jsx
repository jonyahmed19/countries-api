import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Countries = ({ countriesList }) => {
  return (
    <div className="container">
      <div className="countries">
        {countriesList.map((count) => {
          const { numericCode, name, population, region, capital, flag } =
            count;
          return (
            <Link key={numericCode} to={`/countries/${name.toLowerCase()}`}>
              <section className="country">
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>

                <div className="bottom-part">
                  <h3>{name}</h3>
                  <p className="population">
                    Population: <span>{population.toLocaleString()}</span>
                  </p>
                  <p className="region">
                    Region: <span>{region}</span>
                  </p>
                  <p className="capital">
                    Capital: <span>{capital}</span>
                  </p>
                </div>
              </section>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
