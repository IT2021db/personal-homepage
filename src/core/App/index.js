import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import { selectIsDark } from "../../features/PersonalHomepage/ThemeSwitcher/themeSwitcherSlice";
import { PersonalHomepage } from "../../features/PersonalHomepage";

function App() {
  const isDark = useSelector(selectIsDark);
 
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
