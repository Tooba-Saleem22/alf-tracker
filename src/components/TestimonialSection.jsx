import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      message:
        "Tracking World has completely transformed our fleet operations. Real-time tracking and accurate reporting have made our work much more efficient and reliable.",
      name: "Ali Raza",
      role: "Fleet Manager",
    },
    {
      message:
        "Excellent service quality. The tracking system is very accurate and helps us manage operations smoothly.",
      name: "Sara Khan",
      role: "Operations Head",
    },
    {
      message:
        "Very professional platform. It has significantly improved our business efficiency and reduced delays.",
      name: "Ahmed Malik",
      role: "Business Owner",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16 px-4 md:px-12 bg-white flex justify-center">
      {/* OUTER FLOATING SECTION */}
      <div className="w-full max-w-5xl bg-red-100/60 rounded-3xl px-6 md:px-14 py-14 shadow-sm">
        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            Enabling journeys, one tracking experience at a time.
          </h2>

          <p className="text-red-700 font-medium mt-3 text-sm md:text-base">
            Turning Happy Customers into Raving Fans
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="bg-white/70 backdrop-blur-md border border-red-200 rounded-3xl p-8 md:p-14 text-center shadow-sm">
          {/* ANIMATED CONTENT */}
          <div key={active} className="animate-fadeSlide">
            <p className="text-gray-700 text-sm md:text-base leading-7 mb-6">
              {testimonials[active].message}
            </p>

            <h4 className="font-semibold text-black">
              {testimonials[active].name}
            </h4>

            <p className="text-red-600 text-xs">{testimonials[active].role}</p>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  active === i ? "bg-red-600 scale-125" : "bg-red-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style jsx>{`
        .animate-fadeSlide {
          animation: fadeSlide 0.5s ease;
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
