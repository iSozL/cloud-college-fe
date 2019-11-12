import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const Index = React.lazy(() => import("./index/Index.jsx"));
const Login = React.lazy(() => import("./register/Register.jsx"));
const Register = React.lazy(() => import("./login/Login.jsx"))
class Routes extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}
export default Routes;
