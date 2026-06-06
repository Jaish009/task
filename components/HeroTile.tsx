export default function HeroTile() {
  return (
    <div className="bento-tile p-6 flex flex-col justify-between h-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Welcome back, Alex!</h2>
        <p style={{ color: "var(--text-secondary)" }}>You have 2 lessons scheduled for today.</p>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            🔥
          </div>
          <div>
            <p className="text-sm font-bold text-white">12 Day</p>
            <p className="text-xs text-orange-400">Streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
