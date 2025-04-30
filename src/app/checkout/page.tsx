// CheckoutPage.tsx

"use client";

import React from "react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6 lg:px-20">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Checkout
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Shipping Address</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Street, City, Country"
              rows={3}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
