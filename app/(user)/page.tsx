import AssistanceSteps from "@/components/Home/AssistentSection";
// import BrandedMerch from "@/components/Home/BrandedMerch";
import PopularCategories from "@/components/Home/CategoriesSection";
import ClientReviews from "@/components/Home/ClientReviewsSection";
import Hero from "@/components/Home/HeroSection";
import LocalVsFactory from "@/components/Home/LocalVsFactory";
import LogoSlider from "@/components/Home/LogoSlider";
import { PopularProducts } from "@/components/Home/PopularProducts";
import ProjectForm from "@/components/Home/ProjectForm";
import XpromoExclusive from "@/components/Home/XpromoExclusive";

export default function Home() {
  // Dynamically import Lottie with SSR disabled
  return (
    <div className="min-h-[100vh] ">
      <Hero />
      <LogoSlider />
      <PopularCategories />
      {/* <BrandedMerch /> */}
      <XpromoExclusive />
      <ProjectForm />
      <AssistanceSteps />
      <PopularProducts />
      <LocalVsFactory />
      <ClientReviews />
      {/* <FAQSection /> */}
    </div>
  );
}
