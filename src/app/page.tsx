"use client";

// import Test from "@/components/Test";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { TopNavigation } from "@/components/TopNavigation";
import { supabase } from "./supabaseClient";
import { useEffect, useState } from "react";

interface products {
  title: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<products[]>([]);
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    let { data: products, error } = await supabase.from("products").select("*");
    setProducts(products as products[]);
  }
  return (
    <main className="container mx-auto">
      {/* <Test /> */}
      <TopNavigation />
      <Hero />
      <ProductCard />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.title} -- {product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
