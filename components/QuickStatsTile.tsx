import { Target, Clock, Zap } from "lucide-react";

export default function QuickStatsTile() {
  return (
    <div className="bento-tile p-5 flex flex-col justify-between h-full">
      <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Quick Stats</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
            <Target size={16} />
            <span className="text-sm">Points</span>
          </div>
          <span className="font-mono text-indigo-400">2,450</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
            <Clock size={16} />
            <span className="text-sm">Hours</span>
          </div>
          <span className="font-mono text-emerald-400">14.5</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
            <Zap size={16} />
            <span className="text-sm">Rank</span>
          </div>
          <span className="font-mono text-amber-400">#42</span>
        </div>
      </div>
    </div>
  );
}
