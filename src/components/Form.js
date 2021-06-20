import React from 'react';

class Form extends React.Component {

  render() {
    // this is the props state is passed in as formData
    console.log('this.props.state', this.props.formData)

    return (
      <div>
      <form>
        <input 
         type="text" 
         onChange={event => this.props.handleFirstNameChange(event)} 
         value={this.props.formData.firstName} 
         />
        <input 
        type="text" 
        onChange={event => this.props.handleLastNameChange(event)} 
        value={this.props.formData.lastName} />
        <input type="submit"/>
      </form>
      </div>
    )
    
  }
  
}

export default Form;