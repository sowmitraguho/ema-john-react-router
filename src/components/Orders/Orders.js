import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>This is Order Page! There are {products.length} products!</h1>
        </div>
    );
};

export default Orders;