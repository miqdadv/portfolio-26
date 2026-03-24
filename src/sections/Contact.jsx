import React, { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { BackgroundBeams } from "../components/BackgroundBeams";
import { InteractiveGridPattern } from "../components/InteractiveGridPattern";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Miqdad",
          from_email: formData.email,
          to_email: "vichawera786@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong ❌");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      {/* Background
      <div className="absolute inset-0 -z-10">
        <BackgroundBeams />
      </div> */}

        {/* Interactive Grid Background */}
      <InteractiveGridPattern
        width={40}
        height={40}
        squares={[40, 40]}
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-40"
        squaresClassName="hover:fill-white transition-colors duration-200"
      />

      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#030412] to-transparent blur-xl" />

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030412] to-transparent blur-xl" />

        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#030412] to-transparent blur-xl" />

        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#030412] to-transparent blur-xl" />
      </div> */}

      <div className="z-10 flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
           Have an idea, opportunity, or just want to connect? I’m always open to building impactful products and solving real-world problems.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full" action="">
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Mickey Tyson"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="mickey@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="message"
            />
          </div>
          {/* <button className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
            Send
          </button> */}
          <SubmitButton text="Send" type="submit" isLoading={isLoading} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
