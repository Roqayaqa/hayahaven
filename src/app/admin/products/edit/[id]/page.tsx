"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    if (id) fetchProduct();
  }, [id]);

  const handleUpdate = async () => {
    setLoading(true);
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      router.push("/admin/products");
    }
    setLoading(false);
  };

  if (!product) return <div className="p-6">جارٍ التحميل...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">تعديل المنتج</h1>
      <Input
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        placeholder="اسم المنتج"
      />
      <Input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
        placeholder="السعر"
      />
      <Input
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
        placeholder="الفئة"
      />
      <Button onClick={handleUpdate} disabled={loading}>
        {loading ? "جارٍ الحفظ..." : "حفظ التغييرات"}
      </Button>
    </div>
  );
};

export default EditProductPage;
