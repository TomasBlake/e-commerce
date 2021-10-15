import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import theme from "./theme";
import routes from "./routes";
import Layout from "./component/Layout";
import ProductsMap from "./component/ProductsMap";
import MultiProductsCarousel from "./component/MultiProductsCarousal";
import { StyledEngineProvider } from '@mui/material/styles';
import ProductPage from "./pages/ProductPage";

const App: React.FC = () => {

  return (
    <>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route path={routes.home} exact>
                <Box mt="50px">
              <MultiProductsCarousel title="News" />
                </Box>
              </Route>
              <Route path={routes.products} exact>
                <ProductsMap></ProductsMap>
              </Route>
              <Route path={routes.product} component={ProductPage}>
              
              </Route>
              <Route path={routes.contact} exact></Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
