import React from "react";
import "./inputbox.css";
class InputBox extends React.Component {
  render() {
    return (
      <input
        className="input"
        placeholder={this.props.placeholder}
        type={this.props.type}
        onChange={this.props.onChange}
      ></input>
    );
  }
}
export default InputBox;
