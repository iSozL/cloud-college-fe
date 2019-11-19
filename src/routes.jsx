import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const Index = React.lazy(() => import("./index/Index.jsx"));
const Login = React.lazy(() => import("./register/Register.jsx"));
const Register = React.lazy(() => import("./login/Login.jsx"));
const Forget = React.lazy(() => import("./forget/Forget.jsx"));
const UserMsg = React.lazy(() => import("./userMsg/UserMsg.jsx"))
const IsCreate = React.lazy(() => import("./isCreate/IsCreate.jsx"))
const Create = React.lazy(() => import("./create/Create.jsx"))
const CreateRoom = React.lazy(() => import("./createRoom/CreateRoom.jsx"))
const Search = React.lazy(() => import("./search/Search.jsx"))
const RoomMsg = React.lazy(() => import("./roomMsg/RoomMsg.jsx"))
import Loading from "./components/loading/Loading.jsx";
class Routes extends React.Component {
  render() {
    return (
      <React.Suspense fallback={Loading}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forget" component={Forget} />
            <Route path="/usermsg" component={UserMsg} />
            <Route path="/iscreate" component={IsCreate} />
            <Route path="/create" component={Create} />
            <Route path="/createroom" component={CreateRoom} />
            <Route path="/createroom" component={CreateRoom} />
            <Route path="/search" component={Search} />
            <Route path="/roommsg" component={RoomMsg} />
          </Switch>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}
export default Routes;
