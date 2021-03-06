import React from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import useDarkMode from "use-dark-mode";

function App() {
  const darkMode = useDarkMode(false);

  const user = true;
  return (
    <div>
            <ScrollToTop smooth color="#6f00ff" />

      <Topbar darkMode={darkMode} />
      <Switch>
        <Route exact path="/">
          <Home darkMode={darkMode} />
        </Route>
        <Route path="/register">{!user ? <Home /> : <Register />}</Route>
        <Route path="/login">{!user ? <Home /> : <Login />}</Route>
        <Route exact path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route exact path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
