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

  return (
    <div className="w-full py-20 px-5 md:px-16 bg-white overflow-hidden">
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
          <div className="grid grid-cols-3 gap-4 mt-10">
            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="bg-[#f4f4f4] rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-md
                  animate-card group hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <Icon
                    size={30}
                    className="text-red-600 group-hover:text-white transition-all duration-300"
                  />

                  <h3 className="text-sm font-semibold text-black mt-3 group-hover:text-white">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:mt-28 md:ml-20 justify-center animate-slideRight">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Why Choose Our Solutions
          </h3>

          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-4 hover:pl-6 transition-all duration-300">
              <h4 className="text-red-600 font-semibold text-lg">
                Real-Time Monitoring
              </h4>
              <p className="text-gray-700 text-sm mt-1">
                Track all your assets instantly with accurate live data updates.
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

          .animate-fadeUp {
            animation: fadeUp 0.8s ease-out;
          }

          .animate-slideRight {
            animation: slideRight 0.8s ease-out;
          }

          .animate-card {
            animation: fadeUp 0.6s ease-out both;
          }
        `}
      </style>
    </div>
  );
}

export default SolutionsSection;
