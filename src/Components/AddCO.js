import React from 'react';

class AddCO extends React.Component {
    state = {
        name: '',
        category: '',
        seen: false,
        imaged: false,
        imageURL: '',    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addCOToState(this.state)
        this.setState({name: '', category: ''
        }) 
    }

    handleInputChange = (event) => {    
        const { name, value } = event.target
        this.setState({[name]: value});
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <label>New Target: </label>
                <input name='name' onChange={this.handleInputChange} value={this.state.name}/>
                <label>Category: </label>
                <select name='category' onChange={this.handleInputChange} value={this.state.category}>
                    <option value='None'>Select</option>
                    <option value='Galaxy'>Galaxy</option>
                    <option value='Lunar'>Lunar</option>
                    <option value='Nebula'>Nebula</option>
                    <option value='Planet'>Planet</option>
                </select>
                <button>Add Target</button>
            </form>

        )
    }
}

export default AddCO;

//<input list='Categories' name='category' onChange={this.handleInputChange} value={this.state.category}/>