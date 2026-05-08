import { motion } from "framer-motion";
import { FiBookOpen, FiFeather, FiHeadphones, FiHeart, FiMoon, FiWind } from "react-icons/fi";

const fallbackIcons = {
  yoga: FiFeather,
  sleep: FiMoon,
  music: FiHeadphones,
  wisdom: FiBookOpen,
  movement: FiFeather,
  breathwork: FiWind,
  healing: FiHeart,
  chakra: FiHeart,
  sound: FiHeadphones,
};

export default function RecommendedSection({ items = [], onOpenDetails }) {
  return (
    <motion.section
      id="music"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-[2rem] border border-white/60 bg-white/55 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.1)] backdrop-blur-2xl sm:p-6"
    >
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b6c48]">Recommended</p>
        <h2 className="mt-1 text-2xl font-heading font-extrabold text-[#1a1a1a]">
          Recommended for you
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon || fallbackIcons[item.category?.toLowerCase()] || FiFeather;
          if (!item.icon && typeof window !== "undefined") {
            console.debug("[YogaWomans] Recommended item missing icon, using fallback:", item.id, item.category);
          }
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onOpenDetails?.(item)}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-[1.6rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.85),rgba(247,232,213,0.85))] p-5 text-left shadow-[0_14px_30px_rgba(72,42,8,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff7ea] text-[#2E7D32]">
                <Icon className="text-xl" />
              </div>
              <p className="mt-4 text-lg font-heading font-bold text-[#1a1a1a]">{item.title}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6c48]">
                {item.category || "Wellness"}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6c5847]">
                {item.instructor ? `With ${item.instructor}` : "Curated around your goals and recent activity."}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#6c5847]">
                <span>{item.duration ? `${item.duration} min` : "Recommended"}</span>
                <span className="rounded-full bg-white/70 px-3 py-1.5">
                  {item.premium ? "Premium" : "Free"}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.section>
  );
}
