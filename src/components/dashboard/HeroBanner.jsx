import { motion } from "framer-motion";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import heroBackground from "../../assests/images/herobg.png";

export default function HeroBanner({ userName, lastSession, onResumeSession, onExplorePrograms, sectionTitle }) {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 shadow-[0_20px_80px_rgba(72,42,8,0.12)] backdrop-blur-2xl"
    >
      <div className="relative isolate min-h-[320px] overflow-hidden p-5 sm:p-8 lg:p-10">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt=""
            className="h-full w-full object-cover blur-[1px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(245,220,192,0.88)_0%,rgba(247,232,213,0.82)_34%,rgba(255,255,255,0.38)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,101,26,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(46,125,50,0.14),transparent_26%)]" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#8b6c48]">
              {sectionTitle || "Morning sanctuary"}
            </p>
            <h1 className="mt-4 text-3xl font-heading font-extrabold leading-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
              Welcome back, {userName}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5f5347] sm:text-base">
              Continue your wellness journey today. {lastSession ? `Resume ${lastSession.title} or discover something new.` : "Your practice is ready whenever you are."}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onResumeSession}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8651A] via-[#ef8b47] to-[#2E7D32] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(232,101,26,0.24)] transition hover:-translate-y-0.5"
              >
                <FiPlay /> Resume Session
              </button>
              <button
                type="button"
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2E7D32]/40 bg-white/55 px-6 py-3.5 text-sm font-semibold text-[#215c28] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Programs <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Daily calm", lastSession?.title || "Meditation", `${lastSession?.duration || 12} min`],
              ["Breath reset", "Pranayama", "8 min"],
            ].map(([label, sub, duration]) => (
              <div key={label} className="rounded-[1.75rem] border border-white/50 bg-white/60 p-4 shadow-[0_16px_30px_rgba(72,42,8,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b6c48]">{label}</p>
                    <p className="mt-1 text-lg font-bold text-[#1a1a1a]">{sub}</p>
                  </div>
                  <div className="rounded-2xl bg-[#eff7ea] px-3 py-2 text-sm font-bold text-[#2E7D32]">
                    {duration}
                  </div>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#ead7be]">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#E8651A] via-[#f2ab73] to-[#2E7D32]" style={{ width: "68%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
