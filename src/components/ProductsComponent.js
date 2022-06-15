import React from 'react';

const ProductsComponent = ({ data }) => {

    return (
        <div className="col-4">
            <img className="image_product" src={data.image} alt="product" />
            <h3> {data.name} </h3>
            <p> {data.price} </p>
        </div>

    );
};

export default ProductsComponent;