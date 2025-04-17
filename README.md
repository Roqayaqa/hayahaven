# E-commerce Store

This project is an e-commerce store built with Next.js, designed to showcase products and facilitate online transactions. It includes features like product browsing, a contact form, and (potentially) payment processing.

## Technologies Used

*   **Framework:** Next.js (React framework for server-side rendering and static site generation)
*   **Styling:** Tailwind CSS (utility-first CSS framework)
*   **Components:** Shadcn UI (collection of accessible and customizable UI components built on Radix UI)
*   **Icons:** Lucide React (icon library)
*   **Form Handling:** React Hook Form (library for managing forms in React)
*   **Date Handling:** Date-fns (library for manipulating JavaScript dates)
*   **Payment Processing:** (Potentially) Stripe (payment gateway, based on the `src/services/payment.ts` file, but may not be fully implemented)
*   **Utilities:** clsx, tailwind-merge (utility functions for CSS class manipulation)
*   **Mobile Detection:**  Custom hook (`src/hooks/use-mobile.tsx`) for responsive design
*   **Toasts:** Custom hook (`src/hooks/use-toast.ts`) and Shadcn UI's toast component for user feedback


## Running the Project

1.  **Install dependencies:**  `npm install`
2.  **Start the development server:** `npm run dev`
3.  **Open your browser:** Go to `http://localhost:3000` (or the URL provided in the console).

## Next Steps

*   **Explore the code:** Start with `src/app/page.tsx` to understand the main page structure.  Look at components in the `src/components` directory.
*   **Implement missing features:** If not already fully functional, complete the payment processing integration with Stripe in `src/services/payment.ts`.
*   **Add product data:** Populate the store with actual product information, potentially from a database or CMS.
*   **Enhance the UI:** Customize the styling and components further to match a specific brand or design.
*   **Deploy the application:**  Deploy the project to a platform like Vercel, Netlify, or similar.

