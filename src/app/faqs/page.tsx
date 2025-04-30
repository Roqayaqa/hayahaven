'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQs() {
  const [active, setActive] = useState<number | null>(null);

  const faqData = [
    {
      question: 'What is the return policy?',
      answer:
        'We offer a 30-day return policy for unworn, unwashed, and unused items. Please ensure the tags are intact. For more details, visit our return policy page. Returns are easy with free return labels included on eligible orders.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'Once your order has shipped, you will receive an email with a tracking link. You can also track your order by logging into your account. For further assistance, please contact our support team.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes! We offer international shipping to over 30 countries. Shipping fees and delivery times may vary depending on your location. Please check our shipping page for more details.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can contact our customer support via email at support@hayahaven.com or use the contact form on our website. We strive to respond to all inquiries within 24 hours.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and local payment methods depending on your region.',
    },
    {
      question: 'How do I care for my hijabs?',
      answer:
        'We recommend hand washing your hijabs with cold water and mild detergent to preserve their quality. Avoid wringing them out. To dry, lay flat on a clean surface. For a smoother finish, iron on a low setting.',
    },
    {
      question: 'Can I change my order after placing it?',
      answer:
        'Unfortunately, once an order is placed, we cannot make changes. However, you can cancel the order within 30 minutes and place a new one. If you need to change your order, please contact us as soon as possible.',
    },
    {
      question: 'Do you offer gift cards?',
      answer:
        'Yes, we offer digital gift cards that can be purchased directly from our website. These are a great option for gifting and can be used for any product available on our site.',
    },
    {
      question: 'Can I purchase in bulk for events or stores?',
      answer:
        'Absolutely! If you’re looking to purchase in bulk for events, weddings, or retail purposes, please get in touch with us via our wholesale contact page for special pricing and ordering options.',
    },
  ];

  return (

    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-pink-600 mb-12">
        Frequently Asked Questions (FAQs)
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-5 px-8 text-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none transition-all duration-300 ease-in-out"
              onClick={() => setActive(active === index ? null : index)}
            >
              <span className="flex items-center justify-between">
                {item.question}
                <span
                  className={`transform transition-all duration-300 ${
                    active === index ? 'rotate-180' : ''
                  }`}
                >
                  &#9660;
                </span>
              </span>
            </button>
            {active === index && (
              <div className="py-4 px-8 bg-gray-50 text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-gray-600">
          Didn’t find your answer? <Link href="/contact" className="text-pink-600 hover:text-pink-500">Contact us</Link> for more support or visit our <Link href="/return-policy" className="text-pink-600 hover:text-pink-500">Return Policy</Link>.
        </p>
      </div>
    </div>

  );
}
