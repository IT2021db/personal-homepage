import { ThemeProvider } from "styled-components";
//import { Provider } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight } from "./theme";
import { PersonalHomepage } from "../../features/PersonalHomepage";
import { Normalize } from "styled-normalize";

function App() {
  return (
 
      <ThemeProvider theme={themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  
  );
}

export default App;
