import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import NavigationMenu from "./NavigationMenu";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            {/* logo */}
            <Typography variant="h5">
                E-Shop
            </Typography>
            {/*Search bar*/}
            {/*Login, Lgout, Registration*/}
            <NavigationMenu/>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);
