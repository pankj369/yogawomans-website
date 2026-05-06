import { motion } from "framer-motion";
import heroImage from "../assests/images/hero-image.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat"
  style={{backgroundImage: `url(${heroImage})`
}}
>
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="section-container relative z-10 py-28">
        <div className="max-w-2xl  p-6 sm:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block text-primaryBlue">Find Balance.</span>
            <span className="block text-primaryOrange">Inner Peace.</span>
            <span className="block text-primaryGreen">Better You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-base leading-relaxed text-grayText sm:text-lg"
          >
            Yoga and meditation for a healthier body, calmer mind, and happier life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#discover"
              className="rounded-full bg-primaryOrange px-7 py-3 font-heading font-bold text-white shadow-soft transition hover:-translate-y-1"
            >
              Explore Classes
            </a>
            <a
              href="#about"
              className="rounded-full border-2 border-primaryGreen px-7 py-3 font-heading font-semibold text-primaryGreen transition hover:bg-primaryGreen hover:text-white"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
