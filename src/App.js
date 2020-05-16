import React from 'react';
import './App.css';
import AstroList from './Components/AstroList.js';
import AddCO from './Components/AddCO.js';
import Header from './Components/Header.js'

class App extends React.Component {
  state = {
    celestialObjects: [
      {
        name: 'Andromeda',
        category: 'Galaxy',
        seen: false,
        imaged: false,
        imageURL: '//cdn.astrobin.com/thumbs/LJOE_pbKTxOl_1824x0_p5FBXZOa.jpg'
      },
      {
        name: 'Jupiter',
        category: 'Solar system',
        seen: false,
        imaged: false,
        imageURL: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22946-16.jpg',
      },
    ],
    listType: 'celestial objects'
  }

  

  addCOToState = (newCO) => {
    this.setState((currentState) => {
      return {
        celestialObjects: [newCO, ...currentState.celestialObjects]
      }
    })
  }

  updateCelestialObject = (celestialObject) => {
    this.setState((currentState) => {
      return {
        celestialObjects: currentState.celestialObjects.map((co) => co.name === celestialObject.name ? celestialObject : co),
      };
    });
  }

  deleteCO = (name) => {
    this.setState((currentState) => {
      return {
          celestialObjects: currentState.celestialObjects.filter((co) => co.name !== name),
      };
    });
  }

  render() {
    return (
      <div className='App'>
        <Header listType={this.state.listType} />
        <AddCO addCOToState={this.addCOToState} />
        <AstroList
          celestialObjects={this.state.celestialObjects}
          update={this.updateCelestialObject}
          deleteCO={this.deleteCO}
        />
      </div>
    )
  }
}

export default App;
