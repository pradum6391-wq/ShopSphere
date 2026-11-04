
const API_URL = "https://fakestoreapi.com";

// Fetch all products
export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return await response.json();
};

// Fetch single product
export const fetchProductById = async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    return await response.json();
};

// Fetch all categories
export const fetchCategories = async () => {
    const response = await fetch(`${API_URL}/products/categories`);

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return await response.json();
};
