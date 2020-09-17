import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <>
      <input
        name={props.Name}
        placeholder={props.Placeholder}
        value={props.Value}
        onChange={(event) => props.OnChange(event)}
      />
    </>
  );
};

Input.propTypes = {
  Name: PropTypes.string.isRequired,
  Placeholder: PropTypes.string.isRequired,
  Value: PropTypes.any,
  OnChange: PropTypes.func.isRequired,
};

export default Input;
