import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assests/images/hero1.png";
import hero2 from "../assests/images/hero2.png";

function Hero() {
  return (
    <>
      {/* DESKTOP HERO */}
      <section id="home" className="relative hidden min-h-screen overflow-hidden md:block">

        {/* Background Image */}
        <img
          src={hero1}
          alt="Yoga Hero Desktop"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between px-10 pt-36 lg:px-16">

          {/* TEXT */}
          <div className="max-w-[700px]">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading font-extrabold leading-[0.9] [paint-order:stroke_fill] [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)] drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)] text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]"
            >

              <span className="block text-primaryBlue">
                Find Balance.
              </span>

              <span className="block text-primaryOrange">
                Inner Peace.
              </span>

              <span className="block text-primaryGreen">
                Better You.
              </span>

            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]"
            >
              Yoga and meditation for a healthier body,
              calmer mind, and happier life.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex items-center gap-4"
            >

              <Link
                to="/auth"
                className="rounded-full bg-primaryOrange px-8 py-4 font-heading text-sm font-bold text-white shadow-soft transition duration-300 hover:-translate-y-1"
              >
                Explore Classes
              </Link>

              <a
                href="#about"
                className="rounded-full border-2 border-primaryGreen px-7 py-4 font-heading text-sm font-semibold text-primaryGreen transition duration-300 hover:bg-primaryGreen hover:text-white"
              >
                Learn More
              </a>

            </motion.div>

          </div>

          {/* Bottom Strip */}
          <div className="relative overflow-hidden border-t border-white/20 py-3">

            <div className="animate-marquee flex min-w-max items-center gap-10">

              <span className="font-heading text-xs uppercase tracking-[0.3em] text-primaryOrange">
                Surya Namaskar Classes
              </span>

              <span className="font-heading text-xs uppercase tracking-[0.3em] text-primaryGreen">
                Spiritual Wellness Journey
              </span>

              <span className="font-heading text-xs uppercase tracking-[0.3em] text-primaryOrange">
                Sacred Flow
              </span>

              <span className="font-heading text-xs uppercase tracking-[0.3em] text-primaryGreen">
                Breath • Balance • Harmony
              </span>

              <span className="font-heading text-xs uppercase tracking-[0.3em] text-primaryBlue">
                Mindfulness & Meditation
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* MOBILE HERO */}
      <section className="relative block min-h-screen overflow-hidden md:hidden">

        {/* Mobile Image */}
        <img
          src={hero2}
          alt="Yoga Hero Mobile"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pt-28">

          {/* Text */}
          <div className="text-center">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading font-extrabold leading-[0.9] [paint-order:stroke_fill] [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)] text-[3.2rem]"
            >

              <span className="block text-primaryBlue">
                Find Balance.
              </span>

              <span className="block text-primaryOrange">
                Inner Peace.
              </span>

              <span className="block text-primaryGreen">
                Better You.
              </span>

            </motion.h1>

          </div>

          {/* MOBILE BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-40 flex items-center justify-center gap-3"
          >

            <Link
              to="/auth"
              className="rounded-full bg-primaryOrange px-6 py-3 font-heading text-sm font-bold text-white shadow-soft"
            >
              Explore Classes
            </Link>

            <a
              href="#about"
              className="rounded-full border-2 border-primaryGreen px-5 py-3 font-heading text-sm font-semibold text-primaryGreen backdrop-blur-sm"
            >
              Learn More
            </a>

          </motion.div>

          {/* Bottom Strip */}
          <div className="relative overflow-hidden border-t border-white/20 py-3">

            <div className="animate-marquee flex min-w-max items-center gap-8">

              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryOrange">
                Surya Namaskar
              </span>

              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryGreen">
                Wellness Journey
              </span>

              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryBlue">
                Mindfulness
              </span>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Hero;