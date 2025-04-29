"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-semibold text-center text-pink-600 mb-8">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6">
            Send Us a Message
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-gray-800">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-gray-800">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Email"
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-gray-800">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full py-3 bg-pink-600 text-white text-lg font-semibold rounded-lg hover:bg-pink-700 focus:ring-2 focus:ring-pink-500"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>

        {/* Contact Details Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6">
            Our Contact Details
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Feel free to reach out to us with any questions or concerns. We're here to help!
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@hayahaven.com" className="text-pink-600">
                info@hayahaven.com
              </a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-lg text-gray-700">
              <strong>Address:</strong> 123 Modesty Lane, Islamic City, 12345
            </p>
            <p className="text-lg text-gray-700">
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
