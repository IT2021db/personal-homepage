import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight } from "./theme";
import { PersonalHomepage } from "../../features/PersonalHomepage";

 function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
