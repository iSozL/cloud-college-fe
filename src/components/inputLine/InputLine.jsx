import React from "react";
import "./inputline.css";
function InputLine() {
  return (
    <div class="group">      
      <input type="text" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>
    </div>
  );
}
export default InputLine;
