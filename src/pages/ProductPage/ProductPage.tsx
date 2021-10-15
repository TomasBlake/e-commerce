import React from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import Carousel from "react-multi-carousel";
import { responsiveProductPage } from "../../const";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { selectProduct } from "../../app/selectors";

interface Props {}

const ProductPage: React.FC<Props> = ({}: Props) => {
  const { id } =
    useParams<{ category: string; subcategory: string; id: string }>();

  const { product, isLoading, error } = useAppSelector(selectProduct(id));

  console.log("PRODUCT!:", product);

  const CustomRightArrow = ({ onClick }: any) => {
    return (
      <ArrowForwardIosIcon
        sx={{ position: "absolute", right: 0, zIndex: 2, cursor: "pointer" }}
        onClick={onClick}
      />
    );
  };

  const CustomLeftArrow = ({ onClick }: any) => {
    return (
      <ArrowBackIosNewIcon
        sx={{ position: "absolute", zIndex: 2, cursor: "pointer" }}
        onClick={onClick}
      />
    );
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <Box
        className="carousel-button-group"
        sx={{ position: "absolute", width: "500px", top: "calc(50% - 40px)" }}
      >
        <CustomRightArrow
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => next()}
        />
        <CustomLeftArrow onClick={() => previous()} />
      </Box>
    );
  };

  const CustomDot = ({ onClick, ...rest }: any) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    const items = product && product.Pictures.map((picture) => <img height="50px" width="50px" src={process.env.REACT_APP_STRAPI_BASE_URL + picture.url} />);
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {items && React.Children.toArray(items)[index]}
      </button>
    );
  };

  return (
    <Container sx={{ minHeight: "900px" }}>
      <Box display="flex" flexDirection="row" width="100%" height="100%">
        {/*
    LEFT SIDE 
        Biiig carousal - show thubnails in the middle of container
      */}

        <Box display="flex" flex="1" justifyContent="space-around"  position="relative">
          
          <Box width="500px" position="relative">
          <StyledCarousel
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            responsive={responsiveProductPage}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            itemClass="carousel-item"
            arrows={false}
            renderDotsOutside={true}
            showDots
            customDot={<CustomDot />}
          >
            {product && product.Pictures.length ? (
              product.Pictures.map((picture) => (
                <Box
                  key={picture.url}
                  height="300px"
                  
                  display="flex" 
                  justifyContent="space-around"
                >
                  <Image
                    src={process.env.REACT_APP_STRAPI_BASE_URL + picture.url}
                    alt={product.Name}
                  />
                </Box>
              ))
            ) : (
              <Box>loading</Box>
            )}
          </StyledCarousel>
          </Box>
          
        </Box>

        {/*
    RIGHT SIDE - card
        Fraction name
        Product name
        Price
        Description
        Add to cart button
      */}

        <Box flex="1" display="flex"> test</Box>
        </Box>

        {/*   
    BOTTOM PART 
        Dots part of carousel   
        */}
        
       
      
    </Container>
  );
};

export default ProductPage;

const Image = styled("img")`
object-fit: cover;
`;

const StyledCarousel = styled(Carousel)`
  width: 85%;
  .carousel-item {
    padding: 5px 0 5px 0;
    margin: 5px 0 5px 0;
  }
`;
