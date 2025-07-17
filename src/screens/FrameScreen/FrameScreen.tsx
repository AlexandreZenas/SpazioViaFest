import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { EventSolutionsSection } from "./sections/EventSolutionsSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { MainBannerSection } from "./sections/MainBannerSection";
import { MapSection } from "./sections/MapSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-background">
      <MainBannerSection />
      <MapSection />
      <ServicesOverviewSection />
      <EventSolutionsSection />
      {/* <FrequentlyAskedQuestionsSection /> */}
      <HeroSection />
      <GallerySection />
      {/* <ContactFormSection /> */}
      <TestimonialsSection />
    </div>
  );
};
