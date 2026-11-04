
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, categories }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");

    const filteredProducts = useMemo(() => {
        let result = products.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );

        if (category !== "all") {
            result = result.filter(item => item.category === category);
        }

        if (sort === "low") {
            result.sort((a, b) => a.price - b.price);
        } else if (sort === "high") {
            result.sort((a, b) => b.price - a.price);
        } else if (sort === "rating") {
            result.sort((a, b) => b.rating.rate - a.rating.rate);
        }

        return result;
    }, [products, search, category, sort]);

    return (
        <section className="catalog">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">OUR COLLECTION</p>
                    <h2>Explore Products</h2>
                </div>
                <span>{filteredProducts.length} Products</span>
            </div>

            <div className="filters">
                <input
                    type="search"
                    placeholder="Search products..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="all">All Categories</option>
                    {categories.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>

                <select value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="default">Sort By</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                </select>
            </div>

            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="empty-message">No products found.</p>
                )}
            </div>
        </section>
    );
};

export default ProductList;
