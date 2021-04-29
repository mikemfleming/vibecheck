import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import { listVibes } from './graphql/queries';
import { createVibe } from './graphql/mutations'
import { useState, useEffect } from 'react'
import Vibe from './pages/Vibe'

import  {useDarkMode} from "./components/useDarkMode"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import Toggle from "./components/Toggler"
// <Link to="/account?name=modus-create">Modus Create</Link>

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// name: String!
// slug: String!
// description: String!
const vibe = {
  name: 'bango',
  description: 'bongo'
}

export default function App() {
  const [vibes, setVibes] = useState([])

  async function fetchVibes() {
    try {
      const todoData = await API.graphql(graphqlOperation(listVibes))
      setVibes(todoData.data.listVibes.items)
    } catch (err) { console.log('error fetching vibes', err) }
  }

  async function addVibe() {
    await API.graphql(graphqlOperation(createVibe, {input: vibe}))
  }

  useEffect(() => {
    addVibe()
    fetchVibes()
  }, [])

  return <pre>{JSON.stringify(vibes, null, 4)}</pre>

  return (
    <Router>
      <Switch>
        <pre>{JSON.stringify(vibes, null, 4)}</pre>
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
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <div>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <h3>username: {username}</h3>
      </div>
    </ThemeProvider>

  );
}
