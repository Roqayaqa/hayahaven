import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Head from 'next/head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>About Us - Haya Haven</title>
        <meta name="description" content="Learn more about Haya Haven and our mission to provide stylish and modest hijabs." />
        <meta property="og:title" content="About Us - Haya Haven" />
        <meta property="og:description" content="Learn more about Haya Haven and our mission to provide stylish and modest hijabs." />
      </Head>

      <body>
        <Header />
        <main className="container mx-auto pt-[9rem] px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
