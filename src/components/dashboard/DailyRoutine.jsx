import { motion } from "framer-motion";
import { dailyRoutine } from "../../data/wellnessData";

export default function DailyRoutine({ items = dailyRoutine, completedItems = [], onStartSession, onToggleComplete }) {
  return (
    <motion.section
      id="movement"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-[2rem] border border-white/60 bg-white/55 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.1)] backdrop-blur-2xl sm:p-6"
    >
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b6c48]">Daily routine</p>
        <h2 className="mt-1 text-2xl font-heading font-extrabold text-[#1a1a1a]">
          Today&apos;s daily routine
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          const completed = completedItems.includes(item.id);
          return (
            <motion.article
              key={item.id}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className={`rounded-[1.75rem] border border-white/60 bg-gradient-to-br ${item.gradient} p-5 shadow-[0_14px_35px_rgba(72,42,8,0.08)]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#E8651A] shadow-sm">
                  <Icon className="text-xl" />
                </div>
                <span className="rounded-full bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#6c5847]">
                  {item.duration} min
                </span>
              </div>
              <h3 className="mt-5 text-lg font-heading font-bold text-[#1a1a1a]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6c5847]">
                A gentle practice to keep your energy balanced.
              </p>
              <div className="mt-5 flex gap-2">
                <button
                  type="button"
                  onClick={() => onStartSession?.(item)}
                  className="rounded-full bg-[#2E7D32] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#256428]"
                >
                  Start
                </button>
                <button
                  type="button"
                  onClick={() => onToggleComplete?.(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    completed ? "bg-[#eff7ea] text-[#215c28]" : "bg-white/80 text-[#6c5847]"
                  }`}
                >
                  {completed ? "Completed" : "Mark done"}
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
