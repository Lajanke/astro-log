import React from 'react';

class CheckedBox extends React.Component {
    state = { checked: false }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
    render() {
      return (
        <div>
          <label>
            <Checkedbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange} />
            <span>Label Text</span>
          </label>
        </div>    
      ) 
    }
  }

  export default CheckedBox;