import numpy as np
import pandas as pd
from scipy.optimize import differential_evolution
import json
import os

# From our Market Analysis script:
SOM_USERS = 20000  # Target users in Year 1
LAWYER_COST = 12000 # Cost of alternative

# Operational Costs
AI_COST_PER_USER_MONTH = 2.50 # Heavy use of Gemini 1.5 Pro / GPT-4 for generating claims/formats
HOSTING_COST_BASE = 50.00     # Vercel + Supabase Base
CAC_BASE = 45.00              # Customer Acquisition Cost (Google/Meta Ads targeting 'how to patent')

print("Base Economic Constants Loaded.")

def simulate_monthly_economics(price):
    if price <= 0: return -999999
    conversion_rate = max(0.001, 0.05 * np.exp(-price / 150.0))
    active_users = SOM_USERS * conversion_rate
    mrr = active_users * price
    cogs = (active_users * AI_COST_PER_USER_MONTH) + HOSTING_COST_BASE
    marketing_amortized = (active_users * CAC_BASE) / 6.0
    net_profit = mrr - cogs - marketing_amortized
    return -net_profit

def optimization_wrapper(x):
    return simulate_monthly_economics(x[0])

bounds = [(9.0, 499.0)] # Test prices from $9 to $499

result = differential_evolution(
    optimization_wrapper,
    bounds,
    strategy='best1bin',
    maxiter=100,
    popsize=15,
    tol=0.01,
    seed=42
)

optimal_price = result.x[0]
max_profit = -result.fun

conversion_rate = max(0.001, 0.05 * np.exp(-optimal_price / 150.0))
optimal_users = SOM_USERS * conversion_rate
mrr = optimal_users * optimal_price
cogs = (optimal_users * AI_COST_PER_USER_MONTH) + HOSTING_COST_BASE
gross_margin = (mrr - cogs) / mrr if mrr > 0 else 0

print("\n=========================================================")
print("OPTIMAL BUSINESS MODEL DISCOVERED")
print("=========================================================")
print(f"   Optimum Monthly Fee:  ${optimal_price:.2f} / month")
print(f"   Expected Active Users: {int(optimal_users):,} (from {SOM_USERS:,} SOM)")
print(f"   Projected MRR:        ${mrr:,.2f}")
print(f"   Gross Margin:         {gross_margin*100:.1f}%")
print(f"   Net Monthly Profit:   ${max_profit:,.2f}")
print("=========================================================")

final_economics = {
    "optimal_monthly_price": round(optimal_price, 2),
    "projected_users_y1": int(optimal_users),
    "projected_mrr": round(mrr, 2),
    "gross_margin_pct": round(gross_margin * 100, 2),
    "cogs_ai_hosting": round(cogs, 2)
}

with open('Research/IP_Hub_Analysis/Results/business_economics.json', 'w') as f:
    json.dump(final_economics, f, indent=4)