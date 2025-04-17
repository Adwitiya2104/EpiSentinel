import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => (
  <div className="w-full lg:py-40 bg-gray-950 hero">
    <div className="container mx-auto">
      <div className="grid grid-cols-1  items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline" className="badge">Welcome!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              EpiSentinel
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
            An AI-powered epidemic early warning system that analyzes social data and search trends in real-time to detect and predict disease outbreaks for timely intervention.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <a href="/about">
              <Button size="lg" className="gap-4 hero-button" variant="outline">
                About EpiSentinel
              </Button>
            </a>
            <a href="/xai">
              <Button size="lg" className="gap-4 xai-btn">
                XAI <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square hero-square-1">
          </div>
          <div className="bg-muted rounded-md row-span-2 hero-square-2"></div>
          <div className="bg-muted rounded-md aspect-square hero-square-3"></div>
        </div>
      </div>
    </div>
  </div>
);