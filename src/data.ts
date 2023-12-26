import { ProductInfo, UserReview } from "@/types/general";
import { Cat } from "lucide-react";

enum Category {
  TSHIRTS = "t-shirts",
  SHIRTS = "shirts",
  JEANS = "jeans",
  SHORTS = "shorts",
  Hoodie = "hoodie",
}

export const newArrivals: ProductInfo[] = [
  {
    id: 1,
    image: "/images/image7.png",
    name: "T-SHIRT WITH TAPE DETAILS",
    rating: 4.5,
    price: 120,
    category: Category.TSHIRTS,
  },
  {
    id: 2,
    image: "/images/image8.png",
    name: "SKINNY FIT JEANS",
    rating: 3.5,
    price: 240,
    category: Category.JEANS,
  },
  {
    id: 3,
    image: "/images/image9.png",
    name: "CHECKERED SHIRT",
    rating: 4.5,
    price: 180,
    category: Category.SHIRTS,
  },
  {
    id: 4,
    image: "/images/image10.png",
    name: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    price: 130,
    category: Category.TSHIRTS,
  },
];

export const topSellings: ProductInfo[] = [
  {
    id: 1,
    image: "/images/image7-2.png",
    name: "VERTICAL STRIPED SHIRT",
    rating: 5,
    price: 212,
    category: Category.SHIRTS,
  },
  {
    id: 2,
    image: "/images/image8-2.png",
    name: "COURAGE GRAPHIC T-SHIRT",
    rating: 4,
    price: 145,
    category: Category.TSHIRTS,
  },
  {
    id: 3,
    image: "/images/image9-2.png",
    name: "LOOSE FIT BERMUDA SHORTS",
    rating: 3,
    price: 80,
    category: Category.SHORTS,
  },
  {
    id: 4,
    image: "/images/image10-2.png",
    name: "FADED SKINNY JEANS",
    rating: 4.5,
    price: 210,
    category: Category.JEANS,
  },
];

export const productsData: ProductInfo[] = [
  {
    id: 1,
    image: "/images/image7.png",
    name: "T-SHIRT WITH TAPE DETAILS",
    rating: 4.5,
    price: 120,
    category: Category.TSHIRTS,
  },
  {
    id: 2,
    image: "/images/image8.png",
    name: "SKINNY FIT JEANS",
    rating: 3.5,
    price: 240,
    category: Category.JEANS,
  },
  {
    id: 3,
    image: "/images/image9.png",
    name: "CHECKERED SHIRT",
    rating: 4.5,
    price: 180,
    category: Category.SHIRTS,
  },
  {
    id: 4,
    image: "/images/image10.png",
    name: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    price: 130,
    category: Category.TSHIRTS,
  },

  {
    id: 5,
    image: "/images/image7-2.png",
    name: "VERTICAL STRIPED SHIRT",
    rating: 5,
    price: 212,
    category: Category.SHIRTS,
  },
  {
    id: 6,
    image: "/images/image8-2.png",
    name: "COURAGE GRAPHIC T-SHIRT",
    rating: 4,
    price: 145,
    category: Category.TSHIRTS,
  },
  {
    id: 7,
    image: "/images/image9-2.png",
    name: "LOOSE FIT BERMUDA SHORTS",
    rating: 3,
    price: 80,
    category: Category.SHORTS,
  },
  {
    id: 8,
    image: "/images/image10-2.png",
    name: "FADED SKINNY JEANS",
    rating: 4.5,
    price: 210,
    category: Category.JEANS,
  },
];

export const userReviews: UserReview[] = [
  {
    id: 1,
    rating: 5,
    userName: "Sarah M.",
    userReview: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    verified: true,
  },
  {
    id: 2,
    rating: 5,
    userName: "Alex K.",
    userReview: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    verified: true,
  },
  {
    id: 3,
    rating: 5,
    userName: "James L.",
    userReview: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    verified: true,
  },
  {
    id: 4,
    rating: 5,
    userName: "James L.",
    userReview: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    verified: true,
  },
  {
    id: 5,
    rating: 5,
    userName: "James L.",
    userReview: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    verified: true,
  },
];

export const filters = [
  Category.TSHIRTS,
  Category.SHIRTS,
  Category.SHORTS,
  Category.Hoodie,
  Category.JEANS,
];

export const dressStyles = [
  { id: 1, value: "Casual" },
  { id: 2, value: "Formal" },
  { id: 3, value: "Party" },
  { id: 4, value: "Gym" },
];

export const colors = [
  { id: 1, value: "bg-[#00C12B]" },
  { id: 2, value: "bg-[#F50606] " },
  { id: 3, value: "bg-[#F5DD06]" },
  { id: 4, value: "bg-[#F57906]" },
  { id: 5, value: "bg-[#06CAF5]" },
  { id: 6, value: "bg-[#063AF5]" },
  { id: 7, value: "bg-[#7D06F5]" },
  { id: 8, value: "bg-[#7D06F5]" },
  { id: 9, value: "bg-[#FFFFFF]" },
  { id: 10, value: "bg-[#000000]" },
];
export const sizes = [
  { id: 1, value: "XX-Small" },
  { id: 2, value: "X-Small " },
  { id: 3, value: "Small" },
  { id: 4, value: "Medium" },
  { id: 5, value: "Large" },
  { id: 6, value: "X-Large" },
  { id: 7, value: "XX-Large" },
  { id: 8, value: "3X-Large" },
  { id: 9, value: "4X-Large" },
];
