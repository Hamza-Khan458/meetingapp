# Monetization and Payoneer Plan

## Pricing tiers

- Free: manual calculator, 30-day insights, 1 PDF export per month.
- Pro: calendar sync, 12-month history, forecasting, unlimited exports.
- Enterprise: SSO, audit logs, custom benchmarks, dedicated success.

## Payoneer approach

Payoneer does not provide a turnkey subscription API like Stripe. Use one of the
following models depending on the customer size:

1. **Invoice-led billing**
   - Issue recurring invoices via Payoneer.
   - Track subscription status in the database.
   - Restrict access based on paid-until date.

2. **Payment request link**
   - Create payment requests in Payoneer and store the payment reference.
   - When payment is confirmed, activate the subscription.

3. **Hybrid**
   - Use Payoneer for collections and a lightweight internal billing ledger for
     plan, cycle, and renewal state.

## Sales channels

- Product directories: list on marketplaces with a clear ROI story.
- Community marketing: publish ROI benchmarks and meeting playbooks.
- Outbound: target HR, Ops, and Finance leads with cost-savings narratives.

## Sample pitch (HR leader)

Subject: Cut meeting cost by 10 to 20 percent in one quarter

Hi [Name],

We built a Meeting Cost Calculator that connects calendar data with role rates
so HR teams can quantify time spend and present clear ROI to leadership. Most
teams find 10 to 20 percent savings within the first month of rollout.

Would you like a 15-minute walkthrough?

Best,
[Your Name]

## Free marketing ideas

- Weekly LinkedIn posts highlighting a specific meeting cost insight.
- Short blog posts sharing real savings scenarios.
- Simple cohort benchmarks to fuel inbound interest.
