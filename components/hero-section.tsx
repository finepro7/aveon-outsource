"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      heroRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-background to-background px-4 sm:px-6"
      style={{
        backgroundImage: `radial-gradient(
          circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
          hsl(var(--chart-5)/0.15),
          transparent 40%
        )`,
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[90vh] py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 sm:mb-6 text-sm rounded-full bg-muted/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-1 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-1"></span>
            </span>
            Premium Game Art Outsourcing
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="block mb-2">Transforming Game Visions</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-4 to-chart-5">
              Into Digital Masterpieces
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 px-4">
            We bring your game concepts to life with stunning 3D models,
            captivating 2D art, and innovative game mechanics. Partner with us
            to elevate your gaming experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/#portfolio">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">
            Scroll to explore
          </span>
          <MousePointer className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
