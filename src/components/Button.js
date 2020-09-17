import React from "react";

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

export default Button;
