import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { planets, setPlanets } = useContext(AppContext);
  // const { results } = planets;

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
          {planets.map((item) => (
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

      {/* <ul>
        {planets.map((item) => (<li key={ item.name }>{item.name}</li>))}
      </ul> */}

      {/* {console.log('oi', planets)} */}

      <button
        type="button"
        onClick={ () => setPlanets([]) }
      >
        Click
      </button>
    </div>
  );
};

export default Table;
