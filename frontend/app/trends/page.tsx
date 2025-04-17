import React from 'react'
import { Navbar } from '../objects/Navbar'

import { Card, CardContent } from "@/components/ui/card";

type Entity = {
  text: string;
  label: string;
};

type NERData = {
  text: string;
  entities: Entity[];
};

const nerDataYT: NERData = {
  text: "Multiple videos reporting malaria outbreaks in Kerala and Tamil Nadu are gaining traction.",
  entities: [
    { text: "malaria", label: "DISEASE" },
    { text: "Kerala", label: "GPE" },
    { text: "Tamil Nadu", label: "GPE" }
  ]
};

const nerDataTwitter: NERData = {
  text: "Hashtag #covidresurgence trends again after surge in Maharashtra and Karnataka.",
  entities: [
    { text: "#covidresurgence", label: "HASHTAG" },
    { text: "Maharashtra", label: "GPE" },
    { text: "Karnataka", label: "GPE" }
  ]
};

function renderNER({ text, entities }: NERData) {
  const parts: { text: string; label: string | null }[] = [];
  let currentIndex = 0;

  entities.forEach(({ text: entText, label }) => {
    const start = text.indexOf(entText, currentIndex);
    if (start !== -1) {
      const end = start + entText.length;
      if (start > currentIndex) {
        parts.push({ text: text.slice(currentIndex, start), label: null });
      }
      parts.push({ text: entText, label });
      currentIndex = end;
    }
  });

  if (currentIndex < text.length) {
    parts.push({ text: text.slice(currentIndex), label: null });
  }

  return (
    <p className="text-white text-base mt-4">
      {parts.map((part, idx) =>
        part.label ? (
          <span key={idx} className="bg-yellow-300 text-black px-1 rounded mx-0.5">
            {part.text} <span className="text-xs text-gray-700">({part.label})</span>
          </span>
        ) : (
          <span key={idx}>{part.text}</span>
        )
      )}
    </p>
  );
}

export default function GoogleTrendsAnalytics() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header Section */}
      <Navbar />
      <div className="mb-10 flex justify-around items-start mt-10">
        <div>
          <p className="text-sm text-sky-400 mb-1 px-2 py-1 border border-sky-400/30 rounded-full w-fit">Google Trends</p>
          <h1 className="text-4xl font-semibold leading-tight">Epidemic Search Trends</h1>
          <p className="mt-2 text-gray-400 max-w-lg">
            Monitoring Google search trends related to epidemics to identify early signals and regional interest spikes.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex gap-6">
          <Card className="bg-gradient-to-br from-[#4285F4] to-[#3367D6] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Search Spike</p>
              <h2 className="text-2xl font-bold mt-2">+132%</h2>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#EA4335] to-[#C5221F] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Top Region</p>
              <h2 className="text-2xl font-bold mt-2">India</h2>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#34A853] to-[#0F9D58] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Most Searched</p>
              <h2 className="text-2xl font-bold mt-2">"flu symptoms"</h2>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-10">
        <Card className="bg-white/5">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Trends over time</p>
            <img src="images/trendsovertime.png" alt="" />
          </CardContent>
        </Card>

        <Card className="bg-white/5">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Correlation between Searched Symptoms</p>
            <img src="images/correlation_matrix_google_trends.png" alt="" />
          </CardContent>
        </Card>

        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Bubble Plot (Cold)</p>
            <img src="images/trends_bubble_plot_sentiment.png" alt="" />
          </CardContent>
        </Card>
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Google Trends Heatmap</p>
            <img src="images/heatmap_google_trends.png" alt="" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
