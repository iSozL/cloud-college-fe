import React from 'react';
import './textbox.css'
function TextBox(props) {
  return(
    <div className="text-box" style={{width: props.width, marginTop: props.marginTop}}>
      {props.children}
    </div>
  )
}
export default TextBox