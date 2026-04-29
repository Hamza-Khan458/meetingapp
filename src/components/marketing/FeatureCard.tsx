type FeatureCardProps = {
  title: string;
  description: string;
  tag: string;
};

export default function FeatureCard({
  title,
  description,
  tag,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(56,225,178,0.6)]">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-100">
          {tag}
        </span>
        <span className="text-xs text-slate-400">v1</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
