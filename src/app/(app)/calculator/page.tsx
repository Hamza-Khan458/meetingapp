export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-50 sm:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
            Meeting cost calculator
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Model meeting cost scenarios fast.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Enter roles, hourly rates, and meeting cadence to calculate monthly
            spend and savings opportunities.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.65fr_0.35fr]">
          <form className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Meeting type</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500"
                  placeholder="Weekly leadership sync"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Duration (minutes)</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  defaultValue={60}
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Attendee count</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  defaultValue={12}
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Frequency</span>
                <select className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white">
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Average hourly rate</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  defaultValue={78}
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Number of teams</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  defaultValue={3}
                />
              </label>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-900">
                Calculate cost
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
                Save scenario
              </button>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-emerald-300/40 bg-emerald-300/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                Estimated monthly cost
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">$9,360</p>
              <p className="mt-2 text-sm text-slate-200/80">
                Based on weekly cadence and hourly rate.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">Savings scenario</p>
              <p className="mt-2 text-sm text-slate-300">
                Reduce duration by 15 minutes to save $2,340/month.
              </p>
              <button className="mt-6 w-full rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white">
                Generate PDF report
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
