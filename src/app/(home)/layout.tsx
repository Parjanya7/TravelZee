import FooterOne from "@/components/layout/FooterOne";
import HeaderOne from "@/components/layout/HeaderOne";
import React from "react";

const laybout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderOne variant="transparent-V2" />
      <main className="bg-[#121316]">
        {/* <main className="bg-[#121316] pb-24 lg:pb-30"> */}
        {children}
      </main>
      <FooterOne />
    </>
  );
};

export default laybout;
