import Hero from "@/components/sections/Hero";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import FeatureSection from "@/components/sections/FeatureSection";
import BuyerSection from "@/components/sections/BuyerSection";
import NewSection from "@/components/sections/NewSection";
import CompanyAboutPage from "@/components/sections/CompanyAbout";
import ProjectAbout from "@/components/sections/ProjectAbout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <NewSection />
      <CompanyAboutPage />
      <ProjectAbout />

      <BuyerSection />
      <FeatureSection />
    </MainLayout>
  );
}
