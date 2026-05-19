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
        {/* BACKGROUND IMAGE */}
        <img
          src="/WhatsApp Image 2026-05-19 at 4.58.25 PM.jpeg"
          alt="tracking"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 md:via-white/40 to-transparent"></div>

        {/* CONTENT */}
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
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 space-y-6 animate-slideLeft">
            <h2 className="text-red-600 text-3xl md:text-4xl font-bold">
              Best Car Tracker Solutions
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Tracking World offers the best GPS car tracker options to ensure
              vehicle security and efficient vehicle tracking and fleet
              management system. Our advanced vehicle monitoring system includes
              real-time live location tracking, speed monitoring, geofencing,
              GPS tool tracker, and vehicle diagnostics. Protect your vehicle
              with the live tracker to prevent theft or manage fleets
              effectively with affordable solutions. Choose Tracking World for
              the Best Car tracker systems that combine reliability, security,
              and cost-efficiency.
            </p>
          </div>

          {/* RIGHT IMAGE WITH RED LINES (FIXED BACKGROUND) */}
          <div className="md:w-1/2 relative flex justify-center items-center animate-slideRight overflow-hidden">
            {/* RED BACKGROUND LINES */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[300px] pointer-events-none">
              <div className="absolute right-0 top-10 w-[80%] h-1 bg-red-600 rotate-[-20deg] opacity-80"></div>
              <div className="absolute right-0 bottom-10 w-[90%] h-1 bg-red-600 rotate-[-20deg] opacity-50"></div>
            </div>

            {/* IMAGE */}
            <img
              src="/public/tracking.webp"
              alt="tracking"
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* CENTER IMAGE SECTION */}
      <div className="w-full py-10 md:py-16 px-5 md:px-16 bg-white">
        <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden flex justify-center">
          <img
            src="/unique.png"
            alt="tracking"
            className="w-full h-[180px] sm:h-[320px] md:h-[420px] object-contain rounded-3xl"
          />
        </div>
      </div>

      {/* NEW CENTER SECTION */}
      <div className="text-center px-6 md:px-40 py-20  md:-mt-20 space-y-6 bg-white">
        <h2 className="text-red-600 text-3xl md:text-4xl font-bold">
          Track Your Car, Bike, Asset, and <br />
          Loved Ones with Tracking World.
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Reliable vehicle GPS Tracking Solutions for Everyone Tracking World
          offers high-quality GPS trackers designed to meet all kinds of needs –
          whether you want to protect your car, bike, truck, busses, generators
          other valuable assets. Our vehicle GPS trackers are easy to install
          and they offer a variety of features to help you stay connected and
          safe with 24/7 real-time tracking.
        </p>
      </div>

      <SolutionsSection />

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
