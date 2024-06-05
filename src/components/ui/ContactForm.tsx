import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  text: string;
};
const ContactForm = () => {
  //  const [text, setText] = React.useState<String>("");
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    text: "",
  });

  // Function to handle changes in input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the default form submit action

    // Check if any field is empty
    if (
      !formData.name.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.email.trim() ||
      !formData.text.trim()
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
    let reqBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phoneNumber,
      message: formData.text,
      task: "CONTACTUS",
    };
    try {
      const response = await axios.post("/api/send-mail", reqBody);
      toast.success("Thank You! We will get in touch with you soon!", {
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
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        text: "",
      });
      console.log("execs");
      console.log("execs");
      // Optionally clear form or handle success
    } catch (error) {
      console.error("Error posting data:", error);
      // Optionally handle error
    }
  };

  return (
    <div className="max-w-[870px] mx-auto">
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
      <form>
        <div className="grid grid-cols-2 gap-base">
          <div className="lg:col-span-1 col-span-2">
            <input
              type="text"
              className="input_style__primary"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="lg:col-span-1 col-span-2">
            <input
              type="number"
              className="input_style__primary"
              value={formData.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="col-span-2">
            <input
              className="input_style__primary"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="col-span-2">
            <textarea
              name="text"
              onChange={handleChange}
              value={formData.text}
              cols={30}
              rows={6}
              className="input_style__primary"
              placeholder="Your Message..."
            />
          </div>
          <div className="col-span-2">
            <button
              aria-label="contact submit"
              type="submit"
              className="btn_primary__v1"
              onClick={(e) => handleSubmit(e)}
            >
              Send
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
