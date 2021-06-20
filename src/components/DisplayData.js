import React from "react";

class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <span>
          <h1>{this.props.formData.firstName}</h1>
          <h1>{this.props.formData.lastName}</h1>
        </span>
      </div>
    );
  }
}

export default DisplayData;
