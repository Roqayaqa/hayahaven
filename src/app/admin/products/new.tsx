import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { uploadImageToFirebase } from "../../..lib/firebase-upload"; // ستقومين بإنشائه

// شكل البيانات المدخلة للنموذج
const formSchema = z.object({
  name: z.string().min(2, "اسم المنتج مطلوب"),
  price: z.coerce.number().positive("السعر يجب أن يكون رقماً موجباً"),
  category: z.string().min(1, "الفئة مطلوبة"),
  description: z.string().optional(),
  images: z.any(),
});

type ProductFormData = z.infer<typeof formSchema>;

const NewProductPage = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: ProductFormData) => {
    try {
      const files: FileList = data.images;
      const urls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const url = await uploadImageToFirebase(files[i]);
        urls.push(url);
      }

      const productData = {
        name: data.name,
        price: data.price,
        category: data.category,
        description: data.description,
        images: urls,
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) router.push("/admin");
    } catch (error) {
      console.error("خطأ أثناء حفظ المنتج:", error);
    }
  };

  const watchImages = watch("images");

  React.useEffect(() => {
    if (watchImages && watchImages.length > 0) {
      const files = Array.from(watchImages);
      const previews = files.map((file) => URL.createObjectURL(file));
      setPreviewImages(previews);
    }
  }, [watchImages]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">إضافة منتج جديد</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">اسم المنتج</label>
          <Input {...register("name")} placeholder="مثال: قميص صيفي" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1">السعر (بالدينار)</label>
          <Input type="number" {...register("price")} />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block mb-1">الفئة</label>
          <Input {...register("category")} placeholder="مثال: ملابس" />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block mb-1">الوصف</label>
          <Input {...register("description")} placeholder="وصف مختصر للمنتج..." />
        </div>

        <div>
          <label className="block mb-1">رفع الصور</label>
          <Input type="file" multiple accept="image/*" {...register("images")} />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {previewImages.map((src, idx) => (
              <img key={idx} src={src} className="w-full h-24 object-cover rounded" alt="preview" />
            ))}
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "جارٍ الحفظ..." : "إضافة المنتج"}
        </Button>
      </form>
    </div>
  );
};

export default NewProductPage;