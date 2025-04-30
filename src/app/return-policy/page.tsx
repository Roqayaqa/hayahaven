'use client';
import Link from 'next/link';

export default function ReturnPolicy() {
  return (

    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-pink-600 mb-12">
        Return Policy
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-lg text-gray-600 mb-4">
          At Haya Haven, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied with your order, we offer a hassle-free return policy to ensure your shopping experience is as smooth as possible.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">1. Return Eligibility</h2>
          <p className="text-lg text-gray-600">
            To be eligible for a return, the following conditions must be met:
          </p>
          <ul className="list-inside list-disc text-lg text-gray-600 space-y-2">
            <li>Items must be returned within 30 days of receipt.</li>
            <li>Items must be in their original condition, unworn, unwashed, and with all original tags attached.</li>
            <li>Items must not be on sale or part of a special promotion (unless otherwise specified).</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">2. Non-Returnable Items</h2>
          <p className="text-lg text-gray-600">
            Certain items are not eligible for return. These include:
          </p>
          <ul className="list-inside list-disc text-lg text-gray-600 space-y-2">
            <li>Gift cards</li>
            <li>Items marked as final sale</li>
            <li>Personalized or custom-made items</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">3. How to Return an Item</h2>
          <p className="text-lg text-gray-600">
            To initiate a return, please follow these steps:
          </p>
          <ul className="list-inside list-disc text-lg text-gray-600 space-y-2">
            <li>Visit our <Link href="/contact" className="text-pink-600 hover:text-pink-500">Contact Us</Link> page to request a return authorization.</li>
            <li>Provide your order number and the reason for the return.</li>
            <li>Once your return is authorized, we will send you a return shipping label.</li>
            <li>Pack your items securely in the original packaging and attach the return label.</li>
            <li>Drop off the package at your nearest carrier location.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">4. Return Shipping Costs</h2>
          <p className="text-lg text-gray-600">
            Return shipping costs are the responsibility of the customer, except in the case of defective or incorrect items. We offer free return shipping on all eligible returns within the United States.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">5. Refunds</h2>
          <p className="text-lg text-gray-600">
            After we receive your returned items, we will process your refund within 7-10 business days. Refunds will be issued to the original payment method used for the purchase. Please note that the shipping fees are non-refundable.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">6. Damaged or Defective Items</h2>
          <p className="text-lg text-gray-600">
            If you receive an item that is damaged or defective, please contact us immediately. We will provide you with a return shipping label and send you a replacement or issue a full refund.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">7. Exchanges</h2>
          <p className="text-lg text-gray-600">
            At this time, we do not offer direct exchanges. If you would like a different size or color, please return the original item for a refund and place a new order for the item you want.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">8. International Returns</h2>
          <p className="text-lg text-gray-600">
            International customers are responsible for return shipping fees. Please note that customs duties or taxes are non-refundable.
          </p>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600">
            If you have any questions regarding our return policy, please feel free to <Link href="/contact" className="text-pink-600 hover:text-pink-500">contact us</Link> and we will be happy to assist you.
          </p>
        </div>
      </div>
    </div>

  );
}
