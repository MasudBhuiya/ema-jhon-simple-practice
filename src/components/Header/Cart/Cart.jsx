import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.product)
    const { img, name, price, seller, ratings } = props.product;
    const handleToCart = props.handleToCart;
    return (
        <div className='cart-container'>
            <img className='img' src={img} alt="" />
            <div className='cart-info'>
                <h6 className='name'>Name: {name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}star</p>
            </div>
            <button className='btn-cart' onClick={() => handleToCart(props.product)}>Add to Cart</button>
        </div>

    );
};

export default Cart;