import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assests/images/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Discover Yoga", href: "#discover" },
  { label: "Live Schedules", href: "#events" },
  { label: "Shop", href: "#footer" }
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/30 bg-white/35 shadow-glow backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="section-container flex h-20 items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="YogaWomans Logo"
            className="h-16 w-auto object-contain"
          />

          <span className="hidden text-xs font-heading font-medium uppercase tracking-[0.14em] text-white md:block">
            Why should all superheroes be men?
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:text-primaryOrange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="rounded-full border border-white/70 px-5 py-2 text-sm font-heading font-medium text-white transition hover:bg-white/15"
          >
            Login
          </a>

          <a
            href="/subscription"
            className="rounded-full bg-primaryOrange px-5 py-2 text-sm font-heading font-bold text-white shadow-soft transition hover:-translate-y-0.5"
          >
            Upgrade
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-full border border-white/60 p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="section-container pb-4 md:hidden">
          <div className="glass-card p-4">
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block font-heading text-sm font-medium uppercase tracking-[0.14em] text-darkText"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-3">
              <a
                href="/login"
                className="rounded-full border border-primaryBlue px-4 py-2 text-sm font-heading text-primaryBlue"
              >
                Login
              </a>

              <a
                href="/subscription"
                className="rounded-full bg-primaryOrange px-4 py-2 text-sm font-heading text-white"
              >
                Upgrade
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;