import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";

import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
