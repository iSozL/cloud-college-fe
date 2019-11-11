import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index/Index.jsx'
import './app.css'
function App() {
  return(
    <div className="background">
      <Index />
    </div>
  )
}
ReactDOM.render(<App />, document.body)