import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams
} from "react-router-dom";

import Vibe from './pages/Vibe'

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
      <Switch>
        {/* <Route path="/u/:username" children={<User />} /> */}
        <Route path="/v/:vibename" children={<Vibe />} />
      </Switch>
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

// [
//   {
//       "id": "80c439ab-3305-46b5-8d6a-1a329bffc047",
//       "name": "bingo",
//       "description": "bongo",
//       "avatar": null,
//       "contributorIds": null,
//       "createdAt": "2021-04-29T05:43:55.335Z",
//       "updatedAt": "2021-04-29T05:43:55.335Z"
//   },
//   {
//       "id": "1152bbc1-e3b1-4e08-a84e-91b3c884c104",
//       "name": "bango",
//       "description": "bongo",
//       "avatar": null,
//       "contributorIds": null,
//       "createdAt": "2021-04-29T05:46:33.433Z",
//       "updatedAt": "2021-04-29T05:46:33.433Z"
//   }
// ]