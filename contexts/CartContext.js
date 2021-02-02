import React, {createContext, useEffect, useState} from 'react';

const initialState = {
    cart: [],
};

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCart(cart);
        }
    }, []);

    const addToCart = product => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const removeFromCart = product => {
        const updatedCart = cart.filter(x => x !== product);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    const removeAll = () => {
        setCart([])
        localStorage.removeItem('cart');
    }

    return(
        <CartContext.Provider value={{
            ...props,
            cart: cart,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            removeAll
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
