import type { Product } from "../../types";
import ProductCard from "../core/productCard";

interface ProductsListProps {
  limit: number;
}

const getProducts = async ({
  page = 1,
  limit = 10,
}: {
  page: number;
  limit: number;
}) => {
  const response = await fetch(
    `http://localhost:8080/api/products?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.docs;
};

const ProductsList: React.FC<ProductsListProps> = async ({ limit }) => {
  const products = await getProducts({ page: 1, limit });

  return (
    <div className="grid grid-cols-5 gap-y-14">
      {products.map((product: Product) => (
        <ProductCard
          isLogin={false}
          key={product._id}
          image={product.thumbnails[0]}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductsList;
