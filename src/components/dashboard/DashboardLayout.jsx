import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ children, userName = "Pankaj Kumar", title, query, onQueryChange }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(232,101,26,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(46,125,50,0.14),_transparent_28%),linear-gradient(180deg,#f7ead7_0%,#f8f1e8_50%,#eef6ea_100%)] text-[#1a1a1a]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-[250px]">
        <TopNavbar
          onMenuClick={() => setSidebarOpen(true)}
          userName={userName}
          title={title}
          query={query}
          onQueryChange={onQueryChange}
        />
        <main className="space-y-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-6">{children}</main>
      </div>
    </div>
  );
}
