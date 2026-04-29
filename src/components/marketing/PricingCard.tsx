import Link from "next/link";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
};

export default function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  href,
  highlighted,
}: PricingCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-3xl border px-6 py-8 shadow-[0_30px_70px_-50px_rgba(56,225,178,0.8)] ${
        highlighted
          ? "border-emerald-300/70 bg-emerald-300/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
          {name}
        </p>
        <p className="text-4xl font-semibold text-white">{price}</p>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`mt-8 w-full rounded-full px-4 py-3 text-center text-sm font-semibold transition ${
          highlighted
            ? "bg-emerald-300 text-slate-900 hover:bg-emerald-200"
            : "border border-white/20 text-white hover:border-emerald-300/60"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
