import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Index from "./index/Index.jsx";
import Register from "./register/Register.jsx";
class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
