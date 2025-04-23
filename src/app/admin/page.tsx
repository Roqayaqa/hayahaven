"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

// هذه الصفحة مخصصة للمشرف لإدارة المنتجات والفئات
const AdminDashboardPage = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">لوحة تحكم المشرف</h1>

      {/* قسم إدارة المنتجات */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">المنتجات</h2>
            <Link href="/admin/products/new">
              <Button className="flex items-center gap-2">
                <PlusCircle size={18} /> إضافة منتج
              </Button>
            </Link>
          </div>
          {/* هنا ستُعرض قائمة المنتجات لاحقًا */}
          <p className="text-muted-foreground">(قائمة المنتجات ستظهر هنا...)</p>
        </CardContent>
      </Card>

      {/* قسم إدارة الفئات */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">الفئات</h2>
            <Link href="/admin/categories/new">
              <Button className="flex items-center gap-2">
                <PlusCircle size={18} /> إضافة فئة
              </Button>
            </Link>
          </div>
          {/* هنا ستُعرض قائمة الفئات لاحقًا */}
          <p className="text-muted-foreground">(قائمة الفئات ستظهر هنا...)</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;
