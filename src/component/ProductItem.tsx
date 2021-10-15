import React from 'react'

interface Props {
    id: string;
    price: string;
    description: string;
    imageUrl: string;
    name: string;
    itemUrl: string;
}

const ProductItem: React.FC<Props> = ({id, price, itemUrl, description, imageUrl, name} : Props) => {
        return (
            <button className="snipcart-add-item"
                key={id}
                data-item-id={id}
                data-item-price={price}
                data-item-url={itemUrl}
                data-item-description={description}
                data-item-image={imageUrl}
                data-item-name={name}>
                Add to cart
            </button>
        );
};

export default ProductItem;
