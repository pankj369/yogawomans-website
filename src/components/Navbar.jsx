import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import navlogo from "../assests/images/navlogo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Discover Yoga", href: "#discover" },
  { label: "Live Schedules", href: "#events" },
  { label: "Shop", href: "#footer" }
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      setHeroHeight(heroSection.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const isPastHero = window.scrollY > heroHeight;
      setIsScrolled(isPastHero);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [heroHeight]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/20 bg-transparent backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <nav
        className="section-container flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={navlogo}
              alt="YogaWomans Logo"
              className="
              relative
              top-1
            
              block
              h-14
              w-auto
              object-contain
              align-middle

              sm:h-16
              md:h-[72px]
              "
            />
          </a>

          {/* Tagline */}
          <span
            className={`
            hidden
            xl:block

            text-xs
            font-heading
            font-medium
            uppercase
            tracking-[0.14em]
            transition-colors
            ${isScrolled ? "text-white" : "text-gray-700"}
            `}
          >
            Why should all superheroes be men?
          </span>

        </div>

        {/* DESKTOP MENU */}
        <ul
          className="
          hidden
          items-center

          gap-4
          lg:flex
          xl:gap-6
          "
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`
                font-heading
                text-[11px]
                font-medium
                uppercase
                tracking-[0.2em]
                transition-colors
                ${isScrolled ? "text-white hover:text-primaryOrange" : "text-gray-800 hover:text-primaryOrange"}
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS */}
        <div
          className="
          hidden
          items-center
          gap-3

          lg:flex
          "
        >

          <Link
            to="/login"
            className={`
            rounded-full
            border
            px-5
            py-2
            text-sm
            font-heading
            font-medium
            transition-all
            ${isScrolled 
              ? "border-white/70 text-white hover:bg-white/15" 
              : "border-gray-800 text-gray-800 hover:bg-gray-100"
            }
            `}
          >
            Login
          </Link>

          <Link
            to="/auth"
            className="
            rounded-full
            bg-primaryOrange
            px-5
            py-2
            text-sm
            font-heading
            font-bold
            text-white
            shadow-soft
            transition
            hover:-translate-y-0.5
            "
          >
            Upgrade
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          transition-colors
          ${isScrolled
            ? "border-white/60 text-white"
            : "border-gray-800 text-gray-800"
          }

          lg:hidden
          `}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* MOBILE MENU */}
{/* MOBILE MENU */}
{isMenuOpen && (

  <div
    className="
    fixed
    inset-0
    z-[999]
    bg-black/40
    backdrop-blur-[2px]
    lg:hidden
    "
    onClick={() => setIsMenuOpen(false)}
  >

    {/* SIDEBAR */}
    <div

      onClick={(e) => e.stopPropagation()}

      className="
      absolute
      right-0
      top-0

      h-screen
      w-[80%]
      max-w-[340px]

      bg-[#f6f1ec]
      shadow-2xl

      px-6
      py-8

      animate-slideLeft
      "
    >

      {/* TOP */}
      <div className="mb-10 flex items-center justify-between">

        <img
          src={navlogo}
          alt="YogaWomans Logo"
          className="h-14 w-auto object-contain"
        />

        <button
          onClick={() => setIsMenuOpen(false)}
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-black/20
          text-black
          "
        >
          <FaTimes />
        </button>

      </div>

      {/* LINKS */}
      <ul className="space-y-7">

        {links.map((link) => (
          <li key={link.label}>

            <a
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="
              block
              font-heading
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-darkText
              transition
              hover:text-primaryOrange
              "
            >
              {link.label}
            </a>

          </li>
        ))}

      </ul>

      {/* BUTTONS */}
      <div className="mt-10 flex gap-3">

        <Link
          to="/login"
          className="
          rounded-full
          border
          border-primaryBlue
          px-5
          py-2
          text-sm
          font-heading
          text-primaryBlue
          "
        >
          Login
        </Link>

        <Link
          to="/auth"
          className="
          rounded-full
          bg-primaryOrange
          px-5
          py-2
          text-sm
          font-heading
          text-white
          "
        >
          Upgrade
        </Link>

      </div>

    </div>

  </div>

)}
    </header>
  );
}

export default Navbar;