
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const Home = lazy(() => import("./pages/Home.jsx"));
const ProductDetail = lazy(() => import("./pages/ProductDetails.jsx"));
const CartPage = lazy(() => import("./pages/CartPages.jsx"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    return user
        ? children
        : <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

const AppContent = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Suspense fallback={<div className="loading">Loading Page...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/product/:id" element={<ProductDetail />} />

                    <Route path="/cart" element={<CartPage />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                    <Route
                        path="/checkout"
                        element={
                            <ProtectedRoute>
                                <CheckoutPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>

            <footer className="footer">
                <h2>ShopSphere<span>.</span></h2>
                <p>Discover more. Shop smarter.</p>
                <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
            </footer>
        </BrowserRouter>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <AppContent />
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
