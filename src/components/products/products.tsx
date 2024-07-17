"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "../../types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "../ui/skeleton";
import ProductCard from "../core/productCard";

const getProducts = async (page: number) => {
  const response = await fetch(
    `https://preentrega-1-coder.onrender.com/api/products?page=${page}`
  );
  const data = await response.json();
  return data.docs;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  console.log(currentPage);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const products = await getProducts(currentPage);
      setLoading(false);
      setProducts(products);
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-20 my-40">
      {loading ? (
        <div className="grid grid-cols-4 gap-x-2 gap-y-14">
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
        <div className="grid grid-cols-4 gap-x-2 gap-y-14">
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
      <Pagination className="">
        <PaginationContent className="bg-gray-800 text-white rounded-md">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(page)}
                isActive={currentPage === page}
                className="text-gray-600">
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
