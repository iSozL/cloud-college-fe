import React from "react";
import "./inputline.css";
function InputLine(props) {
  return (
    <div class="group">      
      <input type="text" required onChange={props.onChange} />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{props.name}:</label>
    </div>
  );
}
export default InputLine;
