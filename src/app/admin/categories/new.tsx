import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// نموذج التحقق من صحة البيانات
const formSchema = z.object({
  name: z.string().min(2, "اسم الفئة مطلوب"),
});

type CategoryFormData = z.infer<typeof formSchema>;

const NewCategoryPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: CategoryFormData) => {
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        console.error("فشل حفظ الفئة");
      }
    } catch (error) {
      console.error("خطأ في إرسال النموذج", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">إضافة فئة جديدة</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">اسم الفئة</label>
          <Input {...register("name")}
                 placeholder="مثال: ملابس" />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "جاري الإرسال..." : "إضافة الفئة"}
        </Button>
      </form>
    </div>
  );
};

export default NewCategoryPage;
