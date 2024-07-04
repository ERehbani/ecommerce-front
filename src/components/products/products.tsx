"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "../types";
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

  console.log(currentPage)

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
    <Card
      key={product._id}
      className="w-[280px] max-h-[448px] bg-gray-800 text-white py-4 flex flex-col justify-between">
      <CardHeader className="gap-5">
        <Image
          className="w-full object-cover h-40 rounded-lg"
          src={
            "https://images.unsplash.com/photo-1569668444050-b7bc2bfec0c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="photo"
          width={300}
          height={30}
        />
        <CardTitle className="h-12">{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-5 mt-auto">
        <p>${product.price}</p>
        <Button className="w-full bg-orange-600 ">Ver más {">"}</Button>
      </CardFooter>
    </Card>
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
              <PaginationLink href="#" onClick={() => handlePageChange(page)} isActive={currentPage === page} className="text-gray-600">
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
