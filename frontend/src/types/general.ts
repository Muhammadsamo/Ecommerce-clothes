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
  image: string;
  name: string;
  rating: number;
  price: number;
  category: string;
  dressStyle: string;
  color: string;
  size: string;
}

export interface UserReview {
  id?: number;
  rating: number;
  userName: string;
  userReview: string;
  verified: boolean;
}
