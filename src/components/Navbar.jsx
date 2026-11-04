
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    const { cartCount } = useCart();
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">ShopSphere<span>.</span></Link>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart ({cartCount})</NavLink>

                {user ? (
                    <>
                        <span className="welcome">Hi, {user.name}</span>
                        <button className="nav-button" onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
