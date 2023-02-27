export interface Product {
  category: string;
  content?: string;
  description?: string;
  id: string;
  is_enabled: number;
  origin_price: number;
  price: number;
  title: string;
  unit: string;
  num: number;
  imageUrl?: string;
  imagesUrl: string[];
}

export interface Pagination {
  total_pages: number;
  current_page: number;
  has_pre: boolean;
  has_next: boolean;
  category: string;
}

export interface Products {
  products: Product[];
}

export interface User {
  name: string;
  email: string;
  tel: string;
  address: string;
}

export interface UserForm {
  user: User;
  message: string;
}

export interface Coupon {
  id: string;
  title: string;
  is_enabled: number;
  percent: number;
  due_date: number;
  code: string;
}

export interface Cart {
  coupon_code?: string;
  coupon?: Coupon;
  id: string;
  product: Product;
  product_id: string;
  qty: number;
  total: number;
  final_total: number;
}

export interface Carts {
  carts: Cart[];
  total: number;
  final_total: number;
}

export interface Order {
  create_at: number;
  paid_date: number;
  id: string;
  is_paid: boolean;
  message: string;
  products: Cart[];
  user: User;
  total: number;
  num: number;
}

interface Article {
  title: string;
  description: string;
  image: string;
  tag: string[];
  create_at: number;
  author: string;
  isPublic: boolean;
  content: string;
}
