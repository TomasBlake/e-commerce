import React, { ElementType } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Product } from "../../Types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }: Props) => {
  return (
    <CustomCard>
      <CustomLink
        to={`/${product.category.name}/${product.subcategory.name}/${product.id}`}
      >
        <Box sx={{ height: "60%", overflow: "hidden" }}>
          <StyledCardMedia
            component="img"
            height="100%"
            image={process.env.REACT_APP_STRAPI_BASE_URL + (product.Pictures[0] && product.Pictures[0].url)}
            alt={product.Name}
          />
        </Box>
        <CustomCardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              alignContent: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: 500, fontSize: 19 }}
            >
              {product.Name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "green", fontSize: 17, fontWeight: "bold" }}
            >
              {product.Price} eur
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {product.Description}
          </Typography>
        </CustomCardContent>
        <CardActions
          sx={{ height: "15%", display: "flex", justifyContent: "center" }}
        >
          <Button
            onClick={(e) => e.preventDefault()}
            sx={{ width: "90%" }}
            size="small"
            variant="outlined"
            startIcon={<ShoppingCartOutlinedIcon />}
            className="snipcart-add-item"
            key={product.id}
            data-item-id={product.id}
            data-item-price={product.Price}
            data-item-url="/"
            data-item-description={product.Description}
            data-item-image={
              process.env.REACT_APP_STRAPI_BASE_URL + (product.Pictures[0] && product.Pictures[0].url)
            }
            data-item-name={product.Name}
          >
            Add to Cart
          </Button>
        </CardActions>
      </CustomLink>
    </CustomCard>
  );
};

export default ProductCard;

const CustomCard = styled(Card)`
  width: 250px;
  height: 400px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      2px 2px 1px 0px rgb(0 0 0 / 14%), 
      6px 6px 3px 0px rgb(0 0 0 / 12%);
  }
`;

const CustomCardContent = styled(CardContent)`
  height: 90px;
  overflow: hidden;
  textalign: center;
  textoverflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledCardMedia = styled(
  (props: {
    sx?: SxProps<Theme> | undefined;
    component: ElementType<any>;
    height: string;
    image: string;
    alt: string;
  }) => <CardMedia {...props} />
)`
  transition: all 0.4s ease;
  overflow: hidden;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;
