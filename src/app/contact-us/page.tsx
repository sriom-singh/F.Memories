"use client";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await axios.post('/api/mails', {
        name: form.name,
        email: form.email,
        subject: "Contact ",
        message: `
                <strong>Name:</strong> ${form.name}<br/>
                <strong>Email:</strong> ${form.email}<br/>
                <strong>Phone:</strong> ${form.phone}<br/>
                <strong>Address:</strong> ${form.address}<br/>
                <strong>Message:</strong><br/>${form.message.replace(/\n/g, "<br/>")}
               `
      })
      if (res.status === 200) {
        toast("Thanks for Contacting us! We will reach to you shortly");
        setFeedback("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", address: "", message: "" });
      } else {
        setFeedback(res.data?.error || "Failed to send message.");
      }
    } catch (error: any) {
      setFeedback(error?.response?.data?.error || "Failed to send message.");
    }
    setLoading(false);
  };
  return (
    <div className="bg-gradient-to-b from-black/25 via-white to-white">
      <Section className="pt-28">
        <div className="px-4 mt-4 mx-auto sm:px-6 py-4 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className=" gap-4 justify-between mx-auto mt-12 sm:mt-16">
            <div className="grid  gap-4 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden py-2 bg-white/80 rounded-xl">
                <div className="p-4 ">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className=" mt-2 text-lg font-medium text-gray-900">
                    +91-9910583811
                  </p>
                  {/* <p className="mt-1 text-lg font-medium text-gray-900">
                    +91-9910583811
                  </p> */}
                </div>
              </div>

              <div className="overflow-hidden  bg-white/80 rounded-xl">
                <div className="p-4">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-primary text-gray-400 text"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    infoframingmemoriess@gmail.com
                  </p>
                  {/* <p className="mt-1 text-lg font-medium text-gray-900">
                    hr@example.com
                  </p> */}
                </div>
              </div>

              <div className="overflow-hidden bg-white/80 rounded-xl">
                <div className="p-4">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-primary "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-2 text-lg font-medium leading-relaxed text-gray-900">
                    V-32/2, Arvind Nagar, Delhi-110053
                  </p>
                </div>
              </div>
            </div>

            <div className=" mx-auto mt-12 overflow-hidden max-w-3xl shadow-sm border-[0.2px] bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">Your name</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">Email address</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">Phone number</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">Address</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          placeholder="Enter your address"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-base font-medium text-gray-900">Message</label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          placeholder="Your message"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows={4}
                        ></textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <Button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send"}
                      </Button>
                      {feedback && (
                        <div className="mt-2 text-center text-sm text-green-600">{feedback}</div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
