import React, { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 px-4"
      style={{ backgroundColor: "#f9eef771" }}
    >
       
      <RevealOnScroll>
        {/* Heading */}
        <div className="w-full text-center mb-12">
          <h2
            className="text-4xl font-bold bg-gradient-to-r 
                       from-[#d7a1a9] to-[#ffcc80] bg-clip-text 
                       text-transparent"
          >
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            I love to hear from you. Whether you have a question or just want
            to chat about projects — shoot me a message.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          className="space-y-6 max-w-lg w-full mx-auto mb-20"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="from_name"
            value={formData.name}
            placeholder="Name..."
            required
            className="w-full bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white placeholder-white/70 
                       py-3 px-6 rounded-lg font-medium transition duration-300 
                       outline-none focus:ring-2 focus:ring-[#d7a1a9] shadow-sm"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="example@gmail.com"
            required
            className="w-full bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white placeholder-white/70 
                       py-3 px-6 rounded-lg font-medium transition duration-300 
                       outline-none focus:ring-2 focus:ring-[#d7a1a9] shadow-sm"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <textarea
            name="message"
            rows={5}
            value={formData.message}
            placeholder="Your Message..."
            required
            className="w-full bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white placeholder-white/70 
                       py-3 px-6 rounded-lg font-medium transition duration-300 
                       outline-none focus:ring-2 focus:ring-[#d7a1a9] shadow-sm"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-[#d7a1a9] text-white py-3 px-6 rounded 
                       font-medium transition relative overflow-hidden 
                       hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,128,0.4)]"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-10">
          {/* Left - Reach Me */}
          <div className="md:w-1/2">
            <h3 className="text-sm uppercase font-semibold text-[#d7a1a9] mb-3">
              Reach me at
            </h3>
            <p className="space-y-1 text-gray-700">
              <a
                href="mailto:sayhello@luther.com"
                className="block hover:text-[#ffcc80]"
              >
                divyarajbahak@gmail.com
              </a>
              <a
                href="phone no:+9779860478038"
                className="block hover:text-[#ffcc80]"
              >
                +977 9860478038
              </a>
            </p>
          </div>

          {/* Right - Social */}
          <div className="md:w-1/2 flex md:justify-end">
            <div>
              <h3 className="text-sm uppercase font-semibold text-[#d7a1a9] mb-3">
                Social
              </h3>
              <div className="flex gap-6 text-2xl text-gray-800">
                <a
                  href="https://www.linkedin.com/in/divya-rajbahak"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ffcc80]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/rajbahakdivya"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ffcc80]"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600 mt-10">
        &copy; {new Date().getFullYear()} Divya Rajbahak. All rights reserved.
      </div>

    </section>
  );
};
