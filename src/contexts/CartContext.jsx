
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { user } = useAuth();

    const userEmail = user?.email?.toLowerCase() || null;

    const getCartKey = (email) =>
        `shopsphere-cart-${encodeURIComponent(email)}`;

    const [cartState, setCartState] = useState({
        owner: null,
        items: []
    });

    // Load the cart belonging to the logged-in user
    useEffect(() => {
        if (!userEmail) {
            setCartState({
                owner: null,
                items: []
            });
            return;
        }

        try {
            const savedCart = JSON.parse(
                localStorage.getItem(getCartKey(userEmail)) || "[]"
            );

            setCartState({
                owner: userEmail,
                items: Array.isArray(savedCart) ? savedCart : []
            });
        } catch {
            setCartState({
                owner: userEmail,
                items: []
            });
        }
    }, [userEmail]);

    // Save cart only for its owner
    useEffect(() => {
        if (!userEmail || cartState.owner !== userEmail) return;

        localStorage.setItem(
            getCartKey(userEmail),
            JSON.stringify(cartState.items)
        );
    }, [cartState, userEmail]);

    // Show cart only when its owner is logged in
    const cart =
        userEmail && cartState.owner === userEmail
            ? cartState.items
            : [];

    const addToCart = (product) => {
        if (!userEmail || cartState.owner !== userEmail) return;

        setCartState(previous => ({
            ...previous,
            items: (() => {
                const existing = previous.items.find(
                    item => item.id === product.id
                );

                if (existing) {
                    return previous.items.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }

                return [...previous.items, { ...product, quantity: 1 }];
            })()
        }));
    };

    const removeFromCart = (id) => {
        setCartState(previous => {
            if (previous.owner !== userEmail) return previous;

            return {
                ...previous,
                items: previous.items.filter(item => item.id !== id)
            };
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;

        setCartState(previous => {
            if (previous.owner !== userEmail) return previous;

            return {
                ...previous,
                items: previous.items.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
            };
        });
    };

    const clearCart = () => {
        setCartState(previous => {
            if (previous.owner !== userEmail) return previous;

            return {
                ...previous,
                items: []
            };
        });
    };

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};
