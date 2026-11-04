
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 700);
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
            </Link>

            <div className="product-info">
                <p className="category">{product.category}</p>

                <h3>
                    <Link to={`/product/${product.id}`}>
                        {product.title}
                    </Link>
                </h3>

                <div className="rating">
                    ★ {product.rating?.rate || 0}
                    <span> ({product.rating?.count || 0} reviews)</span>
                </div>

                <div className="product-bottom">
                    <strong>${product.price.toFixed(2)}</strong>

                    <button onClick={handleAdd} disabled={added}>
                        {added ? "Added ✓" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
