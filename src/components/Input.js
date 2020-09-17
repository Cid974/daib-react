import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    return (
      <>
        <input
          name={this.props.Name}
          placeholder={this.props.Placeholder}
          value={this.props.Value}
          onChange={(event) => this.props.OnChange(event)}
        />
      </>
    );
  }
}

Input.propTypes = {
  Name: PropTypes.string.isRequired,
  Placeholder: PropTypes.string.isRequired,
  Value: PropTypes.any,
  OnChange: PropTypes.func.isRequired,
};

export default Input;
