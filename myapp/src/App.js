import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Feedback from "./components/Feedback";
import MockInterview from "./components/MockInterview";
import StudyMaterial from "./components/StudyMaterial";
import Support from "./components/Support";
import VideoPage from "./components/VideoPage";
import Registration from "./components/Registration";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/feedback" component={Feedback} />
      <ProtectedRoute exact path="/mock-interview" component={MockInterview} />
      <ProtectedRoute exact path="/material" component={StudyMaterial} />
      <ProtectedRoute exact path="/support" component={Support} />
      <ProtectedRoute path="/video/:courseName" component={VideoPage} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
