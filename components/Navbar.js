import React, {useContext} from 'react';
import {CartContext} from "../contexts/CartContext";

const Navbar = (props) => {
    const cartContext = useContext(CartContext);
    const {cart} = cartContext;

    return (
        <nav className="navbar bg-secondary">
            <h3><a href="/">Shopping Cart NextJS</a></h3>
            <a href="/cart" className="btn btn-outline-dark">Cart {cart.length}</a>
        </nav>
    );
};

export default Navbar;
