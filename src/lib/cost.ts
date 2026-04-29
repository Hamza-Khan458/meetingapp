export type MeetingCostInput = {
  durationMinutes: number;
  attendeeCount: number;
  hourlyRate: number;
  frequencyPerMonth: number;
};

export type MeetingCostOutput = {
  costPerMeeting: number;
  monthlyCost: number;
};

export function calculateMeetingCost(input: MeetingCostInput): MeetingCostOutput {
  const minutes = Math.max(input.durationMinutes, 0);
  const attendees = Math.max(input.attendeeCount, 0);
  const rate = Math.max(input.hourlyRate, 0);
  const frequency = Math.max(input.frequencyPerMonth, 0);

  const costPerMeeting = (minutes / 60) * rate * attendees;
  const monthlyCost = costPerMeeting * frequency;

  return {
    costPerMeeting: Number(costPerMeeting.toFixed(2)),
    monthlyCost: Number(monthlyCost.toFixed(2)),
  };
}
