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
    ' ';

    if (planet.name.includes(planetNameFilter.filterByName.name)) {
      filtered.push(planet);
    }
    // console.log(filtered);
    return filtered;
  }, []);

  // PRIMEIRA TENTATIVA USANDO SPLICE - REMOVENDO
  // https://stackoverflow.com/questions/34398279/map-and-filter-an-array-at-the-same-time
  //   if (planet.name.includes(planetNameFilter.filterByName.name)) {
  //     planetValueFilter.filterByNumericValues.forEach((item) => {
  //       const columnFilter = item.column;
  //       const valueFilter = item.value;
  //       console.log(filtered);

  //       // MAIOR QUE
  //       if (
  //         item.comparison === 'maior que'
  //         && filtered.includes(planet)
  //         && planet[columnFilter] < valueFilter
  //       ) {
  //         console.log('nao passou');
  //         filtered.splice(filtered.indexOf(planet), filtered.indexOf(planet));
  //       }

  //       // MENOR QUE
  //       if (
  //         item.comparison === 'menor que'
  //         && filtered.includes(planet)
  //         && planet[columnFilter] > valueFilter
  //       ) {
  //         console.log('nao passou');
  //         filtered.splice(filtered.indexOf(planet), filtered.indexOf(planet));
  //       }
  //     });
  //   }
  //   return filtered;
  // }, [...planets]);

  // SEGUNDA TENTATIVA USANDO PUSH
  // Using reduce to filter population
  const planetsWithPopulationFilter = planetsWithFilter.reduce((filtered, planet) => {
    const populationNumercValue = planetValueFilter.filterByNumericValues.find(
      (x) => x.column === 'population',
    );
    if (populationNumercValue !== undefined
      && populationNumercValue.comparison === 'maior que'
      && (planet.population > populationNumercValue.value)) {
      filtered.push(planet);
    }
    if (populationNumercValue !== undefined
      && populationNumercValue.comparison === 'menor que'
      && planet.population < populationNumercValue.value) {
      filtered.push(planet);
    }
    if (populationNumercValue !== undefined
      && populationNumercValue.comparison === 'igual a'
      && planet.population === populationNumercValue.value) {
      filtered.push(planet);
    }
    if (populationNumercValue === undefined) {
      filtered.push(planet);
    }
    return filtered;
  }, []);

  // Using reduce to filter Diameter
  const planetsWithDiameterFilter = planetsWithPopulationFilter.reduce(
    (filtered, planet) => {
      const diameterNumercValue = planetValueFilter.filterByNumericValues.find(
        (x) => x.column === 'diameter',
      );
      if (diameterNumercValue !== undefined
      && diameterNumercValue.comparison === 'maior que'
      && (planet.diameter > diameterNumercValue.value)) {
        filtered.push(planet);
      }
      if (diameterNumercValue !== undefined
      && diameterNumercValue.comparison === 'menor que'
      && planet.diameter < diameterNumercValue.value) {
        filtered.push(planet);
      }
      if (diameterNumercValue !== undefined
      && diameterNumercValue.comparison === 'igual a'
      && planet.diameter === diameterNumercValue.value) {
        filtered.push(planet);
      }
      if (diameterNumercValue === undefined) {
        filtered.push(planet);
      }
      return filtered;
    }, [],
  );

  // Using reduce to filter Orbital Period
  const planetsWithOrbitalFilter = planetsWithDiameterFilter.reduce(
    (filtered, planet) => {
      const orbitalNumercValue = planetValueFilter.filterByNumericValues.find(
        (x) => x.column === 'orbital_period',
      );
      if (orbitalNumercValue !== undefined
      && orbitalNumercValue.comparison === 'maior que'
      && (planet.orbital_period > orbitalNumercValue.value)) {
        filtered.push(planet);
      }
      if (orbitalNumercValue !== undefined
      && orbitalNumercValue.comparison === 'menor que'
      && planet.orbital_period < orbitalNumercValue.value) {
        filtered.push(planet);
      }
      if (orbitalNumercValue !== undefined
      && orbitalNumercValue.comparison === 'igual a'
      && planet.orbital_period === orbitalNumercValue.value) {
        filtered.push(planet);
      }
      if (orbitalNumercValue === undefined) {
        filtered.push(planet);
      }
      return filtered;
    }, [],
  );

  // Using reduce to filter Rotation Period
  const planetsWithRotationFilter = planetsWithOrbitalFilter.reduce(
    (filtered, planet) => {
      const rotationNumercValue = planetValueFilter.filterByNumericValues.find(
        (x) => x.column === 'rotation_period',
      );
      if (rotationNumercValue !== undefined
      && rotationNumercValue.comparison === 'maior que'
      && (planet.rotation_period > rotationNumercValue.value)) {
        filtered.push(planet);
      }
      if (rotationNumercValue !== undefined
      && rotationNumercValue.comparison === 'menor que'
      && planet.rotation_period < rotationNumercValue.value) {
        filtered.push(planet);
      }
      if (rotationNumercValue !== undefined
      && rotationNumercValue.comparison === 'igual a'
      && planet.rotation_period === rotationNumercValue.value) {
        filtered.push(planet);
      }
      if (rotationNumercValue === undefined) {
        filtered.push(planet);
      }
      return filtered;
    }, [],
  );

  // Using reduce to filter Water
  const planetsWithWaterFilter = planetsWithRotationFilter.reduce(
    (filtered, planet) => {
      const waterNumercValue = planetValueFilter.filterByNumericValues.find(
        (x) => x.column === 'surface_water',
      );
      if (waterNumercValue !== undefined
      && waterNumercValue.comparison === 'maior que'
      && (planet.surface_water > waterNumercValue.value)) {
        filtered.push(planet);
      }
      if (waterNumercValue !== undefined
      && waterNumercValue.comparison === 'menor que'
      && planet.surface_water < waterNumercValue.value) {
        filtered.push(planet);
      }
      if (waterNumercValue !== undefined
      && waterNumercValue.comparison === 'igual a'
      && planet.surface_water === waterNumercValue.value) {
        filtered.push(planet);
      }
      if (waterNumercValue === undefined) {
        filtered.push(planet);
      }
      return filtered;
    }, [],
  );

  return (

    <div>
      <table>

        <thead>
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
        </thead>

        <tbody>
          {planetsWithWaterFilter.map((item) => (
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
