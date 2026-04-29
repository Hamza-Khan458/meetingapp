"use client";

import { useMemo, useState } from "react";

type FrequencyOption = "Weekly" | "Bi-weekly" | "Monthly";

const frequencyMap: Record<FrequencyOption, number> = {
  Weekly: 4,
  "Bi-weekly": 2,
  Monthly: 1,
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function CalculatorPage() {
  const [meetingType, setMeetingType] = useState("Weekly leadership sync");
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [attendeeCount, setAttendeeCount] = useState(12);
  const [frequency, setFrequency] = useState<FrequencyOption>("Weekly");
  const [hourlyRate, setHourlyRate] = useState(78);
  const [teamCount, setTeamCount] = useState(3);
  const [monthlyCost, setMonthlyCost] = useState(9360);
  const [status, setStatus] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const frequencyPerMonth = frequencyMap[frequency];

  const savingsScenario = useMemo(() => {
    const adjustedMinutes = Math.max(durationMinutes - 15, 0);
    const adjustedMeetingCost =
      (adjustedMinutes / 60) * attendeeCount * hourlyRate * frequencyPerMonth;
    const adjustedMonthlyCost = adjustedMeetingCost * teamCount;
    const savings = Math.max(monthlyCost - adjustedMonthlyCost, 0);
    return {
      adjustedMonthlyCost,
      savings,
    };
  }, [
    durationMinutes,
    attendeeCount,
    hourlyRate,
    frequencyPerMonth,
    teamCount,
    monthlyCost,
  ]);

  const handleCalculate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const response = await fetch("/api/cost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        durationMinutes,
        attendeeCount,
        hourlyRate,
        frequencyPerMonth,
      }),
    });

    if (!response.ok) {
      setStatus("Calculation failed. Try again.");
      return;
    }

    const result = (await response.json()) as {
      costPerMeeting: number;
      monthlyCost: number;
    };

    const totalMonthlyCost = result.monthlyCost * teamCount;
    setMonthlyCost(totalMonthlyCost);
    setStatus("Updated from latest inputs.");
  };

  const handleExport = async () => {
    try {
      setIsExporting(true);
      const response = await fetch("/api/report", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: "Meeting Cost Scenario",
          summary: `${meetingType} across ${teamCount} teams, ${frequency} cadence.`,
          stats: [
            { label: "Monthly cost", value: formatCurrency(monthlyCost) },
            {
              label: "Savings opportunity",
              value: formatCurrency(savingsScenario.savings),
            },
            { label: "Duration", value: `${durationMinutes} minutes` },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Export failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "meeting-cost-report.pdf";
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      setStatus("PDF export failed. Check server configuration.");
    } finally {
      setIsExporting(false);
    }
  };

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
          <form
            onSubmit={handleCalculate}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Meeting type</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500"
                  value={meetingType}
                  onChange={(event) => setMeetingType(event.target.value)}
                  placeholder="Weekly leadership sync"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Duration (minutes)</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  value={durationMinutes}
                  onChange={(event) =>
                    setDurationMinutes(Number(event.target.value))
                  }
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Attendee count</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  value={attendeeCount}
                  onChange={(event) =>
                    setAttendeeCount(Number(event.target.value))
                  }
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Frequency</span>
                <select
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  value={frequency}
                  onChange={(event) =>
                    setFrequency(event.target.value as FrequencyOption)
                  }
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-weekly">Bi-weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Average hourly rate</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  value={hourlyRate}
                  onChange={(event) =>
                    setHourlyRate(Number(event.target.value))
                  }
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Number of teams</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  type="number"
                  value={teamCount}
                  onChange={(event) =>
                    setTeamCount(Number(event.target.value))
                  }
                />
              </label>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="submit"
                className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Calculate cost
              </button>
              <button
                type="button"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                Save scenario
              </button>
            </div>
            {status ? (
              <p className="mt-4 text-xs text-emerald-200">{status}</p>
            ) : null}
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-emerald-300/40 bg-emerald-300/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                Estimated monthly cost
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {formatCurrency(monthlyCost)}
              </p>
              <p className="mt-2 text-sm text-slate-200/80">
                Based on {frequency.toLowerCase()} cadence and hourly rate.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">Savings scenario</p>
              <p className="mt-2 text-sm text-slate-300">
                Reduce duration by 15 minutes to save
                {" "}
                {formatCurrency(savingsScenario.savings)}/month.
              </p>
              <button
                type="button"
                onClick={handleExport}
                disabled={isExporting}
                className="mt-6 w-full rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isExporting ? "Generating..." : "Generate PDF report"}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
