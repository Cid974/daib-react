import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    return (
      <>
        {this.props.OnClick === undefined ? (
          <button style={{ color: this.props.FontColor }}>
            {this.props.Text}
          </button>
        ) : (
          <button
            style={{ color: this.props.FontColor }}
            onClick={this.props.OnClick}
          >
            {this.props.Text}
          </button>
        )}
      </>
    );
  }
}

Button.propTypes = {
  Text: PropTypes.string,
  FontColor: PropTypes.string,
  OnClick: PropTypes.func,
};

export default Button;
