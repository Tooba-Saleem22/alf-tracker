import { useRef } from "react";

function FeatureShowcaseSection() {
  const containerRef = useRef(null);

  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // LEFT GROUP
    if (leftRef.current) {
      leftRef.current.style.transform = `translate(${x / 40}px, ${y / 40}px)`;
    }

    // CENTER IPHONE (OPPOSITE DIRECTION)
    if (centerRef.current) {
      centerRef.current.style.transform = `translate(${-x / 40}px, ${-y / 40}px)`;
    }

    // RIGHT GROUP
    if (rightRef.current) {
      rightRef.current.style.transform = `translate(${x / 40}px, ${y / 40}px)`;
    }
  };

  const reset = () => {
    [leftRef, centerRef, rightRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = "translate(0px, 0px)";
      }
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="w-full bg-white py-20 px-5 md:px-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* LEFT GROUP */}
        <div
          ref={leftRef}
          className="flex flex-col items-center gap-6 transition-transform duration-200"
        >
          <div className="bg-white p-4 text-center">
            <img src="/Vehicle Immobilization.png" className="h-24 mx-auto" />
            <h3 className="mt-2 font-semibold">Vehicle Immobilization</h3>
          </div>

          <div className="flex gap-6">
            <div className="bg-white p-4 text-center">
              <img src="/Theft Alerts.png" className="h-24 mx-auto" />
              <h3 className="mt-2 font-semibold">Theft Alerts</h3>
            </div>

            <div className="bg-white p-4 text-center">
              <img src="/24×7 Monitoring.png" className="h-24 mx-auto" />
              <h3 className="mt-2 font-semibold">24×7 Monitoring</h3>
            </div>
          </div>
        </div>

        {/* CENTER IPHONE */}
        <div
          ref={centerRef}
          className="flex justify-center items-center transition-transform duration-200"
        >
          <img src="/iphone.png" className="h-[420px] object-contain" />
        </div>

        {/* RIGHT GROUP */}
        <div
          ref={rightRef}
          className="flex flex-col items-center gap-6 transition-transform duration-200"
        >
          <div className="bg-white p-4 text-center">
            <img src="/Harsh Breaking Report.png" className="h-24 mx-auto" />
            <h3 className="mt-2 font-semibold">Harsh Breaking Report</h3>
          </div>

          <div className="flex gap-6">
            <div className="bg-white p-4 text-center">
              <img src="/Speed Alerts.png" className="h-24 mx-auto" />
              <h3 className="mt-2 font-semibold">Speed Alerts</h3>
            </div>

            <div className="bg-white p-4 text-center">
              <img src="/Vehicle Location.png" className="h-24 mx-auto" />
              <h3 className="mt-2 font-semibold">Vehicle Location</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcaseSection;
