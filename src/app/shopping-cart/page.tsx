"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

// دالة لحفظ السلة في التخزين المحلي
const saveCartToLocalStorage = (cartItems: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

// دالة لتحميل السلة من التخزين المحلي
const loadCartFromLocalStorage = (): any => {
  if (typeof window !== "undefined") {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  }
  return []; // العودة إلى قيمة فارغة في حالة بيئة الخادم
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const [showNotification, setShowNotification] = useState("");
  const router = useRouter();

  useEffect(() => {
    // التأكد من تحميل السلة من التخزين المحلي عند تحميل الصفحة
    const savedCart = loadCartFromLocalStorage();
    if (savedCart.length > 0) {
      setCartItems(savedCart);
    }
    setMounted(true);
  }, []);

  const handleQuantityChange = useCallback(
    (id: number, newQuantity: number) => {
      if (newQuantity < 1) return; // تأكد من أن الكمية لا تكون أقل من 1
      const updatedCartItems = cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCartItems(updatedCartItems);
      saveCartToLocalStorage(updatedCartItems);
      setShowNotification("Cart updated successfully!");
      setTimeout(() => setShowNotification(""), 3000);
    },
    [cartItems]
  );

  const handleRemoveItem = useCallback(
    (id: number) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      saveCartToLocalStorage(updatedCartItems);
      setShowNotification("Item removed from cart.");
      setTimeout(() => setShowNotification(""), 3000);
    },
    [cartItems]
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const handleShopNow = () => {
    router.push("/products"); 
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!mounted) return null;

  return (
      <div className="min-h-screen bg-gray-50 py-14 px-6 lg:px-20">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Your Shopping Bag
        </h1>

        {showNotification && (
          <div className="text-green-500 text-center mb-4 p-2 bg-green-100 rounded">
            {showNotification}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center">
                <p className="text-xl text-gray-600">Your cart is empty.</p>
                <p className="mt-4 text-lg text-gray-500">
                  It seems like you haven’t added any products yet. Start shopping and find the perfect items for you!
                </p>
                <button
                  onClick={handleShopNow}
                  className="mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-semibold transition"
                >
                  Start Shopping Now
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white rounded-3xl shadow-xl p-6 gap-6 hover:shadow-2xl transition-all"
                >
                  <div className="w-32 h-32 relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-500 text-sm">Color: {item.color}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))
                        }
                        className="w-20 px-2 py-1 border rounded-md text-center shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                      />
                      <span className="text-gray-700 font-semibold">
                        €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-full transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
            <div className="flex justify-between mb-6 text-lg">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-semibold">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6 text-lg">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800 font-semibold">Free</span>
            </div>
            <div className="border-t pt-6 flex justify-between text-xl font-bold text-gray-900">
              <span>Total</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-full font-semibold transition-all shadow-md hover:shadow-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
  );
};

export default CartPage;
