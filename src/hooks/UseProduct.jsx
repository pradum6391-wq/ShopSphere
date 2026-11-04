
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/Api";

const UseProduct = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                setError("");

                const [productData, categoryData] = await Promise.all([
                    fetchProducts(),
                    fetchCategories()
                ]);

                setProducts(productData);
                setCategories(categoryData);
            } catch (err) {
                setError(err.message || "Something went wrong.");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, categories, loading, error };
};

export default UseProduct;
