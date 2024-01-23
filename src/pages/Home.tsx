import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";

import { BrowseByStyle } from "@/components/home/BrowseByStyle";
import { BrandsBanner } from "@/components/layout/BrandsBanner";
// import { newArrivals, topSellings } from "../data";
import { ReviewSection } from "@/components/home/ReviewSection/ReviewSection";
import { productsData } from "@/data";

export const Home = () => {
  const newArrivals = productsData.filter((product) => product.newArrival);
  const topSellings = productsData.filter((product) => product.topSelling);

  return (
    <main className="overflow-hidden">
      <HeroSection heroTitle="FIND CLOTHES THAT MATCHES YOUR STYLE" />
      <BrandsBanner />
      <FeaturedProducts
        title="NEW ARRIVALS"
        link="/products"
        data={newArrivals}
      />
      <FeaturedProducts
        title="Top Sellings"
        link="/products"
        data={topSellings}
      />
      <hr className="h-0 max-w-[90rem] mx-auto border border-[#0000001A]" />
      <BrowseByStyle />
      <ReviewSection />
    </main>
  );
};
