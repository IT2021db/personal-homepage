import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme } from "./theme";
import { PersonalHomepage } from "../../features/PersonalHomepage";
import { Normalize } from "styled-normalize";
import store from "./store"

function App() {
  return (

    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Normalize />
        <GlobalStyle />
        <PersonalHomepage />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
