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
        console.log(this.state)
        if (this.state.name !== '' && this.state.category !== '') {
            this.props.addCOToState(this.state)
            this.setState({
                name: '', category: ''
            })
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form className='COForm' onSubmit={this.handleSubmit}>
                <div className='formContainer'>
                    <label>New Target:
                    <input name='name' className='input' onChange={this.handleInputChange} value={this.state.name} />
                    </label>
                    <label>Category:
                    <select className='select' name='category' onChange={this.handleInputChange} value={this.state.category}>
                            <option className='selectBoxText' value='None'>Select</option>
                            <option value='Galaxy'>Galaxy</option>
                            <option value='Lunar'>Lunar</option>
                            <option value='Nebula'>Nebula</option>
                            <option value='Planet'>Planet</option>
                        </select>
                    </label>

                </div>
                <div className='addButton'>
                    <button>Add Target</button>
                </div>
            </form>
        )
    }
}

export default AddCO;

//<input list='Categories' name='category' onChange={this.handleInputChange} value={this.state.category}/>