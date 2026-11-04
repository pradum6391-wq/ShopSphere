# 🛍️ ShopSphere – E-commerce Application

A modern and responsive E-commerce web application built using **React.js and Vite**. ShopSphere allows users to explore products, view product details, manage their shopping cart, register, log in, and complete a simulated checkout process.

The application fetches product data from the Fake Store API and uses React Context API and Local Storage for state management and data persistence.

---

## 📌 Project Overview

**ShopSphere** is a frontend E-commerce application developed as part of the Week 8 internship assignment.

The project focuses on building a practical shopping experience using reusable React components, client-side routing, API integration, authentication simulation, and cart management.

### ✨ Key Features

- **Product Listing:** Fetch and display products from Fake Store API.
- **Product Details:** View individual product information.
- **Category Filtering:** Browse products by category.
- **Shopping Cart:** Add, remove, and update product quantities.
- **Cart Persistence:** Save cart data using Local Storage.
- **User Authentication:** User registration, login, and logout.
- **User-wise Cart:** Maintain a separate cart for each logged-in user.
- **Protected Checkout:** Restrict checkout access to authenticated users.
- **Order Confirmation:** Complete a simulated checkout process.
- **Responsive Design:** Optimized for desktop, tablet, and mobile screens.
- **Lazy Loading:** Load page components when required.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript (ES6+) | Application functionality |
| React.js | Component-based UI |
| Vite | Development server and build tool |
| React Router DOM | Client-side routing |
| Context API | Global state management |
| Local Storage | Client-side data persistence |
| Fake Store API | Product data integration |
| ESLint | Code quality and linting |

---

## 📂 Project Structure

```text
E-commerce-Application/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   │
│   ├── hooks/
│   │   └── UseProduct.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── CartPages.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── services/
│   │   └── Api.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── eslint.config.js
└── README.md
```

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/pradum6391-wq/ShopSphere.git
```

### 2. Navigate to the Project Folder

```bash
cd E-commerce-Application
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 5. Create a Production Build

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

---

## 🌐 API Integration

ShopSphere uses the **Fake Store API** to retrieve product information.

API Base URL:

```text
https://fakestoreapi.com
```

### API Endpoints

| Endpoint | Description |
|---|---|
| `/products` | Fetch all products |
| `/products/{id}` | Fetch a specific product |
| `/products/categories` | Fetch product categories |

The application handles API responses, loading states, and errors through reusable product-fetching logic.

API Documentation: https://fakestoreapi.com/docs

---

## 🧠 Architecture and State Management

The application follows a component-based architecture to keep the code organized, reusable, and maintainable.

### 1. Component Architecture

- **Navbar:** Navigation links and cart information.
- **ProductCard:** Displays individual product information.
- **ProductList:** Displays the collection of products.
- **Cart:** Manages shopping cart items.
- **Checkout:** Displays the order summary.

### 2. Context API

Two React Context providers manage global application state.

**AuthContext**
- Maintains the currently logged-in user.
- Handles registration, login, and logout.
- Shares authentication information across components.

**CartContext**
- Manages cart items and quantities.
- Calculates cart count and total price.
- Maintains separate cart data for each logged-in user.

### 3. Local Storage

Local Storage is used to preserve application data between browser sessions.

The application stores:
- Registered demo users.
- Current user session.
- Individual users' shopping cart data.
- Order information.

### 4. Custom Hook

`UseProduct.jsx` contains reusable product-fetching logic, including loading and error handling.

---

## 🔐 Authentication and Checkout

ShopSphere includes a simulated authentication system.

Users can:
1. Create an account.
2. Log in using registered credentials.
3. Browse and add products to their cart.
4. Access the protected checkout page.
5. Complete the simulated checkout process.

**Note:** This is a frontend demonstration project. Authentication and user data are stored in browser Local Storage. It does not provide production-grade authentication, secure password storage, backend order processing, or real payment processing.

---

## 🛒 Shopping Cart Functionality

The shopping cart supports:

- Adding products.
- Increasing and decreasing quantities.
- Removing products.
- Calculating the total price.
- Persisting cart data.
- Maintaining separate carts for different users.

When a user logs out, another user cannot see that user's cart. Logging back into the original account restores its saved cart.

---

## ⚡ Performance Optimization

The application uses several techniques to improve performance and maintainability.

- React Lazy Loading for page components.
- Suspense for loading fallback UI.
- Reusable components to reduce code duplication.
- Context API for shared state.
- Vite for fast development and optimized production builds.

---

## 🧪 Testing and Verification

The following areas should be tested before submission.

| Test Case | Expected Result |
|---|---|
| Open Home Page | Products load successfully |
| Open Product Details | Correct product information appears |
| Filter Products | Selected category products appear |
| Add to Cart | Product is added successfully |
| Update Quantity | Cart quantity and total update |
| Remove Product | Selected product is removed |
| Register | New demo account is created |
| Login | User is authenticated |
| Logout | User session ends |
| User-wise Cart | Different users have separate carts |
| Protected Checkout | Login is required |
| Checkout | Simulated order confirmation appears |
| Responsive Layout | Layout adapts to different screens |
| Production Build | Build completes successfully |

### Build Verification

The production build was tested using:

```bash
npm run build
```

**Result:** Successful production build.

---

## 📸 Screenshots

```text
screenshots/
├── home.png
├── products.png
├── product-details.png
├── cart.png
├── login.png
├── register.png
└── checkout.png
```

### Home Page

![Home Page](../screenshots/home.png)

### Product Listing

![Product Listing](../screenshots/product.png)

### Product Details

![Product Details](../screenshots/productdetails.png)

### Login Page

![Login Page](../screenshots/login.png)

### Registration Page

![Registration Page](../screenshots/register.png)

---

## 🚀 Deployment

The project can be deployed using platforms such as Netlify or Vercel.

General deployment steps:

1. Push the project to GitHub.
2. Import the repository into Netlify or Vercel.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Configure SPA routing redirects so React Router routes work after page refresh.
6. Deploy the application.

**Live Demo:** YOUR_DEPLOYED_PROJECT_URL

**GitHub Repository:** YOUR_GITHUB_REPOSITORY_URL

---

## 🎯 Challenges Faced

During development, the following challenges were addressed:

- Setting up React Router DOM and configuring application routes.
- Managing shared state using React Context API.
- Integrating external API data.
- Handling loading and error states.
- Maintaining cart data using Local Storage.
- Separating cart data between different users.
- Protecting checkout routes.
- Organizing the project into reusable components.
- Creating a responsive user interface.

---

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

- React functional components and Hooks.
- React Router DOM.
- Context API and global state management.
- API integration using Fetch.
- Local Storage.
- Authentication flow simulation.
- Reusable component architecture.
- Lazy loading and performance optimization.
- Responsive frontend development.
- Production build and deployment workflow.

---

## 👨‍💻 Author

**Pradum Maurya**

BCA Student | Frontend & Full Stack Developer

- GitHub: https://github.com/pradum6391-wq
- LinkedIn: https://linkedin.com/in/pradum-maurya-902a0b379

---

## 📄 License

This project was developed for educational and internship purposes.

Product data is provided by the Fake Store API.

---

**Made with ❤️ using React.js and Vite.**