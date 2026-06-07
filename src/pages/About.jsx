import { motion } from "framer-motion";
import {
  ShieldCheck,
  Settings,
  DollarSign,
  Leaf,
  FlaskConical,
  Globe,
  Target,
  Eye,
} from "lucide-react";
import TestimonialSection from "../components/TestimonialSection";

function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Utmost customer satisfaction",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
    },
    {
      icon: DollarSign,
      title: "COST EFFICIENCY",
    },
    {
      icon: Leaf,
      title: "Social Responsibility & Environment Friendliness",
    },
    {
      icon: FlaskConical,
      title: "Research & Development",
    },
    {
      icon: Globe,
      title: "International Standards",
    },
  ];

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
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-20">
            <span className="text-white">About</span>{" "}
            <span className="text-red-500">Us</span>
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

      {/* OUR VALUES SECTION */}
      <section className="w-full py-16 md:-mt-32 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-black">Our </span>
              <span className="text-red-600">Values</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="w-[280px] min-h-[110px] bg-white border border-black/20 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-0">
                    <Icon className="text-red-600 w-8 h-8" />
                  </div>

                  <h3 className="text-[17px] font-semibold text-gray-900 leading-6">
                    {value.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION IMAGE FULL WIDTH */}
      <section className="w-full">
        <img
          src="/mission.png"
          alt="Mission"
          className="w-full h-auto mb-10 object-cover"
        />
      </section>

      {/* CEO MESSAGE SECTION */}
      <section className="w-full py-10 px-4 md:px-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border border-red-600 rounded-md overflow-hidden flex bg-white"
        >
          {/* LEFT RED BAR */}
          <div className="w-20 md:w-24 bg-gradient-to-b from-red-500 to-red-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 25 25"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M4 6h16v12H4V6z"
              />
            </svg>
          </div>

          {/* CONTENT */}
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-3xl font-bold mb-3">
              <span className="text-black">CEO</span>{" "}
              <span className="text-red-700">Message</span>
            </h2>

            <p className="text-gray-700 text-[13px] md:text-[14px] leading-6">
              Reputations are hard won & easily lost! We, at Tracking World are
              striving to sustain and build on the remarkable success which we
              have enjoyed since TW’s launch about a decade ago. Our focus has
              always been to challenge the status quo; working proactively with
              our customers to find the best solutions and applications to
              assure sustainable long term relationships. This is evident as we
              are the only Fleet Management Company that has the knowledge &
              capability for both R&D and certainly for the technology
              capability. This has helped us achieve solid partnerships with the
              top corporate companies of Pakistan.
            </p>
          </div>
        </motion.div>
      </section>
      <TestimonialSection />
    </div>
  );
}

export default About;
