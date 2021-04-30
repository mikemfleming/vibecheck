import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams
} from "react-router-dom";
import './App.css'

import Vibe from './pages/Vibe'

import Nav from './components/Nav'

// import  {useDarkMode} from "./components/useDarkMode"
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./components/globalStyles";
// import { lightTheme, darkTheme } from "./components/Theme"
// import Toggle from "./components/Toggler"

// async function addVibe() {
//   await API.graphql(graphqlOperation(createVibe, {input: vibe}))
// }

export default function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          {/* <Route path="/u/:username" children={<User />} /> */}
          <Route path="/v/:vibename" children={<Vibe />} />
        </Switch>
      </main>
    </Router>
  );
}

// function User() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { username } = useParams();
//   const [theme, themeToggler] = useDarkMode()

//   const themeMode = theme === 'light' ? lightTheme : darkTheme;

//   return (
//     <ThemeProvider theme={themeMode}>
//       <GlobalStyles/>
//       <div>
//         <Toggle theme={theme} toggleTheme={themeToggler} />
//         <h3>username: {username}</h3>
//       </div>
//     </ThemeProvider>

//   );
// }
