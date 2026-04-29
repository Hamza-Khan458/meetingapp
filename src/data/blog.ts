export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "meeting-cost-baseline",
    title: "How to establish your meeting cost baseline",
    summary:
      "A step-by-step approach to estimate spend, create a baseline, and spot savings quickly.",
    publishedAt: "2026-04-29",
    readingMinutes: 6,
    tags: ["ROI", "Ops", "Benchmarking"],
    sections: [
      {
        heading: "Start with role rates",
        body:
          "List your top meeting-heavy roles and estimate hourly cost. Use average rates if you do not have granular payroll data.",
      },
      {
        heading: "Capture cadence",
        body:
          "Identify recurring meetings, their duration, and attendee counts. This creates the fastest view into true time cost.",
      },
      {
        heading: "Set a baseline",
        body:
          "Calculate monthly spend and document the current baseline before suggesting any reductions.",
      },
    ],
  },
  {
    slug: "forecasting-time-roi",
    title: "Forecasting time ROI with cohort analytics",
    summary:
      "Use cohorts to predict meeting cost trends and justify optimization initiatives.",
    publishedAt: "2026-04-29",
    readingMinutes: 7,
    tags: ["Forecasting", "Analytics", "Cohorts"],
    sections: [
      {
        heading: "Group by behavior",
        body:
          "Create cohorts by department size, meeting density, or role mix. Compare outcomes across cohorts to reveal savings patterns.",
      },
      {
        heading: "Track leading indicators",
        body:
          "Monitor meeting hours per head, decision velocity, and repeat meeting rates to forecast costs.",
      },
      {
        heading: "Scenario planning",
        body:
          "Apply reductions by duration or frequency to model savings and pick the highest impact option.",
      },
    ],
  },
  {
    slug: "executive-reporting",
    title: "Executive reporting that gets buy-in",
    summary:
      "Build executive-ready reports that connect time spent to dollars saved.",
    publishedAt: "2026-04-29",
    readingMinutes: 5,
    tags: ["Reporting", "Leadership", "Finance"],
    sections: [
      {
        heading: "Keep it outcome-driven",
        body:
          "Frame meetings in terms of cost, recovered time, and strategic ROI rather than raw activity.",
      },
      {
        heading: "Visualize deltas",
        body:
          "Show before and after snapshots with clear deltas for each team or cohort.",
      },
      {
        heading: "Define next actions",
        body:
          "Finish with specific next steps for leaders: limit size, shorten duration, and remove redundant sessions.",
      },
    ],
  },
];
