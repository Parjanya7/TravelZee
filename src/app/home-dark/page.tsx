import AboutTwo from "@/components/HomeDark/AboutTwo";
import BlogTwo from "@/components/HomeDark/BlogTwo";
import DestinationOne from "@/components/HomeDark/DestinationOne";
import HeroTwo from "@/components/HomeDark/HeroTwo";
import PackageTwo from "@/components/HomeDark/PackageTwo";
import TestimonialTwo from "@/components/HomeDark/TestimonialTwo";
import VideoBanner from "@/components/HomeOne/VideoBannerOne";
import InstagramFeed from "@/components/layout/InstagramFeed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Dark | TravelZee - Travel & Tourism HTML/Tailwind CSS Template",
  description:
    "Welcome, TravelZee - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: [
    "tour",
    "travel",
    "booking",
    "rental",
    "nextJs",
    "tailwind",
    "trip",
    "beach",
    "holidy",
    "cruise",
    "vacation",
  ],
};

const HomeDark = () => {
  return (
    <main className="bg-[#121316]">
      <>
        <HeroTwo />
        <AboutTwo />
        <DestinationOne />
        <VideoBanner />
        <TestimonialTwo />
        <BlogTwo />
        <InstagramFeed />
      </>
    </main>
  );
};

export default HomeDark;
