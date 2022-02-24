import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

// console.log fetch appi
// const planetPromise = async () => {
//   const result = await fetchText();
//   console.log(result);
//   return result;
// };

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const contextValue = {
    planets,
    setPlanets,
  };

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setPlanets(results);
      // console.log(results);
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Provider;
