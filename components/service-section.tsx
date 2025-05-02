"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, Cuboid as Cube, Gamepad, Workflow, Video, PenTool, SparkleIcon } from "lucide-react";
import { motion } from "@/lib/motion-mock";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "3D Character Models",
    description: "Breathtaking game-ready characters with detailed textures and optimized topology.",
    icon: <Cube className="h-10 w-10 text-chart-1" />,
  },
  {
    title: "Environment Art",
    description: "Immersive worlds and environments that enhance gameplay and storytelling.",
    icon: <Brush className="h-10 w-10 text-chart-2" />,
  },
  {
    title: "Game Mechanics",
    description: "Innovative gameplay systems and mechanics that engage players.",
    icon: <Gamepad className="h-10 w-10 text-chart-3" />,
  },
  {
    title: "2D Concept Art",
    description: "Visually striking concept art to guide your game's artistic direction.",
    icon: <PenTool className="h-10 w-10 text-chart-4" />,
  },
  {
    title: "Animation & Rigging",
    description: "Fluid, expressive animations that bring characters and environments to life.",
    icon: <Video className="h-10 w-10 text-chart-5" />,
  },
  {
    title: "VFX & Visual Systems",
    description: "Eye-catching visual effects that enhance the player experience.",
    icon: <SparkleIcon className="h-10 w-10 text-chart-1" />,
  },
];

export function ServiceSection() {
  return (
    <section id="services" className="w-full py-24 bg-background">
      <div className="container">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Game Art Solutions"
          description="We provide end-to-end creative services to help you build stunning games that stand out in today's competitive market."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border hover:border-primary/20 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="pb-2">
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}