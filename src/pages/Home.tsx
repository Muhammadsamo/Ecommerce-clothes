import { HeroSection } from "@/components/home/HeroSection";
import { SelectedProducts } from "@/components/SelectedProducts";
import { BrowseByStyle } from "@/components/home/BrowseByStyle";
import { BrandsBanner } from "@/components/layout/BrandsBanner";
import { newArrivals, topSellings } from "../data";
import { ReviewSection } from "@/components/home/ReviewSection/ReviewSection";

export const Home = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection heroTitle="FIND CLOTHES THAT MATCHES YOUR STYLE" />
      <BrandsBanner />
      <SelectedProducts title="NEW ARRIVALS" link="/" data={newArrivals} />
      <hr className="h-0 max-w-[90rem] mx-auto border border-[#0000001A]" />
      <SelectedProducts title="TOP SELLING" link="/" data={topSellings} />
      <BrowseByStyle />
      <ReviewSection />
    </main>
  );
};
