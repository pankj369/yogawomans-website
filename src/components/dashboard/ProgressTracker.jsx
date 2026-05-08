import { motion } from "framer-motion";
import { FiActivity, FiHeart, FiMoon, FiSun } from "react-icons/fi";
import { dashboardInsights } from "../../data/wellnessData";

const iconMap = {
  streak: FiSun,
  meditation: FiMoon,
  sessions: FiActivity,
  score: FiHeart,
};

function Ring({ value, total, color }) {
  const percent = Math.min(100, Math.round((value / total) * 100));
  const radius = 42;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
      <circle cx="50" cy="50" r={radius} stroke="#ead7be" strokeWidth={stroke} fill="none" />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: dashOffset }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function ProgressTracker({ items = dashboardInsights }) {
  return (
    <motion.section
      id="wisdom"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-[2rem] border border-white/60 bg-white/55 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.1)] backdrop-blur-2xl sm:p-6"
    >
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b6c48]">Progress</p>
        <h2 className="mt-1 text-2xl font-heading font-extrabold text-[#1a1a1a]">
          Progress tracker
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((stat) => {
          const Icon = iconMap[stat.id] || FiActivity;
          return (
            <div
              key={stat.id}
              className="rounded-[1.75rem] border border-white/60 bg-[#fdf8f1] p-5 shadow-[0_14px_30px_rgba(72,42,8,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#6c5847]">{stat.label}</p>
                  <p className="mt-2 text-3xl font-heading font-extrabold text-[#1a1a1a]">
                    {stat.value}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/85 p-3 text-[#8b6c48] shadow-sm">
                  <Icon className="text-2xl" />
                </div>
              </div>

              <div className="relative mt-5 flex items-center justify-center">
                <Ring value={stat.value} total={stat.total} color={stat.color} />
                <div className="absolute text-center">
                  <p className="text-xl font-bold text-[#1a1a1a]">
                    {Math.round((stat.value / stat.total) * 100)}%
                  </p>
                  <p className="text-xs text-[#6c5847]">complete</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
