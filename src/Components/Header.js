import React from 'react';

class Header extends React.Component {
    state = {
        listType: 'Celestial Obj',
    };

    

    render() {
        return (
            <header className="App-header">
                <h1>
                    ASTRO-LOG <span role='img' aria-label='telescope' className='telescope'>🔭</span> 
            </h1>
            </header>
        );
    };
};

export default Header;