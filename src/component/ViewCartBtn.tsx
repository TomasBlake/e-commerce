import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {}

const ViewCartBtn: React.FC<Props> = ({}) => {
  return (
    <Button
      variant="outlined"
      startIcon={<ShoppingCartIcon />}
      className="snipcart-checkout"
    >
      View Cart
    </Button>
  );
};

export default ViewCartBtn;
