import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { LuFlower2 } from "react-icons/lu";
import { dashboardMenu } from "../../data/wellnessData";

export default function Sidebar({ open, onClose }) {
  const navLinkClass = ({ isActive }) =>
    `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-white/85 text-[#2E7D32] shadow-[0_14px_30px_rgba(232,101,26,0.1)]"
        : "text-[#5c5247] hover:bg-white/55 hover:text-[#1a1a1a]"
    }`;

  const panel = (
    <aside className="flex h-full w-[250px] flex-col border-r border-white/40 bg-[#f7ead7]/80 px-4 py-5 backdrop-blur-2xl">
      <div className="mb-8 flex items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8651A] via-[#f2ab73] to-[#2E7D32] text-white shadow-[0_16px_30px_rgba(232,101,26,0.22)]">
            <LuFlower2 className="text-2xl" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8b6c48]">YogaWomans</p>
            <p className="text-sm font-semibold text-[#2c251d]">Wellness Studio</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/65 text-[#6c5847] lg:hidden"
        >
          <FiMenu className="rotate-90" />
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {dashboardMenu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={navLinkClass}
              end={item.path === "/dashboard"}
              onClick={onClose}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-[#7d6a57] transition group-hover:bg-white">
                <Icon className="text-[1.05rem]" />
              </span>
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-6 rounded-[1.5rem] bg-white/55 p-4 shadow-[0_10px_30px_rgba(72,42,8,0.08)]">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8b6c48]">Today</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-2xl font-heading font-extrabold text-[#2c251d]">72%</p>
            <p className="text-sm text-[#6c5847]">Daily completion</p>
          </div>
          <div className="h-16 w-16 rounded-full border-[5px] border-[#ead7be] border-t-[#E8651A] border-r-[#2E7D32]" />
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:block">{panel}</div>

      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: "-100%", opacity: 0.98 },
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="fixed inset-y-0 left-0 z-50 w-[250px] lg:hidden"
      >
        {panel}
      </motion.div>

      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}
