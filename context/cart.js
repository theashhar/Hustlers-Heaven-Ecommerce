import { useState, createContext } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});
    
    const addToCart = (product) => {
        const newCart = { ...cart };
        if (newCart[product.id]) {
        newCart[product.id].q += 1;
        } else {
        newCart[product.id] = product;
        newCart[product.id].q = 1;
        }
        setCart(newCart);
    };
    
    const removeFromCart = (product) => {
        const newCart = { ...cart };
        if (newCart[product.id]) {
        if (newCart[product.id].q > 1) {
            newCart[product.id].q -= 1;
        } else {
            delete newCart[product.id];
        }
        }
        setCart(newCart);
    };
    
    const clearCart = () => {
        setCart({});
    };

    const countCart = () => {
        return Object.values(cart).reduce((acc, curr) => acc + curr.q, 0);
    };
    
    return (
        <CartContext.Provider
        value={{ cart, setCart, addToCart, removeFromCart, clearCart, countCart }}
        >
        {children}
        </CartContext.Provider>
    );
};

export default CartProvider