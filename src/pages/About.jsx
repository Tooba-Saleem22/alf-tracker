import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full m-0 p-0">
      {/* HERO SECTION */}
      <section className="relative w-full h-[250px] md:h-[300px] overflow-hidden -mt-20 p-0">
        <img
          src="/about bg.png"
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl md:mt-20 mt-20 font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <section className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
              <span className="text-black">Company </span>
              <span className="text-red-600">Overview</span>
            </h2>

            <p className="text-gray-800 text-[15px] leading-6 text-justify">
              ALF Tracker is one of Pakistan’s rapidly growing telematics and
              IoT solution providers, offering advanced tracking and smart
              monitoring services for businesses and individuals. With a strong
              focus on innovation, reliability, and customer satisfaction, we
              help clients maintain secure, connected, and efficient operations.
              <br />
              <br />
              Our solutions include Vehicle Tracking, Fleet Management, Fuel
              Monitoring, Asset Tracking, Video Surveillance, and real-time IoT
              systems designed for transportation, logistics, security, and
              industrial sectors. ALF Tracker delivers scalable and customized
              technology solutions that improve visibility, security, and smart
              decision-making.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/portfolio.png"
              alt="Company Overview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
