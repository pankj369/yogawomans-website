import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";

const links = ["Privacy Policy", "Terms", "Contact"];

export default function Footer() {
  return (
    <footer
      id="profile"
      className="rounded-[2rem] border border-white/60 bg-white/55 px-5 py-5 shadow-[0_20px_80px_rgba(72,42,8,0.08)] backdrop-blur-2xl sm:px-6"
    >
      <div id="kids" className="sr-only" />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#6c5847]">
          © 2026 YogaWomans. Warm, mindful wellness for daily life.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm font-semibold text-[#4f4337] transition hover:text-[#2E7D32]">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {[FiInstagram, FiFacebook, FiTwitter, FiMail].map((Icon, index) => (
            <a
              href="#"
              key={index}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-[#6c5847] transition hover:-translate-y-0.5 hover:text-[#E8651A]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
