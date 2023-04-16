import React, { useEffect, useState } from 'react';
import Cart from '../Header/Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleToCart =(product) =>{
        console.log(product)
        const newCart = [...cart, product];
        console.log(newCart)
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Cart product ={product} key={product.id} handleToCart = {handleToCart}></Cart>)
                }
            </div>
            <div>
                <h2>Order summery</h2>
                <p>selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;