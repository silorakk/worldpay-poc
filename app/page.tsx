"use client";

import Image from "next/image";
import { Product, Products } from "./components/Products";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const updateCart = (newProduct: Product) => {
    setCart([...cart, newProduct]);
  };

  const handleCheckout = () => {};
  return (
    <main className="flex min-h-screen flex-col items-center">
      Products
      <Products updateCart={updateCart} />
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.name}>Product: {item.name}</div>
      ))}
      <button
        type="button"
        onClick={handleCheckout}
        className="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Checkout
      </button>
    </main>
  );
}
