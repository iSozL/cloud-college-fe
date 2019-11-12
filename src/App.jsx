import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx'
import './app.css'

function App() {
  return(
    <div style={{fontFamily: 'hanyi'}}>
      <Routes />
    </div>
  )
}
ReactDOM.render(<App />, document.body)