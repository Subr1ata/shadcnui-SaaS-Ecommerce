import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    title: "Laptops & Computers",
    href: "https://source.unsplash.com/250x200/?products&1",
    price: 1452.56,
  },
  {
    title: "Mobile Phones",
    href: "https://source.unsplash.com/250x200/?products&2",
    price: 4533.56,
  },
  {
    title: "Television",
    href: "https://source.unsplash.com/250x200/?products&3",
    price: 6575.56,
  },
  {
    title: "Home Appliances",
    href: "https://source.unsplash.com/250x200/?products&4",
    price: 1457.56,
  },
  {
    title: "Tech Accessories",
    href: "https://source.unsplash.com/250x200/?products&5",
    price: 6754.56,
  },
  {
    title: "Gaming Gear",
    href: "https://source.unsplash.com/250x200/?products&6",
    price: 8975.56,
  },
];

export default function ProductCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {products.map((product) => (
        <Card key={product.title}>
          <CardHeader>
            <Image
              src={product.href}
              width={250}
              height={200}
              alt="pic"
              className="object-cover w-full rounded"
              priority
            />
          </CardHeader>
          <CardTitle className="text-center text-xl">{product.title}</CardTitle>
          <CardFooter className="flex justify-between mt-5">
            <p className="text-lg font-semibold">Rs. {product.price}</p>
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
