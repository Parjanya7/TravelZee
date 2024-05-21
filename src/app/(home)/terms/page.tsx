import TermsOfUse from "@/components/HomeOne/TermsOfUse";
import FeaturedPackages from "@/components/HomeOne/FeaturedPackages";
import Guide from "@/components/HomeOne/Guide";
import TestimonialOne from "@/components/HomeOne/TestimonialOne";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InstagramFeed from "@/components/layout/InstagramFeed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
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

const About = () => {
  return (
    <>
      <Breadcrumb page="Terms of Use" pageTitle="Terms and Coditions" />
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white">
        <TermsOfUse />
      </div>
    </>
  );
};

export default About;
