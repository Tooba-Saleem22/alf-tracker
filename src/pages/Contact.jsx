import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="w-full m-0 p-0">
      {/* HERO SECTION */}
      <section className="relative w-full h-[200px] md:h-[250px] overflow-hidden -mt-20">
        <img
          src="/contact.jfif"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-20">
            <span className="text-white">Contact</span>{" "}
            <span className="text-red-500">Us</span>
          </h1>
        </div>
      </section>

      {/*-------------------------------- CONTACT INTRO SECTION --------------------------------*/}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <p className="text-sm uppercase tracking-[2px] text-black font-medium mb-4">
              WE WORK SEAMLESSLY WITH OUR CLIENTS FOR THE LONG-TERM
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-red-600 leading-tight">
              Give us a call or drop by anytime, we endeavor
              <br />
              to answer all inquiries within 24 hours.
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {/* Location */}
            <div className="group border border-gray-200 p-6 text-center hover:bg-red-700 transition-all duration-300">
              <div className="text-4xl mb-4">📍</div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-all duration-300">
                Our Location
              </h3>

              <p className="text-sm text-gray-600 leading-6 group-hover:text-white transition-all duration-300">
                Plot # 1-A, Sector 24
                <br />
                Korangi Industrial Area
                <br />
                Karachi, Pakistan
              </p>
            </div>

            {/* Phone */}
            <div className="group border border-gray-200 p-6 text-center hover:bg-red-700 transition-all duration-300">
              <div className="text-4xl mb-4">📞</div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-all duration-300">
                Call Us
              </h3>

              <p className="text-sm text-gray-600 leading-6 group-hover:text-white transition-all duration-300">
                +92 300 1234567
                <br />
                Mon - Sat
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

            {/* Email */}
            <div className="group border border-gray-200 p-6 text-center hover:bg-red-700 transition-all duration-300">
              <div className="text-4xl mb-4">✉️</div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-all duration-300">
                Email Us
              </h3>

              <p className="text-sm text-gray-600 leading-6 group-hover:text-white transition-all duration-300">
                info@alftracker.com
                <br />
                support@alftracker.com
                <br />
                Quick Response Guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT FORM SECTION */}
      <section className="w-full py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE - FAQ */}
          <div>
            <h4 className="text-sm uppercase tracking-[3px] text-gray-500 mb-3">
              Frequently Asked Questions
            </h4>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Common <span className="text-red-600">Questions</span>
            </h2>

            {[
              {
                question: "How does vehicle tracking work?",
                answer:
                  "Our GPS tracking system provides real-time vehicle location, route history, and monitoring through a secure platform.",
              },
              {
                question: "Can I track multiple vehicles?",
                answer:
                  "Yes, our fleet management solutions allow you to monitor multiple vehicles from a single dashboard.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "Yes, ALF Tracker provides professional installation and technical support services.",
              },
              {
                question: "Is customer support available?",
                answer:
                  "Yes, our support team is available to assist you with any technical or service-related queries.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold"
                >
                  {faq.question}
                  <span className="text-red-600 text-xl">
                    {openFAQ === index ? "-" : "+"}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          {/* -------------------RIGHT SIDE - CONTACT FORM -------------------*/}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-sm uppercase tracking-[3px] text-gray-500 mb-3">
              Get In Touch
            </h4>

            <h2 className="text-3xl font-bold mb-8">
              Contact <span className="text-red-600">Us</span>
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
              />

              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message (Optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
