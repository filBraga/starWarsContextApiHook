import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Searchbar = () => {
  const { planetName, setPlanetName } = useContext(AppContext);

  function handleChange(event) {
    setPlanetName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="fname">
        Name:
        <input
          type="text"
          id="fname"
          name="fname"
          data-testid="name-filter"
          onChange={ handleChange }
          value={ planetName }
        />
      </label>
    </div>
  );
};

export default Searchbar;
