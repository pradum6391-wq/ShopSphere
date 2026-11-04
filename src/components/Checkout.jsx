
import { useCart } from "../contexts/CartContext";

const Checkout = () => {
    const { cart, cartTotal } = useCart();

    return (
        <div className="summary">
            <h2>Your Order</h2>

            {cart.map(item => (
                <div className="summary-row" key={item.id}>
                    <span>{item.title.slice(0, 22)} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            ))}

            <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
            </div>

            <div className="summary-row total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Checkout;
