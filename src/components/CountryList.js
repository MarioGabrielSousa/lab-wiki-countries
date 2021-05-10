import React from 'react';
import { NavLink } from 'react-router-dom';

function CountryList({ countries }) {
  return (
    <ul>
      {countries.map((country, index) => {
        return (
          <li key={index}>
            <NavLink to={`/${country.alpha3Code}`}>{country.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default CountryList;
