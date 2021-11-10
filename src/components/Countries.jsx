import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countriesList, setCountriesList] = useState([]);

  const countiesData = async (URL) => {
    const countiesFetch = await fetch(URL);
    const countiesRes = await countiesFetch.json();
    setCountriesList(countiesRes);
  };
  const removeCountry = (args) => {
    if (countriesList.length > 0) {
      const filteredCountry = countriesList.filter((country) => {
        return country.numericCode != args;
      });
      setCountriesList(filteredCountry);
    }
  };

  useEffect(() => {
    countiesData(URL);
  }, []);

  return (
    <div className="container">
      <div className="countries">
        {countriesList.map((count) => {
          const { numericCode, name, population, region, capital, flag } =
            count;

          return (
            <section key={numericCode} className="country">
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
                <p className="bottom-info">
                  <Link className="btn" to={`/countries/${name.toLowerCase()}`}>
                    Learn More
                  </Link>
                  <button
                    onClick={() => removeCountry(numericCode)}
                    className="btn btn-remove"
                  >
                    Remove Country
                  </button>
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
