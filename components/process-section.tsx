"use client";

import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Palette,
  PenTool,
  Brush,
  Layers,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    title: "Requirements Gathering",
    description:
      "We start by understanding your game's artistic needs, technical constraints, and creative vision.",
    icon: <FileSpreadsheet className="h-8 w-8" />,
    color: "bg-chart-1/20 text-chart-1",
  },
  {
    title: "Concept Development",
    description:
      "Our artists create initial sketches and design documents to establish the visual direction.",
    icon: <PenTool className="h-8 w-8" />,
    color: "bg-chart-2/20 text-chart-2",
  },
  {
    title: "Initial Prototyping",
    description:
      "We develop basic models, layouts, or systems to validate the creative approach.",
    icon: <Palette className="h-8 w-8" />,
    color: "bg-chart-3/20 text-chart-3",
  },
  {
    title: "Production & Refinement",
    description:
      "Our team delivers high-quality assets with regular review cycles for feedback integration.",
    icon: <Brush className="h-8 w-8" />,
    color: "bg-chart-4/20 text-chart-4",
  },
  {
    title: "Technical Implementation",
    description:
      "We ensure all assets are optimized for your game engine with proper technical specifications.",
    icon: <Layers className="h-8 w-8" />,
    color: "bg-chart-5/20 text-chart-5",
  },
  {
    title: "Final Delivery & Support",
    description:
      "We provide complete asset packages with documentation and implementation support.",
    icon: <CheckCircle className="h-8 w-8" />,
    color: "bg-chart-1/20 text-chart-1",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="w-full py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          subtitle="Our Process"
          title="How We Bring Your Game to Life"
          description="Our streamlined workflow ensures efficient collaboration and exceptional results for every project."
        />

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-12 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={cn(
                  "md:flex items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "flex-1 mb-6 md:mb-0",
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  )}
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <div
                    className={cn(
                      "h-16 w-16 rounded-full flex items-center justify-center",
                      step.color
                    )}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
