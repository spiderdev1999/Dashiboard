"use client"

import { Card } from "@/components/ui/card"
import { Users, FileText, TrendingUp, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const kpis = [
  {
    title: "市民サービス利用者",
    value: "284,592",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "処理済み申請",
    value: "18,432",
    change: "+8.2%",
    trend: "up",
    icon: FileText,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "満足度スコア",
    value: "94.8%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    title: "平均処理時間",
    value: "2.4日",
    change: "-15.3%",
    trend: "down",
    icon: Clock,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
]

export function KPICards() {
  const [mounted, setMounted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedKPI, setSelectedKPI] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleKPIClick = (kpiTitle: string) => {
    setSelectedKPI(kpiTitle)
    setModalOpen(true)
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <Card
          key={kpi.title}
          className={`p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 cursor-pointer ${
            mounted ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => handleKPIClick(kpi.title)}
        >
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{kpi.title}</p>
              <p className="text-3xl font-bold text-foreground">{kpi.value}</p>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${kpi.trend === "up" ? "text-chart-4" : "text-chart-5"}`}>
                  {kpi.change}
                </span>
                <span className="text-xs text-muted-foreground">vs 先月</span>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-xl ${kpi.bgColor} flex items-center justify-center`}>
              <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
            </div>
          </div>
        </Card>
      ))}
      
      {/* KPI Detail Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedKPI}の詳細ビュー</DialogTitle>
            <DialogDescription>
              {selectedKPI}の詳細情報と分析データを表示します。
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                <h4 className="font-semibold mb-2">現在の値</h4>
                <p className="text-2xl font-bold text-primary">
                  {kpis.find(kpi => kpi.title === selectedKPI)?.value}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                <h4 className="font-semibold mb-2">前月比</h4>
                <p className="text-lg font-medium text-chart-4">
                  {kpis.find(kpi => kpi.title === selectedKPI)?.change}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                <h4 className="font-semibold mb-2">詳細説明</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedKPI}の詳細な分析データとトレンド情報がここに表示されます。
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
