import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";
import Registration from "./components/Registration";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/video/:courseName" component={VideoPage} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
