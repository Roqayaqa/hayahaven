// src/pages/products.tsx
import { GetServerSideProps } from "next";
import { connectDB } from "@/lib/dbConnect";
import { Product } from "@/models/Product";

const ProductsPage = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await connectDB();
  const products = await Product.find();
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
};

export default ProductsPage;
