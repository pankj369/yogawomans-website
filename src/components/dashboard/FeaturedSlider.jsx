import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiLock, FiPlay } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { featuredSessions } from "../../data/wellnessData";

export default function FeaturedSlider({
  items = featuredSessions,
  onOpenDetails,
  onToggleWishlist,
  onPreview,
  isWishlisted = () => false,
}) {
  const [swiper, setSwiper] = useState(null);

  return (
    <motion.section
      id="meditate"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-[2rem] border border-white/60 bg-white/55 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.1)] backdrop-blur-2xl sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b6c48]">Featured</p>
          <h2 className="mt-1 text-2xl font-heading font-extrabold text-[#1a1a1a]">
            Popular on YogaWomans
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d6c5af] bg-white/70 text-[#2c251d] transition hover:bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d6c5af] bg-white/70 text-[#2c251d] transition hover:bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiper}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.6 },
          1024: { slidesPerView: 2.2 },
          1280: { slidesPerView: 2.8 },
        }}
      >
        {items.map((session) => (
          <SwiperSlide key={session.id}>
            <motion.article
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-[#fdf8f1] shadow-[0_14px_35px_rgba(72,42,8,0.08)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="h-full w-full cursor-pointer object-cover transition duration-500 group-hover:scale-110"
                  onClick={() => onOpenDetails?.(session)}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(26,26,26,0.48)_100%)]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#2c251d] backdrop-blur">
                  <FiLock className="text-[#E8651A]" /> {session.premium ? "Premium" : "Included"}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#2c251d] backdrop-blur">
                  {session.duration} min
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-heading font-bold text-white">{session.title}</p>
                  <p className="mt-1 text-sm text-white/85">{session.instructor}</p>
                </div>
              </div>

              <div className="space-y-4 px-4 py-4">
                <p className="text-sm leading-6 text-[#6c5847]">{session.description}</p>
                <div className="flex flex-wrap gap-2">
                  {session.tags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#eff7ea] px-3 py-1.5 text-xs font-semibold text-[#2E7D32]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => onPreview?.(session)}
                    className="flex-1 rounded-full border border-white/20 bg-white/80 px-4 py-3 text-sm font-semibold text-[#2c251d]"
                  >
                    <FiPlay className="mr-2 inline" /> Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleWishlist?.(session)}
                    className="rounded-full border border-[#d6c5af] bg-white px-4 py-3 text-sm font-semibold text-[#6c5847]"
                  >
                    {isWishlisted(session.id) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
