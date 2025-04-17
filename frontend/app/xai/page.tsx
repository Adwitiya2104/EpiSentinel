// app/xai/page.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, BrainCircuit, Eye } from "lucide-react"
import { Navbar } from "../objects/Navbar"

export default function XAIDashboard() {
  return (
    <main className="space-y-6 bg-gray-950">
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-white ml-3 mb-5">Explainable AI Analysis</h1>
        <p className="mt-2 text-gray-400 max-w-lg ml-3 mb-5">
          EpiSentinel uses AI to monitor and predict disease outbreaks. By integrating Explainable AI (XAI), it provides clear insights into which factors—like mobility, vaccination rates, or demographics—drive its predictions. This transparency helps public health officials trust the system, understand the reasoning behind alerts, and make informed decisions quickly
        </p>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-blue-600 text-white shadow-lg ml-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit size={20} /> Model Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Random Forest Classifier (Accuracy: 91%)</p>
            </CardContent>
          </Card>

          <Card className="bg-green-600 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 size={20} /> Most Important Word
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Panic"</p>
            </CardContent>
          </Card>

          <Card className="bg-pink-600 text-white shadow-lg mr-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye size={20} /> Explainability Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>SHAP (Shapley Additive Explanations)</p>
            </CardContent>
          </Card>
        </div>

        {/* Heatmap & Feature Chart Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <Card className="bg-white/5 mb-20">
            <CardHeader>
              <CardTitle className="text-white">Important Words for Sentiment Classification</CardTitle>
            </CardHeader>
            <CardContent>
              {/* You can add a chart component here like recharts or chart.js */}
              <img src="images/xai_most_imp_words.png" alt="" />
              <div className="text-center text-muted"></div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 mb-20">
            <CardHeader>
              <CardTitle className="text-white">City-Level SHAP Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="images/xai_city_sentiment_distribution.png" alt="" />
              <div className="text-center text-muted"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
