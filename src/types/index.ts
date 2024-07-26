export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  code: string;
  stock: number;
  category: string;
  status: boolean;
  thumbnails: string[];
  owner: string;
  __v: number;
}

export interface ProductCardType {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isLogin: boolean;
}
