import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAppSelector, useGetProductsStrapi } from "../../hooks";
import ProductCard from "../ProductCard";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { responsive } from "../../const";



interface Props {
  title: string;
}

const MultiProductsCarousel: React.FC<Props> = ({ title }: Props) => {
  useGetProductsStrapi();

  const { products, isLoading } = useAppSelector((state) => {
    return {
      products: state.products.products,
      isLoading: state.products.isLoading,
    };
  });

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
        sx={{ position: "absolute", width: "95%", top: "calc(50% - 15px)" }}
      >
        <CustomRightArrow
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => next()}
        />
        <CustomLeftArrow onClick={() => previous()} />
      </Box>
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexDirection="column"
      width="100%"
    >
      <Typography
        variant="h4"
        sx={{ display: "block", margin: "0px auto 0px auto" }}
        component="h2"
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "35px 0 35px 0",
          position: "relative",
        }}
      >
        <StyledCarousel
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          responsive={responsive}
          infinite={true}
          autoPlay={false /*TO-DO */}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          itemClass="carousel-item"
          arrows={false}
        >
          {products &&
            products.map((product) => (
              <Box key={product.id} display="flex" justifyContent="space-around">
                <ProductCard product={product} />
              </Box>
            ))}
        </StyledCarousel>
      </Box>
    </Box>
  );
};

export default MultiProductsCarousel;

const StyledCarousel = styled(Carousel)`
  width: 85%;
  .carousel-item {
    padding: 5px 0 5px 0;
    margin: 5px 0 5px 0;
  }
`;
