import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const productsList = [
  { id: 1, title: "Wireless Headphones", price: 59.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
  { id: 2, title: "Smart Watch", price: 99.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
  { id: 3, title: "DSLR Camera", price: 499.99, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60" },
  { id: 4, title: "Running Shoes", price: 45.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60" },
  { id: 5, title: "Sunglasses", price: 25.50, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60" },
  { id: 6, title: "Backpack", price: 35.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60" },
  { id: 7, title: "Coffee Mug", price: 12.99, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60" },
  { id: 8, title: "Gaming Mouse", price: 29.99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60" },
  { id: 9, title: "Mechanical Keyboard", price: 79.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60" },
  { id: 10, title: "Bluetooth Speaker", price: 40.00, image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60" },
  { id: 11, title: "Desk Lamp", price: 22.50, image: "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww" },
  { id: 12, title: "Water Bottle", price: 15.00, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60" },
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="bg-light min-vh-100">
      <Header cartCount={cartCount} />
      <Carousel />
      <Banner />
      
      <main className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {productsList.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;