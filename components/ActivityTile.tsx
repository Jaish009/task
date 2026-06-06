export default function ActivityTile() {
  return (
    <div className="bento-tile p-5 flex flex-col h-full">
      <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Activity Heatmap</h3>
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }).map((_, i) => (
            <div 
              key={i} 
              className="w-4 h-4 rounded-sm"
              style={{ 
                background: Math.random() > 0.5 ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.05)" 
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
