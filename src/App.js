import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from "./Theme";

function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <div className="App">
      <h1>Test h1</h1>
      <p>test p</p>
      <strong>test strong</strong>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
