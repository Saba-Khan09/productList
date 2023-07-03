import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ProductList = () => {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
        { id: 7, name: 'Product 7' },
        { id: 8, name: 'Product 8' },
        { id: 9, name: 'Product 9' },
        { id: 10, name: 'Product 10' },
    ];

    const addToCart = (productId) => {
        setCartItems([...cartItems, productId]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item !== productId));
    };

    const isProductInCart = (productId) => {
        return cartItems.includes(productId);
    };
    const disableRemoveButton = cartItems.length === 1;
    return (
        <div className='container-fluid'>
            <p>cart count: {cartItems.length} </p>
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <div className='card-body'>
                        <h1 className="card-title">{product.name}</h1>
                        {isProductInCart(product.id) ? (
                            <button className="btn btn-secondary" onClick={() => removeFromCart(product.id)} disabled={disableRemoveButton}>
                                Remove from Cart
                            </button>
                        ) : (
                            <button className="btn btn-secondary" onClick={() => addToCart(product.id)}>
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;