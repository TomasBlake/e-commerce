import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useLocation, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import path from "path";
import { Box } from "@mui/material";

interface Props {}

const BreadCrumbs: React.FC<Props> = ({}) => {
  const { pathname } = useLocation();
  console.log("PATH:", pathname);
  const splitedPath = pathname.split("/");
  const pathArr =
    pathname.split("/")[splitedPath.length - 1] === ""
      ? splitedPath.slice(0, splitedPath.length - 1)
      : splitedPath;

  return (
    <Box m="25px">
      <Breadcrumbs aria-label="breadcrumb">
        {pathArr.length > 1 &&
          pathArr.map((el, idx) => {
            if (idx === 0) {
              return (
                <CustomLink key={0} to="/">
                  Home
                </CustomLink>
              );
            } else {
              return (
                <CustomLink
                  key={idx}
                  to={`${pathArr.slice(0, idx + 1).join("/")}`}
                >
                  {el}
                </CustomLink>
              );
            }
          })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbs;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: lightgrey;
  }
`;
