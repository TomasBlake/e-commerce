import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import theme from "./Theme";
import routes from "./routes";
import Layout from "./component/Layout";
import { login, logOut, authSelector, CurrentUser } from './features/authSlice';
import { useAppDispatch, useAppSelector } from "./hooks";

const App: React.FC = () => {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route path={routes.home} exact>
                <Link to={routes.products}>
                  <h1>Test Link to products</h1>
                </Link>
              </Route>
              <Route path={routes.products} exact>
                <Link to={routes.home} >
                  <h1>Test Link to homepage</h1>
                </Link>
              </Route>
              <Route path={routes.basket} exact></Route>
              <Route path={routes.contact} exact></Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
