
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../services/Api";
import { useCart } from "../contexts/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                setError("");
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    if (loading) return <div className="loading">Loading Product...</div>;
    if (error || !product) return <div className="error">{error || "Product not found."}</div>;

    return (
        <section className="detail-page">
            <Link to="/" className="back-link">← Back to Products</Link>

            <div className="detail-layout">
                <div className="detail-image">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="detail-info">
                    <p className="eyebrow">{product.category}</p>
                    <h1>{product.title}</h1>
                    <p className="rating">
                        ★ {product.rating?.rate} ({product.rating?.count} reviews)
                    </p>

                    <h2 className="detail-price">${product.price.toFixed(2)}</h2>

                    <p>{product.description}</p>

                    <button className="primary-btn"
                        onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
