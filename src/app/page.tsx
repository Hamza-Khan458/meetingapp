import Link from "next/link";
import FeatureCard from "@/components/marketing/FeatureCard";
import PricingCard from "@/components/marketing/PricingCard";
import SectionHeader from "@/components/marketing/SectionHeader";
import { featureHighlights, heroMetrics, pricingTiers } from "@/data/landing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="px-6 py-8 sm:px-10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="text-sm font-semibold tracking-wide text-white">
              Meeting Cost Calculator
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-slate-300">
            <a href="#product" className="text-slate-300">
              Product
            </a>
            <a href="#analytics" className="text-slate-300">
              Analytics
            </a>
            <a href="#pricing" className="text-slate-300">
              Pricing
            </a>
            <Link href="/blog" className="text-slate-300">
              Insights
            </Link>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-slate-900"
          >
            Book demo
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 pb-24 sm:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80">
              Time ROI platform
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              <span className="font-[var(--font-fraunces)] text-emerald-100">
                Turn meetings into measurable savings.
              </span>
            </h1>
            <p className="text-base text-slate-200/80 sm:text-lg">
              Calculate meeting spend, track ROI, and forecast cost reduction in
              one dashboard built for HR, Ops, and Finance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/calculator"
                className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Start free
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                View dashboard
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_-70px_rgba(56,225,178,0.8)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Weekly meeting cost</p>
              <span className="text-xs text-emerald-200">Live snapshot</span>
            </div>
            <div className="mt-6 grid gap-4">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-300/40 bg-emerald-300/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
                Opportunity savings
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Cut 15% meeting load to save $38,400/year
              </p>
            </div>
          </div>
        </section>

        <section id="product" className="scroll-mt-28 space-y-10">
          <SectionHeader
            eyebrow="Why it matters"
            title="Every meeting leaves a money trail."
            subtitle="We connect calendar data, payroll assumptions, and team benchmarks to show the real impact of time spent in meetings." 
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureHighlights.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section id="analytics" className="scroll-mt-28 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Analytics"
              title="Executive-ready insights in minutes."
              subtitle="Benchmark teams, track cohort shifts, and forecast meeting cost based on the last 90 days of behavior." 
            />
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">
                  Cohort analysis
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Compare departments by size, role mix, and meeting density.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">
                  Forecasting
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Predict next-quarter cost with adjustable reduction scenarios.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Team benchmark board</p>
              <span className="text-xs text-slate-400">Last 30 days</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { team: "People Ops", value: "$12.4k", delta: "+6%" },
                { team: "Engineering", value: "$22.1k", delta: "-3%" },
                { team: "Revenue", value: "$15.2k", delta: "+9%" },
              ].map((row) => (
                <div
                  key={row.team}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  <span className="text-sm text-white">{row.team}</span>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">
                      {row.value}
                    </p>
                    <p className="text-xs text-emerald-200">{row.delta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-28 space-y-10">
          <SectionHeader
            eyebrow="Pricing"
            title="Start free, scale to enterprise impact."
            subtitle="Transparent tiers that grow with your org, from quick calculations to full calendar intelligence." 
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={tier.name}
                {...tier}
                highlighted={index === 1}
              />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-emerald-300/10 px-8 py-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                Ready to cut meeting waste?
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Build your meeting ROI story in one afternoon.
              </h2>
              <p className="text-sm text-slate-200/80">
                Invite team leads, sync calendars, and share a PDF report before
                your next exec review.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <Link
                href="/calculator"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Launch the calculator
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                Explore the dashboard
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
