import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/footerbg.png"
          alt="footer background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-10">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <img
            src="/footerlogo.png"
            alt="logo"
            className="h-10 md:h-12 object-contain"
          />

          <div className="flex gap-3 text-xs text-gray-300">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>

        {/* 3 COLUMNS */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* COL 1 */}
          <div>
            <h2 className="text-base font-bold">
              <span className="text-red-600">Tracking World</span> Pvt. Limited
            </h2>

            <p className="mt-2 text-gray-200 text-xs">
              Tracking World provides fleet tracking and management solutions.
            </p>
          </div>

          {/* COL 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-red-500">
              For Businesses
            </h3>

            <ul className="text-xs text-gray-200 space-y-1">
              <li>Fleet Management Solution</li>
              <li>Fuel Management Solution</li>
              <li>Smart Energy Management</li>
              <li>Vehicle Surveillance</li>
              <li>Asset Tracking</li>
            </ul>
          </div>

          {/* COL 3 (CLICKABLE LINKS) */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-red-500">
              About Company
            </h3>

            <ul className="text-xs text-gray-200 space-y-1">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 text-center text-gray-400 text-xs">
          © 2026 ALF Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
