import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const {
    planets,
    planetNameFilter,
    planetValueFilter,
  } = useContext(AppContext);
  // const { results } = planets;

  // Using reduce to filter name
  const planetsWithFilter = planets.reduce((filtered, planet) => {
    // https://stackoverflow.com/questions/34398279/map-and-filter-an-array-at-the-same-time
    if (planet.name.includes(planetNameFilter.filterByName.name)) {
      planetValueFilter.filterByNumericValues.forEach((item) => {
        const columnFilter = item.column;
        const valueFilter = item.value;
        // const nameFilter = filtered.name;
        // console.log(filtered);
        // MAIOR QUE
        if (
          item.comparison === 'maior que'
          && planet[columnFilter] > valueFilter
        ) {
          filtered.push(planet);
          // filtered.splice(filtered.indexOf(planet), filtered.indexOf(planet));
        }
        // MENOR QUE
        if (
          item.comparison === 'menor que'
          && planet[columnFilter] < valueFilter
        ) {
          filtered.push(planet);
          // filtered.splice(filtered.indexOf(planet), filtered.indexOf(planet));
        }
        // IGUAL A
        if (
          item.comparison === 'igual a'
          && planet[columnFilter] === valueFilter
        ) {
          filtered.push(planet);
          // filtered.splice(filtered.indexOf(planet), filtered.indexOf(planet));
        }
      });
    }
    return filtered;
  }, []);

  // Using reduce to filter population
  // const planetsWithPopulationFilter = planets.reduce((filtered, planet) => {
  //   const populationNumercValue = planetValueFilter.filterByNumericValues.find((x) => x.column === 'population');
  //   if (populationNumercValue.comparison === 'maior que'
  //     && (planet.population > populationNumercValue.value)) {
  //     filtered.push(planet);
  //   }
  //   if (populationNumercValue.comparison === 'menor que'
  //     && planet.population < populationNumercValue.value) {
  //     filtered.push(planet);
  //   }
  //   if (populationNumercValue.comparison === 'igual a'
  //     && planet.population === populationNumercValue.value) {
  //     filtered.push(planet);
  //   }
  //   return filtered;
  // }, []);

  // Using reduce to filter Diameter
  // const planetsWithDiameterFilter = planets.reduce((filtered, planet) => {
  //   const diameterNumercValue = planetValueFilter.filterByNumericValues.find((x) => x.column === 'diameter');
  //   if (diameterNumercValue.comparison === 'maior que'
  //     && (planet.diameter > diameterNumercValue.value)) {
  //     filtered.push(planet);
  //   }
  //   if (diameterNumercValue.comparison === 'menor que'
  //     && planet.diameter < diameterNumercValue.value) {
  //     filtered.push(planet);
  //   }
  //   if (diameterNumercValue.comparison === 'igual a'
  //     && planet.diameter === diameterNumercValue.value) {
  //     filtered.push(planet);
  //   }
  //   return filtered;
  // }, []);

  return (

    <div>
      <table>

        <tbody>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </tbody>

        <tbody>
          {planetsWithFilter.map((item) => (
            <tr key={ item.name }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
