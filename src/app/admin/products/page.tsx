"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
}

const AdminProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  const fetchProducts = async () => {
    const res = await fetch("/api/products", { cache: "no-store" });
    const data = await res.json();
    setProducts(data);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("هل أنت متأكد من حذف هذا المنتج؟");
    if (!confirm) return;

    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">المنتجات</h1>
        <Link href="/admin/products/new">
          <Button>+ منتج جديد</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition relative"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">فئة: {product.category}</p>
            <p className="text-green-600 font-bold">{product.price} د.أ</p>

            <div className="flex justify-between mt-4">
              <Button
                variant="outline"
                onClick={() => router.push(`/admin/products/edit/${product._id}`)}
              >
                تعديل
              </Button>
              <Button variant="destructive" onClick={() => handleDelete(product._id)}>
                حذف
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductsPage;
