type StatTileProps = {
  label: string;
  value: string;
  delta: string;
};

export default function StatTile({ label, value, delta }: StatTileProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <div className="mt-3 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-white">{value}</p>
        <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-xs text-emerald-200">
          {delta}
        </span>
      </div>
    </div>
  );
}
