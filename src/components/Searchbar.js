import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const Searchbar = () => {
  const {
    planetName,
    setPlanetName,
    setPlanetValue,
    planets,
    setPlanets,
  } = useContext(AppContext);

  const [columnValue, setColumnValue] = useState(0);
  const [comparisonValue, setComparisonValue] = useState(0);
  const [valueValue, setValueValue] = useState(0);
  const [filter, setFilters] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  function handleNameChange(event) {
    setPlanetName({ filterByName: { name: event.target.value } });
  }

  function handleFilterChange() {
    // Clicking only in filter to remove unknown planets
    if (columnValue === 0) {
      const planetsWithFilter = planets.reduce((filtered, planet) => {
        if (planet.population !== 'unknown') {
          filtered.push(planet);
        }
        // console.log(filtered);
        return filtered;
      }, []);
      setPlanets(planetsWithFilter);
    }
    // Add a new filter
    setPlanetValue((prevState) => ({
      // ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues,
        {
          column: columnValue,
          comparison: comparisonValue,
          value: Number(valueValue),
        },
      ],
    }));
    // Remove existing filter from options
    const newFilterList = filter.reduce((filtered, item) => {
      if (item !== columnValue) {
        filtered.push(item);
      }
      return filtered;
    }, []);
    setFilters(newFilterList);
    // Clearing filters
    setColumnValue('');
    setComparisonValue('');
    setValueValue(0);
  }

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
        <select
          name="colum"
          id="colum"
          data-testid="column-filter"
          onChange={ (e) => setColumnValue(e.target.value) }
          value={ columnValue }
        >
          {filter.map((item) => (
            <option key={ item } value={ item }>{item}</option>
          ))}
        </select>
      </label>

      <label htmlFor="operator">
        Operator:
        <select
          name="operator"
          id="operator"
          data-testid="comparison-filter"
          onChange={ (e) => setComparisonValue(e.target.value) }
          value={ comparisonValue }
        >
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
          onChange={ (e) => setValueValue(e.target.value) }
          value={ valueValue }
        />
      </label>

      <button
        onClick={ handleFilterChange }
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>

    </div>
  );
};

export default Searchbar;
