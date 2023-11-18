"use client";

import React, { useState } from "react";

export interface Product {
  name: string;
  description: string;
  price: number;
}

export const Products = ({
  updateCart,
}: {
  updateCart: (newProduct: Product) => void;
}) => {
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Product 1",
      description: "The description of product 1.",
      price: 12.99,
    },
    {
      name: "Product 2",
      description: "The description of product 2.",
      price: 2.99,
    },
  ]);
  return (
    <ul className="grid grid-cols-4 bg-slate-200 p-12 gap-4">
      {products.map((product) => (
        <div
          key={product.name}
          className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-48 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Image"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              {product.name}
            </h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
              {product.description}
            </p>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                £{product.price}
              </p>
            </div>
            <div className="mt-2">
              <button
                type="button"
                onClick={() => updateCart(product)}
                className="rounded bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};
