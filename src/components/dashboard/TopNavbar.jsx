import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiBell, FiChevronDown, FiLogOut, FiMenu, FiSearch, FiSettings, FiUser } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useDashboard } from "../../context/DashboardContext";

export default function TopNavbar({ onMenuClick, query, onQueryChange, title }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const { notifications, markNotificationRead } = useDashboard();
  const [activePanel, setActivePanel] = useState(null);
  const unreadCount = notifications.length;

  const panelNotifications = useMemo(() => notifications.slice(0, 3), [notifications]);

  const logout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/30 bg-[#f8efdf]/80 backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/65 text-[#2c251d] shadow-[0_10px_25px_rgba(72,42,8,0.08)] transition hover:-translate-y-0.5 lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu className="text-xl" />
          </button>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8b6c48]">YogaWomans</p>
            <p className="text-sm font-semibold text-[#2c251d]">{title || "Today feels lighter already"}</p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          <div className="hidden max-w-sm flex-1 items-center gap-3 rounded-full border border-white/50 bg-white/70 px-4 py-3 shadow-[0_10px_25px_rgba(72,42,8,0.05)] md:flex">
            <FiSearch className="text-[#8b6c48]" />
            <input
              type="text"
              value={query}
              onChange={(event) => onQueryChange?.(event.target.value)}
              placeholder="Search sessions, instructors, music..."
              className="w-full bg-transparent text-sm text-[#2c251d] outline-none placeholder:text-[#9b8470]"
            />
          </div>

          <button
            type="button"
            onClick={() => setActivePanel((current) => (current === "notifications" ? null : "notifications"))}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/65 text-[#2c251d] shadow-[0_10px_25px_rgba(72,42,8,0.08)]"
            aria-label="Notifications"
          >
            <FiBell className="text-xl" />
            {unreadCount > 0 && (
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#E8651A]" />
            )}
          </button>

          <Link
            to="/pricing"
            className="hidden rounded-full bg-gradient-to-r from-[#E8651A] via-[#f08a4d] to-[#2E7D32] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(232,101,26,0.22)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Upgrade Premium
          </Link>

          <button
            type="button"
            onClick={() => setActivePanel((current) => (current === "profile" ? null : "profile"))}
            className="flex items-center gap-3 rounded-full border border-white/50 bg-white/70 px-2 py-2 shadow-[0_10px_25px_rgba(72,42,8,0.08)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f4c8a7] to-[#2E7D32] text-sm font-bold text-white">
              {auth.user?.name?.slice(0, 2).toUpperCase() || "PK"}
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-xs font-semibold text-[#8b6c48]">Welcome</span>
              <span className="block text-sm font-bold text-[#2c251d]">{auth.user?.name || "Member"}</span>
            </span>
            <FiChevronDown className="hidden text-[#7d6a57] sm:block" />
          </button>
        </div>
      </div>

      {activePanel === "profile" && (
        <div className="absolute right-4 top-[72px] z-40 w-[320px] rounded-[24px] border border-white/60 bg-white/95 p-4 shadow-[0_20px_60px_rgba(72,42,8,0.12)] backdrop-blur-2xl">
          <div className="space-y-3">
            <Link to="/profile" className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-[#faf4ec]">
              <FiUser />
              <span className="font-medium">Profile</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-[#faf4ec]">
              <FiSettings />
              <span className="font-medium">Settings</span>
            </Link>
            <button type="button" onClick={logout} className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left hover:bg-[#faf4ec]">
              <FiLogOut />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      )}

      {activePanel === "notifications" && (
        <div className="absolute right-4 top-[72px] z-40 w-[320px] rounded-[24px] border border-white/60 bg-white/95 p-4 shadow-[0_20px_60px_rgba(72,42,8,0.12)] backdrop-blur-2xl">
          <div className="mt-4 rounded-[20px] bg-[#faf4ec] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b6c48]">Notifications</p>
            <div className="mt-3 space-y-3">
              {panelNotifications.length ? (
                panelNotifications.map((notification) => (
                  <button
                    key={notification.id}
                    type="button"
                    onClick={() => markNotificationRead(notification.id)}
                    className="flex w-full items-start justify-between rounded-2xl bg-white px-3 py-3 text-left"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#2c251d]">{notification.title}</p>
                      <p className="text-xs text-[#6c5847]">{notification.time}</p>
                    </div>
                    {notification.unread && <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#E8651A]" />}
                  </button>
                ))
              ) : (
                <p className="text-sm text-[#6c5847]">No unread notifications.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
