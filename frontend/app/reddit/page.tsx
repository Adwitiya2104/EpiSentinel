import React from 'react'
import { Navbar } from '../objects/Navbar';

import { Card, CardContent } from "@/components/ui/card";

export default function Reddit() {
  return (
    <div className="min-h-screen black-body text-white">
      {/* Header Section */}
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center mb-10 py-15">
        <div className="mb-6 md:mb-0">
          <p className="text-sm text-red-400 mb-1 px-2 py-1 border border-red-400/30 rounded-full w-fit">Reddit</p>
          <h1 className="text-4xl font-semibold leading-tight">Epidemic Mentions on Reddit</h1>
          <p className="mt-2 text-gray-400 max-w-lg">
            Monitoring Reddit threads mentioning epidemic topics, showing upvotes, comment trends, sentiment distribution, and post volume.
          </p>
        </div>

        {/* Top Cards Section */}
        <div className="flex flex-wrap gap-6 justify-start md:justify-end w-full md:w-auto md:ml-10">
          <Card className="bg-gradient-to-br from-[#8e44ad] to-[#c0392b] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Total Mentions</p>
              <h2 className="text-2xl font-bold mt-2">3.8K</h2>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#3498db] to-[#2ecc71] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Positive Sentiment</p>
              <h2 className="text-2xl font-bold mt-2">24%</h2>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#e74c3c] to-[#f1948a] text-white w-64 h-32">
            <CardContent className="p-4">
              <p className="text-sm">Negative Sentiment</p>
              <h2 className="text-2xl font-bold mt-2">47%</h2>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Mentions based on Location</p>
            {/* Insert Graph Component Here */}
            <img src="images/redditheatmap.png" alt="" />
            <div className="bg-white/10 rounded-md" />
          </CardContent>
        </Card>

        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Sentiment Trend</p>
            {/* Insert Graph Component Here */}
            <img src="images/redditsentiment.png" alt="" className='enlarge'/>
            <div className="bg-white/10 rounded-md" />
          </CardContent>
        </Card>
        <Card className="bg-white/5 mb-20">
          <CardContent className="p-4 text-gray-300">
            <p className="text-lg font-semibold mb-2">Data Overview</p>
            {/* Insert Graph Component Here */}
            <img src="images/redditdata.png" alt="" className='enlarge'/>
            <div className="bg-white/10 rounded-md" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
