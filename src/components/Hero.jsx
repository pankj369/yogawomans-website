import { motion } from "framer-motion";

import herobg from "../assests/images/herobg.png";
import hero from "../assests/images/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${herobg})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f5dcc0]/55" />

      {/* Main Container */}
      <div className="section-container relative z-10 flex min-h-screen flex-col px-4 pt-24">

        {/* Hero Content */}
        <div className="grid flex-1 items-center gap-4 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center text-center lg:text-left">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
              font-heading
              font-extrabold
              leading-[0.9]

              text-[2.5rem]
              sm:text-[3.2rem]
              md:text-[4rem]
              lg:text-[5rem]
              xl:text-[5.8rem]
              "
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
              className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-grayText

              sm:text-base
              md:text-lg
              lg:mx-0
              "
            >
              Yoga and meditation for a healthier body,
              calmer mind, and happier life.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-3

              lg:justify-start
              "
            >

              <a
                href="#discover"
                className="
                rounded-full
                bg-primaryOrange
                px-6
                py-3
                font-heading
                text-sm
                font-bold
                text-white
                shadow-soft
                transition
                duration-300
                hover:-translate-y-1
                "
              >
                Explore Classes
              </a>

              <a
                href="#about"
                className="
                rounded-full
                border-2
                border-primaryGreen
                px-6
                py-3
                font-heading
                text-sm
                font-semibold
                text-primaryGreen
                transition
                duration-300
                hover:bg-primaryGreen
                hover:text-white
                "
              >
                Learn More
              </a>

            </motion.div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
            flex
            items-center
            justify-center

            lg:justify-end
            "
          >

            <div className="relative">

              {/* Glow */}
              <div className="
              absolute
              bottom-8
              right-8
              h-32
              w-32
              rounded-full
              bg-primaryOrange/20
              blur-3xl

              sm:h-40
              sm:w-40
              md:h-48
              md:w-48
              " />

              {/* Image */}
              <img
                src={hero}
                alt="Yoga Woman"
                className="
                relative
                z-10
                object-contain

                w-[240px]
                sm:w-[280px]
                md:w-[380px]
                lg:w-[540px]
                xl:w-[680px]
                "
              />

            </div>

          </motion.div>

        </div>

        {/* Bottom Sliding Strip */}
        <div className="
        relative
        overflow-hidden
        border-t
        border-white/20
        py-3
        ">

          <div className="
          animate-marquee
          flex
          min-w-max
          items-center
          gap-10
          ">

            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryOrange sm:text-xs">
              Surya Namaskar Classes
            </span>

            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryGreen sm:text-xs">
              Spiritual Wellness Journey
            </span>

            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryOrange sm:text-xs">
              Sacred Flow
            </span>

            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryGreen sm:text-xs">
              Breath • Balance • Harmony
            </span>

            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryBlue sm:text-xs">
              Mindfulness & Meditation
            </span>

            {/* Duplicate */}
            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryOrange sm:text-xs">
              Surya Namaskar Classes
            </span>

            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-primaryGreen sm:text-xs">
              Spiritual Wellness Journey
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;