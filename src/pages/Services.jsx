import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const individualServices = [
    "Vehicle Tracking",
    "Bike Tracking",
    "Personal Tracking",
  ];

  const businessServices = [
    "Fleet Management Solution",
    "Fuel Management Solution",
    "Smart Energy Management",
    "AI-Based Vehicle Video Surveillance",
    "Cold Chain Monitoring",
    "Water Level Monitoring",
    "Smart Farm Management",
    "Moveable Asset Tracking System",
    "Vessel Monitoring",
    "Automated Fuel Terminals",
  ];

  return (
    <div className="w-full m-0 p-0">
      {/* HERO SECTION */}
      <section className="relative w-full h-[250px] md:h-[300px] overflow-hidden -mt-20">
        <img
          src="/services.png"
          alt="Services Banner"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-20">
            <span className="text-white">Our</span>{" "}
            <span className="text-red-500">Services</span>
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="w-full py-16 px-6 md:px-16 bg-white">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-black">ALF Tracker's </span>
            <span className="text-red-600">Smart Solutions</span>
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-7 mb-4">
            ALF Tracker provides advanced tracking and IoT solutions designed to
            enhance security, efficiency, and operational excellence. Our
            services cater to both individuals and businesses, ensuring
            real-time monitoring and complete peace of mind.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-7">
            With innovative technologies and customer-focused solutions, ALF
            Tracker continues to empower organizations and individuals through
            reliable tracking systems and intelligent management tools.
          </p>

          <h3 className="text-lg md:text-xl mt-6 font-medium">
            <span className="text-black">
              "Delivering intelligent tracking solutions for{" "}
            </span>
            <span className="text-red-600">
              safety, efficiency, and growth."
            </span>
          </h3>
        </motion.div>
      </section>

      {/* INDIVIDUAL SERVICES */}
      <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              For <span className="text-red-600">Individuals</span>
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Personalized tracking solutions designed to ensure safety,
              convenience, and peace of mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:bg-red-600 transition-all duration-300"
              >
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0 group-hover:bg-white group-hover:text-red-600 transition-all duration-300">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-all duration-300">
                    {service}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-6 group-hover:text-white transition-all duration-300">
                  Advanced tracking solutions designed to keep you connected and
                  protected wherever you go.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* BUSINESS SERVICES */}
      <section className="w-full py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              For <span className="text-red-600">Businesses</span>
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Intelligent solutions that help businesses optimize operations,
              improve efficiency, and strengthen security through real-time
              monitoring.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:bg-red-600 transition-all duration-300"
              >
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0 group-hover:bg-white group-hover:text-red-600 transition-all duration-300">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-all duration-300">
                    {service}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-6 group-hover:text-white transition-all duration-300">
                  Reliable and intelligent solutions tailored to improve
                  monitoring, efficiency, and security for modern businesses.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA SECTION */}
      <section className="relative w-full py-20 px-6 overflow-hidden">
        {/* Background Image */}
        <img
          src="/about bg.png"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for a smarter tracking solution?
          </h2>

          <p className="text-white/90 mb-8 text-base md:text-lg">
            Get in touch with ALF Tracker to discover solutions tailored to your
            personal and business needs.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
