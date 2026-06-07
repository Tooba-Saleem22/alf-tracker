import React from "react";

const Services = () => {
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

      {/* OPTIONAL CONTENT SECTION */}
      <section className="w-full py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-black">ALF Trakker's </span>
            <span className="text-red-600">CSR Initiatives</span>
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-7">
            Since our inception in 1999, we have managed to assist CSR as a core
            element of its operations. Moving through the years, the company has
            diversified its impact portfolio and transformed it into a crucial
            part of its business strategy. Alf companies have contributed more
            than Rs. 12 million in the areas of education, health, and
            environment during the last financial year.
          </p>
          <p>
            As the group continues to grow, we have implemented initiatives to
            ensure corporate social responsibility and hence formalizing our
            collective compassion into a unified program that will support
            individuals and strengthen our impact altogether."
          </p>
          <h3 className="text-xl md:text-xl mt-4 font-base mb-6">
            <span className="text-black">
              “ALF has prioritized its CSR initiatives{" "}
            </span>
            <span className="text-red-600">
              under Education, Environment, and Health.”
            </span>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Services;
