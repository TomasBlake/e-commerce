import React from "react";
import {
  MenuList,
  MenuItem,
  Paper,
  ClickAwayListener,
} from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { NavLink } from "react-router-dom";
import { Category, Subcategory } from "../Types";
import Typography from '@mui/material/Typography';

type VirtualElement = {
  getBoundingClientRect: () => DOMRect,
  contextElement?: Element,
};

interface IProps {
  category: Category;
  anchorEl: VirtualElement | (() => VirtualElement) | null | undefined;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavListBtn: React.FC<IProps> = ({ category, anchorEl, open, setOpen }: IProps) => {
  const { subcategories } = category;

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement={"bottom"}
        transition
        key={category.id}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={500}>
            <Paper sx={{ 
              position: "relative", 
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0 
              }}>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                >
                  {subcategories && subcategories.map((subcategory: Subcategory) => (
                    <NavLink style={{ textDecoration: "none", color: "black" }} to={`/${category.name}/${subcategory.name}`}>
                    <MenuItem onClick={handleClose} key={subcategory.id}>
                      <Typography variant="button">
                      {subcategory.name}
                      </Typography>
                    </MenuItem>
                    </NavLink>
                  ))}
                </MenuList>
                </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
  );
};

export default NavListBtn;

