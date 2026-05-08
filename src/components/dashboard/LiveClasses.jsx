import { motion } from "framer-motion";
import { FiClock, FiUsers, FiVideo } from "react-icons/fi";
import { liveClasses } from "../../data/wellnessData";

export default function LiveClasses({ items = liveClasses, joined = [], onJoin }) {
  return (
    <motion.section
      id="breathwork"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-[2rem] border border-white/60 bg-white/55 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.1)] backdrop-blur-2xl sm:p-6"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b6c48]">Live classes</p>
          <h2 className="mt-1 text-2xl font-heading font-extrabold text-[#1a1a1a]">
            Upcoming live classes
          </h2>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <motion.article
            key={item.id}
            whileHover={{ y: -5, scale: 1.01 }}
            className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-[#fdf8f1] shadow-[0_14px_30px_rgba(72,42,8,0.08)]"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={item.image} alt={item.instructor} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(26,26,26,0.42)_100%)]" />
              <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#2c251d] backdrop-blur">
                <FiVideo className="mr-1 inline text-[#E8651A]" /> Live class
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-lg font-heading font-bold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-white/85">with {item.instructor}</p>
              </div>
            </div>

            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between text-sm text-[#6c5847]">
                <span className="inline-flex items-center gap-2">
                  <FiClock /> {item.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiUsers /> {item.seatsLeft} seats left
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#eff7ea] px-3 py-1.5 text-xs font-semibold text-[#2E7D32]">
                  {item.category}
                </span>
                <button
                  type="button"
                  onClick={() => onJoin?.(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 ${
                    joined.includes(item.id)
                      ? "bg-[#2E7D32]"
                      : "bg-gradient-to-r from-[#E8651A] to-[#2E7D32]"
                  }`}
                >
                  {joined.includes(item.id) ? "Joined" : "Join class"}
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
