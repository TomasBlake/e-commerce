import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ViewCartBtn from "../ViewCartBtn";
import Box from '@mui/material/Box';
import SearchBar from "../SearchBar/SearchBar";
import NavigationMenu from "../NavigationMenu";
import SignInBtn from "../SignInBtn";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import BreadCrumbs from "../BreadCrumbs";

const Header: React.FC = () => {

  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor: "white"}}>
        <Toolbar sx={{
          backgroundColor: "white", 
          display: "flex", 
          justifyContent: "space-between",
          height: 100
          }}>

            <CustomLink to="/">
            <Typography variant="h5" color="black" sx={{textDecoration: "none"}}>
                Warhammer 40K E-Shop
            </Typography>
            </CustomLink>
            <SearchBar/>
      
            <Box sx={{ display: "flex", justifyContent: "space-evenly", width: 300 }}>
            <ViewCartBtn/>
            <SignInBtn/>
            </Box>
        </Toolbar>
        <NavigationMenu/>
      </AppBar>
      <BreadCrumbs />
      </Box>
  );
};

export default Header;

const CustomLink = styled(Link)`
text-decoration: none;
`;