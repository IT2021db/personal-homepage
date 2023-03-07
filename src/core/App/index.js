import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import { selectIsDark } from "../../common/ThemeSwitcher/themeSwitcherSlice";
import { PersonalHomepage } from "../../features/PersonalHomepage";

function App() {
  const isDark = useSelector(selectIsDark);
  console.log(`isDark in app:${isDark}`);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
