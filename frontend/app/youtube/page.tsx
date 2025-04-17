import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "../objects/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function YouTubeAnalytics() {
  return (
    <div className="min-h-screen bg-[#0b0e1c] text-white">
      <Navbar/>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center mb-10 py-8">
        <div className="mb-6 md:mb-0">
          <p className="text-sm text-gray-400 mb-1 px-2 py-1 border border-white/30 rounded-full w-fit">YouTube</p>
          <h1 className="text-4xl font-semibold leading-tight">Epidemic Mentions on YouTube</h1>
          <p className="mt-2 text-gray-400 max-w-lg">
            Analysis of YouTube videos related to epidemic keywords, showing trends in views, likes, sentiment, and video count.
          </p>
        </div>

        {/* Top Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-auto md:ml-10">
          <Card className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Total Mentions</p>
              <h2 className="text-2xl font-bold mt-2">5.2K</h2>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#28a745] to-[#8ce99a] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Positive Sentiment</p>
              <h2 className="text-2xl font-bold mt-2">65%</h2>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#dc3545] to-[#ff7f7f] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Negative Sentiment</p>
              <h2 className="text-2xl font-bold mt-2">18%</h2>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-10">
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Mentions based on Location</p>
            {/* Insert Graph Component Here */}
            <img src="images/ytheatmap.png" alt="" />
            <div className="bg-white/10 rounded-md" />
          </CardContent>
        </Card>

        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Sentiment Trend</p>
            {/* Insert Graph Component Here */}
            <img src="images/ytsentiment.png" alt="" className="enlarge"/>
            <div className=" bg-white/10 rounded-md" />
          </CardContent>
        </Card>
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Classification Report</p>
            {/* Insert Graph Component Here */}
            <img src="images/ytclassification.png" alt="" className="enlarge"/>
            <div className=" bg-white/10 rounded-md" />
          </CardContent>
        </Card>
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Sentiment Compund Distribution</p>
            {/* Insert Graph Component Here */}
            <img src="images/ytcompound.png" alt="" className="enlarge"/>
            <div className=" bg-white/10 rounded-md" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
