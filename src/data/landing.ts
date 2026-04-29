export const heroMetrics = [
  { label: "Avg. meeting cost", value: "$4,280/mo" },
  { label: "Time reclaimed", value: "11.6 hrs/week" },
  { label: "ROI lift", value: "+18%" },
];

export const featureHighlights = [
  {
    title: "Instant meeting cost math",
    description:
      "Calculate real spend by role, rate, and cadence with no setup required.",
    tag: "Calculator",
  },
  {
    title: "Calendar sync + categorization",
    description:
      "Connect Google or Outlook and auto-tag meetings by team, owner, and type.",
    tag: "Sync",
  },
  {
    title: "ROI-focused dashboards",
    description:
      "Translate meeting hours into cost impact and savings scenarios leaders trust.",
    tag: "Analytics",
  },
  {
    title: "Team benchmarks",
    description:
      "Compare teams by cost per head, meeting density, and decision velocity.",
    tag: "Benchmark",
  },
  {
    title: "Forecasting + cohorts",
    description:
      "Spot cost trajectories and track cohorts by department, size, or region.",
    tag: "Forecast",
  },
  {
    title: "Executive PDF reports",
    description:
      "Export board-ready summaries with charts, recommendations, and next steps.",
    tag: "Reports",
  },
];

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "Starter visibility for small teams.",
    features: [
      "1 workspace, 10 users",
      "Manual calculator",
      "30-day insights",
      "1 PDF export/month",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$79",
    description: "Full analytics + calendar sync for growing orgs.",
    features: [
      "Unlimited workspaces",
      "Calendar sync + tags",
      "12-month history",
      "Unlimited exports",
      "Forecasting + cohorts",
    ],
    cta: "Launch Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Security, compliance, and bespoke benchmarks.",
    features: [
      "SSO + SCIM",
      "Custom benchmarks",
      "Audit logs",
      "Dedicated success",
    ],
    cta: "Talk to sales",
  },
];
