"use client";

import { useState, useEffect } from "react";
import { motion } from "@/lib/motion-mock";
import { Award, Users, Gamepad, Sparkles } from "lucide-react";

const stats = [
  {
    value: 150,
    label: "Projects Completed",
    icon: <Gamepad className="h-6 w-6 mb-4 text-chart-1" />,
  },
  {
    value: 15,
    label: "Years Experience",
    icon: <Award className="h-6 w-6 mb-4 text-chart-2" />,
  },
  {
    value: 50,
    label: "Global Clients",
    icon: <Users className="h-6 w-6 mb-4 text-chart-4" />,
  },
  {
    value: 12,
    label: "Industry Awards",
    icon: <Sparkles className="h-6 w-6 mb-4 text-chart-5" />,
  },
];

export function StatsSection() {
  return (
    <section className="w-full py-16 bg-background border-y">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsCard({
  value,
  label,
  icon,
  index,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animate = () => {
      if (!hasAnimated) {
        let start = 0;
        const duration = 2000; // 2 seconds
        const step = 16; // ~60fps
        const increment = (value / duration) * step;
        
        const updateCount = () => {
          start += increment;
          if (start < value) {
            setCount(Math.floor(start));
            timeout = setTimeout(updateCount, step);
          } else {
            setCount(value);
            setHasAnimated(true);
          }
        };
        
        timeout = setTimeout(updateCount, step);
      }
    };
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    // Find the parent element to observe
    const element = document.querySelector('.stats-container');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
      observer.disconnect();
    };
  }, [value, hasAnimated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="stats-container flex flex-col items-center justify-center p-6 text-center"
    >
      {icon}
      <div className="text-4xl font-bold mb-2">{count}+</div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
}