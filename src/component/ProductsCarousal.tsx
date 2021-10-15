import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useAppSelector, useGetProductsStrapi } from "../hooks";
import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface Props {}

export const ProductsCarousal: React.FC<Props> = ({}) => {
    useGetProductsStrapi();
    const { products, isLoading } = useAppSelector((state) => {
        return {
            products: state.products.products,
            isLoading: state.products.isLoading
        }});

  return (
      <Box sx={{
          width: "100%", 
          display: "flex", 
          justifyContent: "space-around", 
          margin: "25px 0px",
          boxSizing: "border-box"
          }}>
        <Box sx={{width: "70%"}}>
    <Carousel 
        aria-label="products carousal" 
        // autoPlay 
        centerMode={true}
        centerSlidePercentage={26}
        renderIndicator={(onClickHandler, isSelected, index, label) => null}
        showStatus={false}
        stopOnHover={false}
        // infiniteLoop
        // interval={3000}
        renderArrowPrev={(clickHandler) => <ArrowBackIosNewIcon onClick={clickHandler} sx={{
            position: 'absolute',
            zIndex: 2,
            top: 'calc(50% - 25px)',
            left: "0px",
            width: 30,
            height: 30,
            cursor: 'pointer',
        }} />}
        renderArrowNext={(clickHandler) => <ArrowForwardIosIcon onClick={clickHandler} sx={{
            position: 'absolute',
            zIndex: 2,
            top: 'calc(50% - 25px)',
            right: "0px",
            width: 30,
            height: 30,
            cursor: 'pointer',
        }} />}
        >
      {
          products && products.map((product) => (
            <Box sx={{margin: "5px 0 5px 0"}}>
                <ProductCard product={product}/>
            </Box> 
          ))
      }
    </Carousel>
    </Box>
    </Box>
  );
};

export default ProductsCarousal;
