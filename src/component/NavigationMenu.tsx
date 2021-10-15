import React, { useState } from "react";
import { Category } from "../Types";
import NavListBtn from "./NavListBtn";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useAppSelector, useGetCategories } from "../hooks";
import { Link, useRouteMatch } from "react-router-dom";

interface Props {}

const NavigationMenu: React.FC<Props> = ({}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<EventTarget & HTMLElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const routeMatch = useRouteMatch(['/Orks', '/Necrons', '/Eldars']);
  const currentTab : string = routeMatch ? routeMatch.path : "hide";

  useGetCategories();
  const { categories, isLoading, error } = useAppSelector((state) => {
    return {
      categories: state.categories.categories,
      isLoading: state.categories.isLoading,
      error: state.categories.error,
    };
  });

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        width: "auto",
        borderTop: "1px solid lightgrey",
        margin: "0px 40px 0px 40px",
        boxSizing: "border-box",
      }}
    >
      <Tabs
        value={currentTab}
        aria-label="categories navigation"
        sx={{ backgroundColor: "white", margin: "0px auto 0px auto" }}
        TabIndicatorProps={ currentTab === "hide" ? { 
            style: {
                display: "none",
            },
          } : undefined}
      >
        {categories &&
          categories.map((category: Category) => {
            return (
              <Tab
                key={category.id}
                value={`/${category.name}`}
                id={category.id}
                label={category.name}
                component={Link}
                to={`/${category.name}`}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onMouseEnter={handleToggle}
                sx={{ color: "black" }}
              />
            );
          })}
           <Tab
                key={"DEFAULT"}
                value={"hide"}
                label={""}
                aria-controls={"hidden"}
                sx={{ padding: "0px", width: "0px", minWidth: "0px"  }}
                disabled
              />
      </Tabs>
      {categories &&
        categories.filter(cat => anchorEl ? anchorEl.id == cat.id : undefined
        ).map((category: Category) => { 
            return (
          <NavListBtn
            category={category}
            key={category.id}
            anchorEl={anchorEl}
            open={open}
            setOpen={setOpen}
          />
        )})}
    </Box>
  );
};

export default NavigationMenu;
