import { ProductInfo, UserReview } from "@/types/general";

enum Category {
  TSHIRTS = "t-shirts",
  SHIRTS = "shirts",
  JEANS = "jeans",
  SHORTS = "shorts",
  Hoodie = "hoodie",
}

enum DressStyles {
  CASUAL = "Casual",
  FORMAL = "Formal",
  PARTY = "Party",
  GYM = "Gym",
}

enum Colors {
  GREEN = "#00C12B",
  RED = "#F50606",
  YELLOW = "#F5DD06",
  ORANGE = "#F57906",
  LIGHBLUE = "#06CAF5",
  BLUE = "#063AF5",
  PURPLE = "#7D06F5",
  PINK = "#F506A4",
  WHITE = "#FFFFFF",
  BLACK = "#000000",
}

enum Sizes {
  XXS = "XX-Small",
  XS = "X-Small",
  S = "Small",
  M = "Medium",
  L = "Large",
  XL = "X-Large",
  XXL = "XX-Large",
  XXXL = "3X-Large",
  XXXXL = "4X-Large",
}

export const newArrivals: ProductInfo[] = [
  {
    id: 1,
    image: "/images/image7.png",
    name: "T-SHIRT WITH TAPE DETAILS",
    rating: 4.5,
    price: 120,
    category: Category.TSHIRTS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.BLACK,
    size: Sizes.S,
  },
  {
    id: 2,
    image: "/images/image8.png",
    name: "SKINNY FIT JEANS",
    rating: 3.5,
    price: 240,
    category: Category.JEANS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.BLACK,
    size: Sizes.XXXL,
  },
  {
    id: 3,
    image: "/images/image9.png",
    name: "CHECKERED SHIRT",
    rating: 4.5,
    price: 180,
    category: Category.SHIRTS,
    dressStyle: DressStyles.FORMAL,
    color: Colors.RED,
    size: Sizes.L,
  },
  {
    id: 4,
    image: "/images/image10.png",
    name: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    price: 130,
    category: Category.TSHIRTS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.ORANGE,
    size: Sizes.XL,
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
    dressStyle: DressStyles.FORMAL,
    color: Colors.GREEN,
    size: Sizes.S,
  },
  {
    id: 2,
    image: "/images/image8-2.png",
    name: "COURAGE GRAPHIC T-SHIRT",
    rating: 4,
    price: 145,
    category: Category.TSHIRTS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.ORANGE,
    size: Sizes.S,
  },
  {
    id: 3,
    image: "/images/image9-2.png",
    name: "LOOSE FIT BERMUDA SHORTS",
    rating: 3,
    price: 80,
    category: Category.SHORTS,
    dressStyle: DressStyles.GYM,
    color: Colors.BLUE,
    size: Sizes.XS,
  },
  {
    id: 4,
    image: "/images/image10-2.png",
    name: "FADED SKINNY JEANS",
    rating: 4.5,
    price: 210,
    category: Category.JEANS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.BLACK,
    size: Sizes.XXXXL,
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
    dressStyle: DressStyles.FORMAL,
    color: Colors.BLACK,
    size: Sizes.XXS,
  },
  {
    id: 2,
    image: "/images/image8.png",
    name: "SKINNY FIT JEANS",
    rating: 3.5,
    price: 240,
    category: Category.JEANS,
    dressStyle: DressStyles.PARTY,
    color: Colors.BLUE,
    size: Sizes.M,
  },
  {
    id: 3,
    image: "/images/image9.png",
    name: "CHECKERED SHIRT",
    rating: 4.5,
    price: 180,
    category: Category.SHIRTS,
    dressStyle: DressStyles.PARTY,
    color: Colors.RED,
    size: Sizes.XS,
  },
  {
    id: 4,
    image: "/images/image10.png",
    name: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    price: 130,
    category: Category.TSHIRTS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.ORANGE,
    size: Sizes.XXL,
  },

  {
    id: 5,
    image: "/images/image7-2.png",
    name: "VERTICAL STRIPED SHIRT",
    rating: 5,
    price: 212,
    category: Category.SHIRTS,
    dressStyle: DressStyles.FORMAL,
    color: Colors.GREEN,
    size: Sizes.XXXL,
  },
  {
    id: 6,
    image: "/images/image8-2.png",
    name: "COURAGE GRAPHIC T-SHIRT",
    rating: 4,
    price: 145,
    category: Category.TSHIRTS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.ORANGE,
    size: Sizes.L,
  },
  {
    id: 7,
    image: "/images/image9-2.png",
    name: "LOOSE FIT BERMUDA SHORTS",
    rating: 3,
    price: 80,
    category: Category.SHORTS,
    dressStyle: DressStyles.GYM,
    color: Colors.LIGHBLUE,
    size: Sizes.M,
  },
  {
    id: 8,
    image: "/images/image10-2.png",
    name: "FADED SKINNY JEANS",
    rating: 4.5,
    price: 210,
    category: Category.JEANS,
    dressStyle: DressStyles.CASUAL,
    color: Colors.BLACK,
    size: Sizes.S,
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
  DressStyles.CASUAL,
  DressStyles.FORMAL,
  DressStyles.PARTY,
  DressStyles.GYM,
];

export const colors = [
  { id: 1, value: `bg-[#00C12B]` },
  { id: 2, value: `bg-[#F50606]` },
  { id: 3, value: `bg-[#F5DD06]` },
  { id: 4, value: `bg-[#F57906]` },
  { id: 5, value: `bg-[#06CAF5]` },
  { id: 6, value: `bg-[#063AF5]` },
  { id: 7, value: `bg-[#7D06F5]` },
  { id: 8, value: `bg-[#F506A4]` },
  { id: 9, value: `bg-[#FFFFFF]` },
  { id: 10, value: `bg-[#000000]` },
];

export const sizes = [
  { id: 1, value: "XX-Small" },
  { id: 2, value: "X-Small" },
  { id: 3, value: "Small" },
  { id: 4, value: "Medium" },
  { id: 5, value: "Large" },
  { id: 6, value: "X-Large" },
  { id: 7, value: "XX-Large" },
  { id: 8, value: "3X-Large" },
  { id: 9, value: "4X-Large" },
];
