
import UseProduct from "../hooks/UseProduct";
import ProductList from "../components/ProductList";

const Home = () => {
    const { products, categories, loading, error } = UseProduct();

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <p>WELCOME TO SHOPSPHERE</p>
                    <h1>Find Your Style.<br />Discover Your World.</h1>
                    <span>Explore quality products at prices you'll love.</span>
                    <a href="#products" className="primary-btn">Shop Now →</a>
                </div>
                <div className="hero-decoration">SHOP<br />SMART.</div>
            </section>

            <div id="products">
                {loading ? (
                    <div className="loading">Loading Products...</div>
                ) : error ? (
                    <div className="error">
                        {error}
                        <button onClick={() => window.location.reload()}>Retry</button>
                    </div>
                ) : (
                    <ProductList products={products} categories={categories} />
                )}
            </div>
        </>
    );
};

export default Home;
