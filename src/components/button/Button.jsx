import React from 'react';
import './button.css'
function Button(props) {
  return(
    <div className="button" style={props.style}>{props.name}</div>
  )
}
export default Button