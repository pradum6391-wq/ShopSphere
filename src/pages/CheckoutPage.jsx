
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: "",
        address: "",
        city: "",
        pincode: ""
    });

    const [errors, setErrors] = useState({});
    const [placed, setPlaced] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }

        if (!/^[0-9]{6}$/.test(form.pincode)) {
            newErrors.pincode = "Enter a valid 6-digit PIN code.";
        }

        if (!form.address.trim()) newErrors.address = "Address is required.";

        if (!form.city.trim()) newErrors.city = "City is required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const order = {
            id: "SS" + Date.now(),
            customer: form,
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            date: new Date().toLocaleString(),
            payment: "Cash on Delivery",
            status: "Confirmed"
        };

        const orders = JSON.parse(localStorage.getItem("shopsphere-orders") || "[]");

        localStorage.setItem(
            "shopsphere-orders",
            JSON.stringify([...orders, order])
        );

        clearCart();
        setPlaced(true);
    };

    if (cart.length === 0 && !placed) {
        return (
            <div className="empty-cart">
                <h2>Your cart is empty.</h2>
                <Link to="/" className="primary-btn">Continue Shopping</Link>
            </div>
        );
    }

    if (placed) {
        return (
            <div className="success-page">
                <div className="success-icon">✓</div>
                <h1>Order Placed Successfully!</h1>
                <p>Thank you for shopping with ShopSphere.</p>
                <p>Your order has been saved successfully.</p>
                <button className="primary-btn" onClick={() => navigate("/")}>
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <main className="page-container">
            <h1 className="page-title">Checkout</h1>

            <div className="checkout-layout">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <h2>Delivery Information</h2>

                    <label>Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required />

                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />

                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}

                    <label>Address</label>
                    <textarea name="address" value={form.address} onChange={handleChange} required />
                    {errors.address && <p className="error-text">{errors.address}</p>}

                    <label>City</label>
                    <input name="city" value={form.city} onChange={handleChange} required />
                    {errors.city && <p className="error-text">{errors.city}</p>}

                    <label>PIN Code</label>
                    <input name="pincode" value={form.pincode} onChange={handleChange} required />
                    {errors.pincode && <p className="error-text">{errors.pincode}</p>}

                    <label>Payment Method</label>
                    <select defaultValue="cod">
                        <option value="cod">Cash on Delivery</option>
                    </select>

                    <button className="primary-btn full-btn">Place Order</button>
                </form>

                <Checkout />
            </div>
        </main>
    );
};

export default CheckoutPage;
