import React from 'react';
import './button.css'
function Button(props) {
  return(
    <div className="button">{props.name}</div>
  )
}
export default Button