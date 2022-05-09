import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets
          .map((planetas) => (<PlanetCard
            key={ planetas.name }
            planetName={ planetas.name }
            planetImage={ planetas.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
