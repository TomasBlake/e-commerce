import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Autocomplete,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppSelector, useGetProductsStrapi } from "../../hooks";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface Props {}

const SearchBar: React.FC<Props> = ({}) => {
  const [state, setState] = useState<string>("");
  useGetProductsStrapi();
  const { products, isLoading, error } = useAppSelector((state) => {
    return {
      products: state.products.products,
      isLoading: state.products.isLoading,
      error: state.products.error,
    };
  });

  return (
    <Autocomplete
      id="product-select"
      options={products}
      autoHighlight
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.Name}
      renderOption={(props, {Name, Description : desc, Pictures, category, subcategory, id}) => {
        return (
          <CustomLink key={id} to={`/${category.name}/${subcategory.name}/${id}`}>
          <Box
            display="flex"
            component="li"
            width="300px"
            height="70px"
            {...props}
          >    
            <Box height="50px" width="50px" m="10px">
              <Image
                src={process.env.REACT_APP_STRAPI_BASE_URL + Pictures[0].url}
                alt={Name}
              />
            </Box>
            <Box>
              <Typography fontSize="14px" display="block" variant="h5" fontWeight="470">
                {Name}
              </Typography>
              <Description fontSize="10px" display="block" variant="subtitle1">
                {desc}
              </Description>
            </Box>
          </Box>
          </CustomLink>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          // onChange={(e) => setState(e.target.value)}
          // value={state}
          size="small"
          placeholder="Search"
          inputProps={{ ...params.inputProps }}
          /*InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}*/
        />
      )}
    />
  );
};

export default SearchBar;

const Image = styled("img")`
  height: 50px;
  width: 50px;
  object-fit: cover;
`;

const Description = styled(Typography)`
  height: 35px;
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
