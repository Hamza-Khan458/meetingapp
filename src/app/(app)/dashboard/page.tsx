import StatTile from "@/components/dashboard/StatTile";
import TrendChart from "@/components/dashboard/TrendChart";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-50 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
              Workspace overview
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white">
              Meeting spend intelligence
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
              Export PDF
            </button>
            <button className="rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-slate-900">
              Share summary
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <StatTile label="Monthly spend" value="$48,920" delta="+4.2%" />
          <StatTile label="Hours in meetings" value="1,420" delta="-2.1%" />
          <StatTile label="Cost per employee" value="$186" delta="+1.4%" />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <TrendChart
            title="Meeting cost trend"
            points={[30, 32, 35, 28, 31, 36, 40, 38, 42, 45, 44, 48]}
          />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Top cost drivers</p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              {[
                { label: "Recurring staff syncs", value: "$12.8k" },
                { label: "Cross-team reviews", value: "$9.1k" },
                { label: "Client updates", value: "$7.4k" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span>{row.label}</span>
                  <span className="font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Forecast impact</p>
            <p className="mt-2 text-sm text-slate-300">
              Reducing weekly meeting load by 12% saves an estimated $52,300 over
              the next quarter.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { label: "Projected savings", value: "$52.3k" },
                { label: "Hours reclaimed", value: "186" },
                { label: "ROI uplift", value: "+22%" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {row.label}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Team benchmark</p>
            <p className="mt-2 text-sm text-slate-300">
              Engineering and People Ops are above the org median in meeting
              density.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Engineering", value: "142%" },
                { label: "People Ops", value: "133%" },
                { label: "Revenue", value: "98%" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/5">
                    <div
                      className="h-2 rounded-full bg-emerald-300"
                      style={{ width: row.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
