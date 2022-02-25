import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { planets, planetNameFilter /* , setPlanets */ } = useContext(AppContext);
  // const { results } = planets;

  // Using reduce to filter
  // https://stackoverflow.com/questions/34398279/map-and-filter-an-array-at-the-same-time
  const planetsWithNameFilter = planets.reduce((filtered, planet) => {
    if (planet.name.includes(planetNameFilter)) {
      filtered.push(planet);
    }
    return filtered;
  }, []);
  // console.log(planetsWithNameFilter);

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
          {planetsWithNameFilter.map((item) => (
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
