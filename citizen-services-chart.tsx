"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "1月", services: 12400, applications: 8200 },
  { month: "2月", services: 13200, applications: 8900 },
  { month: "3月", services: 14800, applications: 9800 },
  { month: "4月", services: 15600, applications: 10400 },
  { month: "5月", services: 16200, applications: 11200 },
  { month: "6月", services: 17800, applications: 12100 },
  { month: "7月", services: 18900, applications: 12800 },
  { month: "8月", services: 19400, applications: 13400 },
  { month: "9月", services: 20200, applications: 14200 },
  { month: "10月", services: 21600, applications: 15100 },
]

export function CitizenServicesChart() {
  return (
    <Card className="chart-container p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">市民サービス統計</h3>
          <p className="text-sm text-muted-foreground">月次サービス利用と申請数の推移</p>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorServices" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#666666" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#666666" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#999999" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#999999" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="services"
                stroke="#666666"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorServices)"
                name="サービス利用"
              />
              <Area
                type="monotone"
                dataKey="applications"
                stroke="#999999"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorApplications)"
                name="申請数"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}
