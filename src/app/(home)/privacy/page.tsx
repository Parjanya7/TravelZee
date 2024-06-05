import PrivacyPolicy from "@/components/HomeOne/PrivacyPolicy";
import Breadcrumb from "@/components/layout/Breadcrumb";
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
      <Breadcrumb page="" pageTitle="Privacy Policy" />
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white">
        <PrivacyPolicy />
      </div>
    </>
  );
};

export default About;
