import React from 'react';
import DataTable from '../components/DataTable';
import productsData from '../Data/products.json';

const Products = () => {
    const columns = ['name', 'description', 'price', 'category', 'expiryDate'];
    const tableName = 'products';

    return (
        <div className='tablePages'>
            <h3 className='headTable'>Products</h3>
            <DataTable items={productsData} columns={columns} tableName={tableName} />
        </div>
    );
};

export default Products;
