import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useAppSelector, useGetProductsStrapi } from '../hooks';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProductCard from './ProductCard';


interface ProductsMapProps {

}

const ProductsMap: React.FC<ProductsMapProps> = ({}) => {
    useGetProductsStrapi();    
    const {products, isLoading, error} = useAppSelector((state) => {
        return {
            products: state.products.products,
            isLoading: state.products.isLoading,
            error: state.products.error
        };
    });

    console.log(`Error: ${error} | IsLoading: ${isLoading} | Products: ${products}`);    

    return (
        <ImageList cols={3} gap={20} rowHeight={420} sx={{ 
            width: "90%", 
            marginLeft: "auto", 
            marginRight:"auto",
            display: "flex",
            justifyContent: "space-evenly"
            }}>
    
        {products && products.map(product => (
            <ImageListItem key={product.id}>
                <ProductCard product={product}></ProductCard>
            </ImageListItem>
        ))
        }
   
        </ImageList>
        );
}

export default ProductsMap;