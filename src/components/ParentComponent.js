import React from "react";
// this is the child
import Form from "./Form";
// this is a sibling
import DisplayData from "./DisplayData";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }
  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;
