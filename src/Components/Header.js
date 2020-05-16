import React from 'react';

class Header extends React.Component {
    state = {
        listType: 'Celestial Obj'
    }

    handleFilter = (event) => {
        if (event.target.value !== 'select')
        {this.setState({listType: event.target.value})
        console.log(this.state)}
    }

    render() {
        return (
            <header className="App-header">
                <h1>
                    ASTRO-LOG
            </h1>
                <label className='showMe'>Show me:
                    <select className='select' name='filter' onChange={this.handleFilter} value={this.state.listType}>
                        <option className='selectBoxText' value='select'>Select</option>
                        <option value='celestial objects'>All</option>
                        <option value='galaxy'>Galaxies</option>
                        <option value='lunar'>Lunar</option>
                        <option value='nebula'>Nebulae</option>
                        <option value='planet'>Planets</option>
                    </select>
                </label>
                <hr />
                <h2>
                    My {this.state.listType} observing list
      </h2>

            </header>
        );
    }
}

export default Header;