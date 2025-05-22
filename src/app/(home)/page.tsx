"use client";

import AboutTwo from "@/components/HomeDark/AboutTwo";
import HeroTwo from "@/components/HomeDark/HeroTwo";
import PackageTwo from "@/components/HomeDark/PackageTwo";
import VideoBanner from "@/components/HomeOne/VideoBannerOne";
import { useState, useEffect, useRef, useCallback, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useModalStore from "@/store/modal-items-store";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
};

const HomeDark = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const router = useRouter();
  const [redirect, setRedirect] = useState("");

  const { showModal, modalShown, setModalShown, setShowModal } = useModalStore();

  const modalRef = useRef<HTMLDivElement>(null);

  // Memoize handleClickOutside to avoid re-creating it on every render
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, handleClickOutside]);

  const handleProceed = () => {
    setShowModal(false);
    handleRedirect();
  };

  const handleSubmit = async () => {
    if (
      !formData.name.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.email.trim()
    ) {
      toast.error("Please provide us all the details!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const reqBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phoneNumber,
      task: "SUBSCRIBE",
    };

    try {
      await axios.post("/api/send-mail", reqBody);
      setFormData({ name: "", phoneNumber: "", email: "" });
      toast.success("Thank You for subscribing with us!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setShowModal(false);
      setTimeout(() => {
        handleRedirect();
      }, 1500);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleSubscribe = (path: string) => {
    setRedirect(path);
    if (!modalShown) {
      setShowModal(true);
      setModalShown(true);
    } else {
      handleRedirect(path);
    }
  };

  const handleRedirect = (path: string | false = false) => {
    if (path) {
      router.push(path);
    } else {
      router.push(redirect);
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
                type="text"
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
            <button
              aria-label="subscribe form"
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
              aria-label="proceed"
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
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
