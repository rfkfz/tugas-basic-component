import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../Data/products.json';


const ProductDetail = () => {
    const { id } = useParams();
    const product = productsData.find((p) => p.id === id);

    if (!product) {
        return <div>Unauthorized Access.</div>;
    }

    return (
        <div className='tablePages' >
            <h2 >Product Detail</h2>
            <div>
                <strong>Name:</strong>
            </div>
            <div className='borderDetail' style={{ border: '1px solid grey', padding: '10px' }}>
                {product.name}
            </div>
            <div>
                <strong>Price:</strong>
            </div>
            <div className='borderDetail' style={{ border: '1px solid grey', padding: '10px' }}>
                {product.price}
            </div>
            <div>
                <strong>Category:</strong>
            </div>
            <div className='borderDetail' style={{ border: '1px solid grey', padding: '10px' }}>
                {product.category}
            </div>
            <div>
                <strong>Description:</strong>
            </div>
            <div className='borderDetail' style={{ border: '1px solid grey', padding: '10px' }}>
                {product.description}
            </div>

            <div>
                <strong>Expiry Date:</strong>
            </div>
            <div className='borderDetail' style={{ border: '1px solid grey', padding: '10px' }}>
                {product.expiryDate}
            </div>
        </div>
    );
};

export default ProductDetail;
