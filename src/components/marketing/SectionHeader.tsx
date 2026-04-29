type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        <span className="font-[var(--font-fraunces)] text-emerald-100">
          {title}
        </span>
      </h2>
      <p className="max-w-2xl text-base text-slate-200/80 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
