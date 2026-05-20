import { useEffect, useState } from "react";
import { Car, Fuel, Truck, Lightbulb, Camera, Droplets } from "lucide-react";

function SolutionsSection() {
  const solutions = [
    { title: "Vehicle Tracking", icon: Car },
    { title: "Fuel Management", icon: Fuel },
    { title: "Fleet Management", icon: Truck },
    { title: "Smart Energy", icon: Lightbulb },
    { title: "Video Surveillance", icon: Camera },
    { title: "Water Monitoring", icon: Droplets },
  ];

  const navImages = [
    "/nav-Civic-Final-768x424.webp",
    "/Nav-Elentra-Final-768x447.webp",
    "/Nav-HRV-Final-768x503.webp",
    "/Nav-Tucson-Final-768x518.webp",
  ];

  const features = [
    "Rear Camera + GPS Navigation",
    "Viber / Playstore / Radio / Android",
    "Easy Connect / E-Play",
    "Internet Connectivity",
    "Smartphone Connectivity",
    "Touch Screen (Capacitive)",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % navImages.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <>
      {/* TOP SECTION */}
      <section className="w-full py-20 px-5 md:px-16 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div className="animate-fadeUp">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black max-w-2xl">
              Our Top-notch <span className="text-red-600">Tracking</span> and{" "}
              <span className="text-red-600">IoT Solutions</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              We provide smart IoT-based systems to improve efficiency, safety,
              and real-time monitoring across industries.
            </p>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
              {solutions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    style={{ animationDelay: `${index * 120}ms` }}
                    className="bg-[#f5f5f5] rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm
                    animate-card group hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <Icon
                      size={30}
                      className="text-red-600 group-hover:text-white transition-all duration-300"
                    />

                    <h3 className="text-sm font-semibold text-black mt-3 group-hover:text-white transition-all duration-300">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col md:mt-24 md:ml-16 justify-center animate-slideRight">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Why Choose Our Solutions
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-4 hover:pl-6 transition-all duration-300">
                <h4 className="text-red-600 font-semibold text-lg">
                  Real-Time Monitoring
                </h4>

                <p className="text-gray-700 text-sm mt-1">
                  Track all your assets instantly with accurate live data
                  updates.
                </p>
              </div>

              <div className="border-l-4 border-black pl-4 hover:pl-6 transition-all duration-300">
                <h4 className="text-black font-semibold text-lg">
                  Smart Automation
                </h4>

                <p className="text-gray-700 text-sm mt-1">
                  Reduce manual work with intelligent automated systems.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-4 hover:pl-6 transition-all duration-300">
                <h4 className="text-red-600 font-semibold text-lg">
                  High Security
                </h4>

                <p className="text-gray-700 text-sm mt-1">
                  Ensure complete protection of your vehicles and data.
                </p>
              </div>

              <div className="border-l-4 border-black pl-4 hover:pl-6 transition-all duration-300">
                <h4 className="text-black font-semibold text-lg">
                  Scalable System
                </h4>

                <p className="text-gray-700 text-sm mt-1">
                  Easily expand operations without performance loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION SECTION */}
      <section className="w-full  bg-white py-20 px-5 md:px-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="animate-leftContent">
            <span className="text-red-600 font-semibold uppercase tracking-[3px] text-sm">
              ALF TRACKER
            </span>

            <h2 className="text-xl md:text-3xl font-bold leading-tight mt-4 text-black">
              <span className="text-red-600">Your navigation vision,</span>
              <br />
              our collaborative approach for outstanding results
            </h2>

            <p className="text-gray-600 text-base md:text-base leading-relaxed mt-6 max-w-2xl">
              ALF Tracker provides modern in-car navigation and smart multimedia
              systems designed for comfort, connectivity, and advanced driving
              experience.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="flex items-center gap-4 animate-feature"
                >
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>

                  <h4 className="text-black font-normal text-base md:text-base">
                    {item}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative animate-rightImage">
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[520px]  overflow-hidden bg-white ">
              {navImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Navigation"
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ${
                    current === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center mt-6 gap-3">
              {navImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-red-600 w-8" : "bg-gray-300 w-3"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE GRID SECTION */}
      <section className="w-full bg-white py-20 px-5 md:px-16 overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
          Powerful <span className="text-red-600">Tracking Features</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* LEFT SIDE STACK */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#fafafa] rounded-2xl p-5 shadow-md text-center">
              <img
                src="/Vehicle Immobilization.png"
                className="h-28 mx-auto object-contain"
              />
              <h3 className="mt-3 font-semibold">Vehicle Immobilization</h3>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-5 shadow-md text-center">
              <img
                src="/Theft Alerts.png"
                className="h-28 mx-auto object-contain"
              />
              <h3 className="mt-3 font-semibold">Theft Alerts</h3>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-5 shadow-md text-center">
              <img
                src="/24×7 Monitoring.png"
                className="h-28 mx-auto object-contain"
              />
              <h3 className="mt-3 font-semibold">24×7 Monitoring</h3>
            </div>
          </div>

          {/* CENTER IPHONE */}
          <div className="flex justify-center items-center">
            <div className="bg-[#fafafa] rounded-2xl p-6 shadow-xl">
              <img
                src="/iphone.png"
                className="h-[420px] object-contain mx-auto"
              />
              <h3 className="text-center mt-4 font-semibold text-red-600">
                Smart Mobile App Control
              </h3>
            </div>
          </div>

          {/* RIGHT SIDE STACK */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#fafafa] rounded-2xl p-5 shadow-md text-center">
              <img
                src="/Harsh Breaking Report.png"
                className="h-28 mx-auto object-contain"
              />
              <h3 className="mt-3 font-semibold">Harsh Breaking Report</h3>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-5 shadow-md text-center">
              <img
                src="/Speed Alerts.png"
                className="h-28 mx-auto object-contain"
              />
              <h3 className="mt-3 font-semibold">Speed Alerts</h3>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-5 shadow-md text-center">
              <img
                src="/Vehicle Location.png"
                className="h-28 mx-auto object-contain"
              />
              <h3 className="mt-3 font-semibold">Vehicle Location</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes leftContent {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes rightImage {
            from {
              opacity: 0;
              transform: translateX(60px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease-out;
          }

          .animate-slideRight {
            animation: slideRight 0.8s ease-out;
          }

          .animate-card {
            animation: fadeUp 0.7s ease-out both;
          }

          .animate-leftContent {
            animation: leftContent 1s ease-out;
          }

          .animate-rightImage {
            animation: rightImage 1s ease-out;
          }

          .animate-feature {
            animation: fadeUp 0.8s ease-out both;
          }
        `}
      </style>
    </>
  );
}

export default SolutionsSection;
