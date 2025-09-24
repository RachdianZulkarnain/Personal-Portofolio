import emailjs from "@emailjs/browser";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Alert from "../Alert";
import { Particles } from "../Particles";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<"success" | "danger">("success");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type: "success" | "danger", message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_k1pwbnd",
        "template_to9gyjs",
        {
          from_name: formData.name,
          to_name: "Rachdian Zulkarnain",
          from_email: formData.email,
          to_email: "rachdianmuhammadadha@gmail.com",
          message: formData.message,
        },
        "EmIPLjySsl3j77wCH"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center px-5 py-10 space-y-10  text-neutral-100 md:px-10 md:py-20"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="w-full max-w-lg p-6 space-y-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg sm:px-8 sm:py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold"
            ></label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold"
            ></label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold"
            ></label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Message ..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
