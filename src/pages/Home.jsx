import { useEffect, useState } from "react";
import SolutionsSection from "../components/SolutionsSection";

function Home() {
  const line1Text = "Advanced Vehicle";
  const line2Text = "Tracking System";

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [startLine2, setStartLine2] = useState(false);
  const [done, setDone] = useState(false);

  const [showSection, setShowSection] = useState(false);

  // ✅ FIX: slider state added
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let i = 0;

    const interval1 = setInterval(() => {
      setLine1(line1Text.slice(0, i));
      i++;

      if (i > line1Text.length) {
        clearInterval(interval1);
        setStartLine2(true);
      }
    }, 140);

    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    if (!startLine2) return;

    let j = 0;

    const interval2 = setInterval(() => {
      setLine2(line2Text.slice(0, j));
      j++;

      if (j > line2Text.length) {
        clearInterval(interval2);
        setDone(true);

        setTimeout(() => {
          setShowSection(true);
        }, 500);
      }
    }, 140);

    return () => clearInterval(interval2);
  }, [startLine2]);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden -mt-6">
        <img
          src="/WhatsApp Image 2026-05-19 at 4.58.25 PM.jpeg"
          alt="tracking"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 md:via-white/40 to-transparent"></div>

        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-5 sm:px-8 md:px-20 space-y-3 md:space-y-4">
          <p className="text-red-600 uppercase tracking-widest font-medium text-xs sm:text-sm md:text-base">
            Fleet Intelligence Platform
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black uppercase whitespace-nowrap">
            {done ? line1Text : line1}
            {!done && (
              <span className="border-r-2 border-red-600 ml-1 animate-pulse"></span>
            )}
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase whitespace-nowrap">
            <span className="text-red-600">
              {done
                ? "Tracking"
                : line2.includes("Tracking")
                  ? line2.slice(0, 9)
                  : ""}
            </span>

            <span className="text-black">
              {done ? " System" : line2.length > 9 ? line2.slice(9) : ""}
            </span>

            {!done && (
              <span className="border-r-2 border-red-600 ml-1 animate-pulse"></span>
            )}
          </h1>

          <p className="text-black text-sm sm:text-base md:text-xl max-w-xl leading-relaxed">
            Real-time monitoring, intelligent alerts, and complete fleet control
            from a single powerful dashboard.
          </p>
        </div>
      </div>

      {/* NEW SECTION */}
      {showSection && (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 bg-white">
          <div className="md:w-1/2 space-y-6 animate-slideLeft">
            <h2 className="text-red-600 text-3xl md:text-4xl font-bold">
              Best Car Tracker Solutions
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Tracking World offers the best GPS car tracker options to ensure
              vehicle security and efficient vehicle tracking and fleet
              management system.
            </p>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center animate-slideRight overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[300px] pointer-events-none">
              <div className="absolute right-0 top-10 w-[80%] h-1 bg-red-600 rotate-[-20deg] opacity-80"></div>
              <div className="absolute right-0 bottom-10 w-[90%] h-1 bg-red-600 rotate-[-20deg] opacity-50"></div>
            </div>

            {/* FIXED PATH */}
            <img
              src="/tracking.webp"
              alt="tracking"
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* CENTER IMAGE */}
      <div className="w-full py-10 md:py-16 px-5 md:px-16 bg-white">
        <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden flex justify-center">
          <img
            src="/unique.png"
            alt="tracking"
            className="w-full h-[180px] sm:h-[320px] md:h-[420px] object-contain rounded-3xl"
          />
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="text-center px-6 md:px-40 py-20 md:-mt-20 space-y-6 bg-white">
        <h2 className="text-red-600 text-3xl md:text-4xl font-bold">
          Track Your Car, Bike, Asset, and <br />
          Loved Ones with Tracking World.
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Reliable vehicle GPS Tracking Solutions for Everyone
        </p>
      </div>

      <SolutionsSection />

      {/* OUR CUSTOMERS */}
      <section className="w-full pt-10 pb-10 mb-10 px-2 md:px-16 bg-red-600/10 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Our Valued Customers
          </h2>
        </div>

        <div className="flex justify-center items-center gap-6 md:gap-12 flex-nowrap">
          {[
            "/Cola-cola-png-logo-Tracking-World.png",
            "/Hyundai-Logo.webp",
            "/Total-Logo.png",
            "/Tracking-World-Logo-2.png",
            "/Tracking-World-Logo-018.png",
          ].map((logo, index) => (
            <div key={index}>
              <img
                src={logo}
                alt="customer"
                className="h-8 md:h-12 w-auto object-contain bg-transparent"
              />
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE SLIDER (LOOP FIXED) */}
      <section className="w-full py-20 px-5 md:px-16 bg-white overflow-hidden">
        {/* TRACK */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {[
              "/6.png",
              "/1.webp",
              "/2.webp",
              "/3.webp",
              "/4.webp",
              "/5.webp",

              "/1.webp",
              "/2.webp",
              "/3.webp",
              "/4.webp",
            ].map((image, index) => (
              <div
                key={index}
                className="
            flex-shrink-0 px-3
            w-1/3 md:w-1/4   /* 👈 mobile 3, desktop 4 */
          "
              >
                <img
                  src={image}
                  alt={`gallery-${index}`}
                  className="
              w-full
              h-[180px] md:h-[440px]
              object-cover
              rounded-xl
            "
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === i
                  ? "w-8 h-3 bg-red-600"
                  : "w-3 h-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>{`
        .animate-slideLeft {
          animation: slideLeft 1s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default Home;
