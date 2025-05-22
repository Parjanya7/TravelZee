"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCurrency } from "@/context/CurrencyContext"; // Adjust path as needed

const HeaderOne = ({
  variant = "default",
}: {
  variant?: "default" | "transparent" | "transparent-V2";
}) => {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
    const { currency, setCurrency } = useCurrency();

  const ToggleSubMenu = (e: any) => {
    try {
      if (e.target.nextSibling.classList.contains("nav-show")) {
        e.target.nextSibling.classList.remove("nav-show");
      } else {
        e.target.nextSibling.classList.add("nav-show");
      }
    } catch (err) {}
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //  setCurrency(e.target.value as "GBP" | "INR");
    setCurrency(e.target.value as "GBP" | "INR");
  };
  return (
    <header
      className={`header-style 
        ${isSticky ? "sticky" : ""} 
        ${variant === "transparent" ? "herder-variant-three" : ""}
        ${variant === "transparent-V2" ? "herder-variant-two" : ""}`}
    >
      {/* Desktop Header */}
      <div className="desktop-menu max-w-[1570px] mx-auto justify-between items-center xl:flex hidden">
        <div className="main-menu flex items-center">
          <Link href="/" className="shrink-0 -mt-8 ml-5">
            <Image
              alt="logo"
              width={100}
              height={70}
              className="max-w-[58px] -mb-5"
              src="/assets/images/logo.png"
              priority
            />
          </Link>

          <div className="main-menu uppercase">
            <ul className="flex items-center nav-list">
              <li className="group/step-one">
                <Link href="/" className="nav-link">
                  Travel Zee World
                </Link>
              </li>
              <li className="group/step-one">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Currency Dropdown + Contact */}
        <div className="shrink-0 flex items-center gap-4">
          <select className="btn_primary__v1 outlined focus:outline-none focus:ring-0 custom-select" value={currency} onChange={handleCurrencyChange}>
                <option value="GBP" className="btn_primary__v1 outlined">GBP (£)</option>
                {/* <option value="EUR" className="btn_primary__v1 outlined">EUR (€)</option> */}
                <option value="INR" className="btn_primary__v1 outlined">INR (₹)</option>
          </select>
          <Link href="/contact" className="btn_primary__v1 outlined">
            Contact Us
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-menu xl:hidden flex justify-between items-center relative">
        <Link href="/" className="shrink-0 max-w-[50px]">
          <Image
            alt="logo"
            width="100"
            height="70"
            src="/assets/images/logo.png"
          />
        </Link>
        <div className="space-x-4 flex items-center">
          <Link
            href="/login"
            className="shrink-0 inline-flex justify-center items-center bg-primary-2 rounded-full h-10 w-10 text-white"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <button
            className={`hamburger ${toggle ? "hum-active" : ""}`}
            id="hamburger"
            onClick={() => setToggle(!toggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`mobil-menu ${toggle ? "mm-active" : ""}`}
        >
          <ul>
            <li className="group/step-one">
              <Link href="/" className="nav-link nav-link-sm" onClick={ToggleSubMenu}>
                Home
              </Link>
            </li>
            <li className="group/step-one">
              <Link href="/about" className="nav-link nav-link-sm" onClick={ToggleSubMenu}>
                About Us
              </Link>
            </li>
            <li className="group/step-one">
              <Link href="/contact" className="nav-link nav-link-sm" onClick={ToggleSubMenu}>
                Contact Us
              </Link>
            </li>
            <li className="group/step-one">
              {/* Currency dropdown for mobile */}
         
                <select className="bg-transparent text-white m-2 px-1 border-none focus:outline-none focus:ring-0" value={currency} onChange={handleCurrencyChange}>
                <option value="GBP" className="bg-black text-white">GBP (£)</option>
                {/* <option value="EUR" className="btn_primary__v1 outlined">EUR (€)</option> */}
                <option value="INR" className="bg-black text-white">INR (₹)</option>
          </select>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
