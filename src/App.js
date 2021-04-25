import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

// <Link to="/account?name=modus-create">Modus Create</Link>
export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/u/:username" children={<User />} />
          <Route path="/v/:vibename" children={<Vibe />} />
        </Switch>
    </Router>
  );
}

function User() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { username } = useParams();

  return (
    <div>
      <h3>username: {username}</h3>
    </div>
  );
}

function Vibe() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { vibename } = useParams();

  return (
    <div>
      <h3>vibename: {vibename}</h3>
    </div>
  );
}