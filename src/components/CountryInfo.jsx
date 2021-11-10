import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./CountryInfo.css";

const CountryInfo = () => {
  const { name } = useParams();

  const [country, setCountry] = useState([]);

  const countryFetch = async () => {
    const countiesFetch = await fetch(
      `https://restcountries.com/v2/name/${name}`
    );
    const countiesRes = await countiesFetch.json();
    setCountry(countiesRes);
  };
  useEffect(() => {
    countryFetch();
  }, []);

  return (
    <div className="container">
      <div className="country-info">
        <div className="btn-area">
          <Link className="btn btn-back" to="/">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
        <div className="country-bottom">
          {country.map((c) => {
            const {
              name,
              flag,
              population,
              region,
              subregion,
              borders,
              currencies,
              languages,
              nativeName,
              capital,
              topLevelDomain,
              numericCode,
            } = c;

            const saltedValue = (data, border = false) => {
              if (data !== undefined) {
                if (typeof data === "object" && border === false) {
                  let i = 0;
                  return data.map((val) => {
                    i++;
                    if (i > 1) {
                      return ", " + val.name;
                    } else {
                      return val.name;
                    }
                  });
                } else if (border === true) {
                  let b = 0;
                  return data.map((val) => {
                    b++;
                    if (b > 1) {
                      return ", " + val;
                    } else {
                      return " " + val;
                    }
                  });
                } else {
                  return ` ${data}`;
                }
              } else {
                return " N/A";
              }
            };

            return (
              <article key={numericCode}>
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>
                <div className="country-stats">
                  <h1>{name}</h1>
                  <div className="info-second">
                    <div className="left-info">
                      <p>
                        Native Name: <span>{nativeName}</span>
                      </p>
                      <p>
                        Population: <span>{population.toLocaleString()}</span>
                      </p>
                      <p>
                        Region: <span>{region}</span>
                      </p>
                      <p>
                        Sub Region: <span>{subregion}</span>
                      </p>
                      <p>
                        Capital: <span>{saltedValue(capital)}</span>
                      </p>
                    </div>
                    <div className="right-info">
                      <p>
                        Top Level Domain: <span>{topLevelDomain}</span>
                      </p>
                      <p>
                        Currencies: <span>{saltedValue(currencies)}</span>
                      </p>
                      <p>
                        languages: <span>{saltedValue(languages)}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-bottom">
                  <p>
                    Borders:
                    <span>{saltedValue(borders, true)}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
