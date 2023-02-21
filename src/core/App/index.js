import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight } from "./theme";
import { PersonalHomepage } from "../../features/PersonalHomepage";
import { Normalize } from "styled-normalize";
import store from "./store"

function App() {
  return (

    <Provider store={store}>
      <ThemeProvider theme={themeLight}>
        <Normalize />
        <GlobalStyle />
        <PersonalHomepage />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
