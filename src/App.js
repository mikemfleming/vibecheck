import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react'

import './App.css'

import Vibe from './pages/Vibe'
import User from './pages/User'

import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route path="/v/:vibename" children={<Vibe />} />
          <Route path="/u/:username" children={<User />} />
        </Switch>
      </main>
    </Router>
  );
}

export default withAuthenticator(App)
