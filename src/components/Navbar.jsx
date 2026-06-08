import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  // hide/show navbar on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY + 50) {
            setShowHeader(false);
          } else if (currentScrollY < lastScrollY - 20) {
            setShowHeader(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const fastNavigate = useCallback(
    (path) => {
      setMobileMenu(false);
      requestAnimationFrame(() => navigate(path));
    },
    [navigate],
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between
        px-6 md:px-10 py-2 bg-white/95 border transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* LOGO */}
        <span onClick={() => fastNavigate("/")} className="cursor-pointer">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </span>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 items-center font-medium">
          {pages.map((page, i) => (
            <li key={i}>
              <span
                onClick={() => fastNavigate(page.path)}
                className={`relative inline-block cursor-pointer overflow-hidden group ${
                  location.pathname === page.path
                    ? "text-red-600"
                    : "text-black"
                }`}
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {page.name}
                </span>
                <span className="absolute left-0 top-full text-red-600 transition-transform duration-300 group-hover:-translate-y-full">
                  {page.name}
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col gap-6 p-6 z-40 md:hidden">
          <button
            className="text-black text-3xl self-end"
            onClick={() => setMobileMenu(false)}
          >
            <FiX />
          </button>

          {pages.map((page, i) => (
            <span
              key={i}
              onClick={() => fastNavigate(page.path)}
              className={`text-lg cursor-pointer ${
                location.pathname === page.path ? "text-red-600" : "text-black"
              }`}
            >
              {page.name}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
