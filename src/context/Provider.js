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
  // STATE DOS PLANETAS
  const [planets, setPlanets] = useState([]);

  // FILTRO DO NOME
  const [planetNameFilter, setPlanetName] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

  // FILTRO DO VALOR
  const [planetValueFilter, setPlanetValue] = useState({
    filterByNumericValues: [
    //   {
    //     column: 'population',
    //     comparison: 'menor que',
    //     value: 1001,
    //   },
    //   {
    //     column: 'diameter',
    //     comparison: 'menor que',
    //     value: 10201,
    //   },
    ],
  });

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  // PARA CADA STATE, PRECISA PASSAR O CONTEXT PARA O CHILDREN NO RETURN
  const contextValue = {
    planets,
    setPlanets,
    planetNameFilter,
    setPlanetName,
    planetValueFilter,
    setPlanetValue,
  };

  // USE EFFECT PARA PEGAR OS PLANETAS DA API
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
