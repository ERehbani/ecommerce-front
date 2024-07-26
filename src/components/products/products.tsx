"use client";
import { useEffect, useState } from "react";
import type { Product } from "../../types";
import ProductCard from "../core/productCard";
import { Skeleton } from "../ui/skeleton";

type ProductProps = {
  page: number;
  limit: number;
};

const getProducts = async ({ page = 1, limit = 10 }: ProductProps) => {
  const response = await fetch(
    `http://localhost:8080/api/products?page=${page}&limit=${limit}`
  );
  const data = await response.json();
  return data.docs;
};
interface ProductsComponentProps {
  limit?: number;
}

const Products: React.FC<ProductsComponentProps> = ({ limit = 10 }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  console.log(currentPage);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const products = await getProducts({ page: currentPage, limit });
      setLoading(false);
      setProducts(products);
    };
    fetchProducts();
  }, [currentPage, limit]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-20 my-10">
      {loading ? (
        <div className="grid grid-cols-5 gap-x-2 gap-y-14">
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
          <Skeleton className="w-[280px] h-[448px] bg-gray-800" />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4 gap-x-4 gap-y-14">
          {products.map((product: Product) => (
            <ProductCard
              key={product._id}
              image={product.thumbnails[0]}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products