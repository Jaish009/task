import { LayoutDashboard, BookOpen, BarChart3, Trophy } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 w-full border-t border-white/10 glass z-50 p-3 flex justify-around" style={{ background: "var(--bg-deep)" }}>
      <LayoutDashboard size={24} className="text-indigo-500" />
      <BookOpen size={24} style={{ color: "var(--text-secondary)" }} />
      <BarChart3 size={24} style={{ color: "var(--text-secondary)" }} />
      <Trophy size={24} style={{ color: "var(--text-secondary)" }} />
    </div>
  );
}
