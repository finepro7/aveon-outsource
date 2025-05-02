"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Mythic Heroes",
    category: "3D Characters",
    image:
      "https://images.pexels.com/photos/7034537/pexels-photo-7034537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Character Design", "3D Modeling", "Texturing"],
  },
  {
    id: 2,
    title: "Forgotten Realms",
    category: "Environments",
    image:
      "https://images.pexels.com/photos/7034536/pexels-photo-7034536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Environment Art", "Level Design", "Lighting"],
  },
  {
    id: 3,
    title: "Stellar Conquest UI",
    category: "2D Art",
    image:
      "https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI Design", "Game Interface", "Iconography"],
  },
  {
    id: 4,
    title: "Cyberworld Mechanics",
    category: "Game Mechanics",
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Gameplay Systems", "VFX", "Programming"],
  },
  {
    id: 5,
    title: "Fantasy Creatures",
    category: "3D Characters",
    image:
      "https://images.pexels.com/photos/3254138/pexels-photo-3254138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Character Design", "Creature Design", "Animation"],
  },
  {
    id: 6,
    title: "Neon City",
    category: "Environments",
    image:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Environment Art", "Lighting", "Atmosphere"],
  },
];

const categories = [
  "All",
  "3D Characters",
  "Environments",
  "2D Art",
  "Game Mechanics",
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="w-full py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Showcasing Creative Excellence"
          description="Explore our diverse collection of game art and mechanics crafted for studios worldwide."
        />

        <div className="flex flex-wrap justify-center gap-2 mt-12 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-card"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-white/80">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/portfolio">
              View Full Portfolio
              <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
