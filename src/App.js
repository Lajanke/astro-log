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
        name: 'Triangulum',
        category: 'Galaxy',
        seen: false,
        imaged: false,
        imageURL: 'https://cdn.astrobin.com/thumbs/mWEfdqWSzfpW_1824x0_kWXURFLk.jpg'
      },
      {
        name: 'Orion',
        category: 'Nebula',
        seen: false,
        imaged: false,
        imageURL: 'https://cdn.astrobin.com/thumbs/jN4Sm3cEjjMM_1824x0_u3kndVub.jpg'
      },
      {
        name: 'Rosette',
        category: 'Nebula',
        seen: false,
        imaged: false,
        imageURL: 'https://cdn.astrobin.com/thumbs/N2dz8aPAB9jb_1824x0_p5FBXZOa.jpg'
      },
      {
        name: 'Jupiter',
        category: 'Planet',
        seen: false,
        imaged: false,
        imageURL: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22946-16.jpg',
      },
      {
        name: 'Moon',
        category: 'Lunar',
        seen: false,
        imaged: false,
        imageURL: 'https://i.imgur.com/TaJpbTB.jpg',
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

  handleFilter = (event) => {
    if (event.target.value !== 'select') {
      console.log('in if')
      this.setState({ listType: event.target.value })
    }
  }

  render() {
    console.log('rendering')
    return (
      <div className='App'>
        <Header listType={this.state.listType} />
        <label className='showMe'>Show me:
            <select className='select' name='filter' onChange={this.handleFilter} value={this.state.listType}>
            <option value='celestial objects'>All</option>
            <option value='Galaxy'>Galaxies</option>
            <option value='Lunar'>Lunar</option>
            <option value='Nebula'>Nebulae</option>
            <option value='Planet'>Planets</option>
          </select>
        </label>
        <hr />
        <h2>
          My {this.state.listType} observing list
      </h2>
        <AddCO addCOToState={this.addCOToState} />
        <AstroList
          celestialObjects={this.state.celestialObjects}
          update={this.updateCelestialObject}
          deleteCO={this.deleteCO}
          handleFilter={this.handleFilter}
          listType={this.state.listType}
        />
      </div>
    );
  };
};

export default App;
