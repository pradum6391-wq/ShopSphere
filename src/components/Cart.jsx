
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/" className="primary-btn">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-layout">
            <div className="cart-items">
                {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.title} />

                        <div className="cart-item-info">
                            <h3>{item.title}</h3>
                            <p>${item.price.toFixed(2)}</p>

                            <div className="quantity">
                                <button onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                }>−</button>

                                <span>{item.quantity}</span>

                                <button onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                }>+</button>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>

                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </div>
                ))}
            </div>

            <div className="summary">
                <h2>Order Summary</h2>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>

                <Link to="/checkout" className="primary-btn full-btn">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
