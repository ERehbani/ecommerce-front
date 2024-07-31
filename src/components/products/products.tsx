import { Suspense } from 'react';
import { Skeleton } from "../ui/skeleton";
import ProductsList from './productsList';

interface ProductsComponentProps {
  limit?: number;
}

const Products: React.FC<ProductsComponentProps> = ({ limit = 10 }) => {
  return (
    <div className="flex flex-col my-10">
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsList limit={limit} />
      </Suspense>
    </div>
  );
};

const ProductsSkeleton = () => (
  <div className="grid grid-cols-5 gap-x-2 gap-y-14">
    {[...Array(10)].map((_, i) => (
      <Skeleton key={i} className="w-[280px] h-[448px] bg-gray-800" />
    ))}
  </div>
);

export default Products;