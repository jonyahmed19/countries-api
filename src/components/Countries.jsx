import React, { useState, useEffect } from "react";

const URL = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countriesList, setCountriesList] = useState([]);

  const countiesData = async () => {
    const countiesFetch = await fetch(URL);
    const countiesRes = await countiesFetch.json();
    setCountriesList(countiesRes);
  };

  useEffect(() => {
    countiesData();
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
                  Population: <span>{population}</span>
                </p>
                <p className="region">
                  Region: <span>{region}</span>
                </p>
                <p className="capital">
                  Capital: <span>{capital}</span>
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
