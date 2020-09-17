import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <>
      {props.OnClick === undefined ? (
        <button style={{ color: props.FontColor }}>{props.Text}</button>
      ) : (
        <button style={{ color: props.FontColor }} onClick={props.OnClick}>
          {props.Text}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  Text: PropTypes.string,
  FontColor: PropTypes.string,
  OnClick: PropTypes.func,
};

export default Button;
