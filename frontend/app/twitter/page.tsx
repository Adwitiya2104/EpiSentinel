import React from 'react'
import { Navbar } from '../objects/Navbar'

import { Card, CardContent } from "@/components/ui/card";

export default function TwitterAnalytics() {
  return (
    <div className="black-body text-white">
      {/* Header Section */}
      <Navbar />
      <div className="mb-10 py-10">
        <p className="text-sm text-sky-400 ml-5 mb-4 px-2 py-1 border border-sky-400/30 rounded-full w-fit">Twitter</p>
        <h1 className="text-4xl font-semibold leading-tight ml-5">Epidemic Mentions on Twitter</h1>
        <p className="mt-2 text-gray-400 max-w-lg ml-5">
          Tracking epidemic-related tweets, measuring retweet volume, sentiment shifts, and hashtag trends over time.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-6 justify-start md:justify-start ml-5 mb-10">
        <Card className="bg-gradient-to-br from-[#1DA1F2] to-[#0d8ddb] text-white w-64 h-32">
          <CardContent className="p-4">
            <p className="text-sm">Total Tweets</p>
            <h2 className="text-2xl font-bold mt-2">5.2K</h2>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#17bf63] to-[#0a8f48] text-white w-64 h-32">
          <CardContent className="p-4">
            <p className="text-sm">Positive Sentiment</p>
            <h2 className="text-2xl font-bold mt-2">48%</h2>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#e0245e] to-[#c2185b] text-white w-64 h-32">
          <CardContent className="p-4">
            <p className="text-sm">Negative Sentiment</p>
            <h2 className="text-2xl font-bold mt-2">24%</h2>
          </CardContent>
        </Card>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Data Overview</p>
            {/* Insert Graph Component Here */}
            <img src="/images/nlpcorona.png" alt="" />
            <div className=" bg-white/10 rounded-md" />
          </CardContent>
        </Card>

        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Sentiment Trend</p>
            {/* Insert Graph Component Here */}
            <img src="/images/twittersentiment.png"/>
            <div className="bg-white/10 rounded-md" />
          </CardContent>
        </Card>
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Word Cloud</p>
            {/* Insert Graph Component Here */}
            <img src="/images/wordcloudtwitter.png"/>
            <div className="bg-white/10 rounded-md" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

