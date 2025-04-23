'use client';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from "@/components/ui/button"; // تأكد من مسار الزر إذا كان لديك
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'; // لإخفاء العنوان بشكل مرئي ولكن يبقى متاحاً للمستخدمين الذين يستخدمون قارئات الشاشة

export default function ModalDialog() {
  return (
    <Dialog>
      {/* زر لتشغيل النافذة */}
      <DialogTrigger asChild>
        <Button variant="ghost">Open Dialog</Button> {/* الزر لفتح النافذة */}
      </DialogTrigger>

      {/* محتوى النافذة */}
      <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        {/* إخفاء العنوان مع الاحتفاظ بالوصول من خلال VisuallyHidden */}
        <VisuallyHidden>
          <DialogTitle>Modal Title</DialogTitle>
        </VisuallyHidden>
        
        {/* محتوى النافذة */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Welcome to the Modal</h2>
          <p className="text-gray-700">Here is some content for the modal dialog. You can customize this content.</p>
          <div className="mt-6 flex justify-end gap-3">
            {/* زر إغلاق النافذة */}
            <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
