import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Searchbar = () => {
  const { planetName, setPlanetName } = useContext(AppContext);

  function handleNameChange(event) {
    setPlanetName({ filterByName: { name: event.target.value } });
  }

  const addValueFilter = () => {
    console.log('oi');
  };

  return (
    <div>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          data-testid="name-filter"
          onChange={ handleNameChange }
          value={ planetName }
        />
      </label>

      <br />

      <label htmlFor="colum">
        Colum:
        <select name="colum" id="colum" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="operator">
        Operator:
        <select name="operator" id="operator" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="filterValue">
        Value:
        <input
          type="number"
          id="filterValue"
          name="filterValue"
          data-testid="value-filter"
          // onChange={ handleChange }
          // value={ planetName }
        />
      </label>

      <button
        onClick={ addValueFilter }
        type="button"
        data-testid="button-filter"
      >
        Filter

      </button>

    </div>
  );
};

export default Searchbar;
