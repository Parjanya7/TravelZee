"use client";

import AboutTwo from "@/components/HomeDark/AboutTwo";
import HeroTwo from "@/components/HomeDark/HeroTwo";
import PackageTwo from "@/components/HomeDark/PackageTwo";
import VideoBanner from "@/components/HomeOne/VideoBannerOne";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import useModalStore from "@/store/modal-items-store";

// export const metadata: Metadata = {
//   title: 'Home Dark | Arid - Travel & Tourism HTML/Tailwind CSS Template',
//   description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
//   keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
// }
type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
};

const HomeDark = () => {
  // State to control the visibility of the modal
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleProceed = () => {
    setShowModal(false);
    handleRedirect();
  };
  const handleSubmit = async () => {
    // e.preventDefault(); // Prevents the default form submit action

    // Check if any field is empty
    if (
      !formData.name.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.email.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }
    let reqBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phoneNumber,
      task: "SUBSCRIBE",
    };
    try {
      const response = await axios.post("/api/send-mail", reqBody);
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
      });
      // Optionally clear form or handle success
      alert("Thank You for Subscribing!");
      setShowModal(false);
      handleRedirect();
    } catch (error) {
      console.error("Error posting data:", error);
      // Optionally handle error
    }
  };
  const router = useRouter();
  const [redirect, setRedirect] = useState("");

  const { showModal, modalShown, setModalShown, setShowModal } =
    useModalStore();

  const handleSubscribe = (path: string) => {
    setRedirect(path);
    if (!modalShown) {
      setShowModal(true);
      setModalShown(true);
    } else {
      handleRedirect(path);
    }
  };

  const handleRedirect = (path: any = false) => {
    if (path) {
      router.push(path);
    } else {
      router.push(redirect);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  return (
    <main className="bg-[#121316]">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white w-full max-w-[20rem] mx-auto px-base py-base"
            ref={modalRef}
          >
            {/* <div className="text-center">
              <Link href="/"><img src="/assets/images/logo.png" alt="logo" className="mx-auto" /></Link>
            </div> */}
            {/* <ul id="tabs-nav" className="login-tabs flex gap-4 pt-6">
              <li className="basis-1/2">
                <Link href='#' className="tab-link-button active">Sign In</Link>
              </li>
              <li className="basis-1/2">
                <Link href='/signup' className="tab-link-button">Sign Up</Link>
              </li>
            </ul> */}
            <h4 className="text-zinc lg:text-[25px] text-2md  font-semibold leading-1.35">
              Lets subscribe before proceeding!
            </h4>
            <div className="mt-9">
              <input
                type="text"
                className="input_style__primary"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="lg:mt-5 mt-4">
              <input
                type="text/number"
                className="input_style__primary"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="lg:mt-5 mt-4">
              <input
                className="input_style__primary"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            {/* <div className="lg:mt-5 mt-4 flex gap-2 items-center">
              <input type="checkbox" id="logincheck" className="h-4 w-4 rounded-md border-primary-1 border" />
              <label htmlFor="logincheck" className="text-dark-2">Remember me</label>
            </div> */}
            <button
              aria-label="login form"
              onClick={handleSubmit}
              className="btn_primary__v1 uppercase !w-full justify-center lg:mt-5 mt-4"
            >
              Subscribe
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="login form"
              onClick={handleProceed}
              className="btn_primary__v1 !w-full uppercase justify-center lg:mt-5 mt-4"
            >
              View Deal
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <>
        <HeroTwo />
        <AboutTwo />
        {/* <DestinationOne/> */}
        <VideoBanner />
        <PackageTwo handleSubscribe={handleSubscribe} />
        {/* <TestimonialTwo/> */}
        {/* <BlogTwo/> */}
        {/* <InstagramFeed/> */}
      </>
    </main>
  );
};

export default HomeDark;
