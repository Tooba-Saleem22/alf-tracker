import React from "react";

const Contact = () => {
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
    </div>
  );
};

export default Contact;
