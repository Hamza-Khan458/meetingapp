type TrendChartProps = {
  title: string;
  points: number[];
};

export default function TrendChart({ title, points }: TrendChartProps) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const normalized = points.map((point, index) => {
    const x = (index / (points.length - 1)) * 100;
    const y = 100 - ((point - min) / range) * 80 - 10;
    return `${x},${y}`;
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">{title}</p>
        <span className="text-xs text-slate-400">Last 12 weeks</span>
      </div>
      <svg
        viewBox="0 0 100 100"
        className="mt-6 h-40 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38e1b2" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38e1b2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="#38e1b2"
          strokeWidth="2"
          points={normalized.join(" ")}
        />
        <polygon
          fill="url(#trend)"
          points={`${normalized.join(" ")} 100,100 0,100`}
        />
      </svg>
      <div className="mt-4 flex justify-between text-xs text-slate-400">
        <span>Jan</span>
        <span>Apr</span>
        <span>Jul</span>
        <span>Oct</span>
      </div>
    </div>
  );
}
