import { CSSProperties } from "react";

export interface ComponentAttrs {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  id?: string;
  as?: React.ElementType;
}

export interface ProductInfo {
  id: number;
  images: string[];
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
  dressStyle: string;
  color: string;
  size: string;
  newArrival?: boolean;
  topSelling?: boolean;
  onSale?: boolean;
  onAddToCart?: (id: number) => void;
}

export interface UserReview {
  id?: number;
  rating: number;
  userName: string;
  userReview: string;
  verified: boolean;
}
