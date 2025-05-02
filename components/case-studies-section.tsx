"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Fantasy RPG Character Design",
    description:
      "Complete character pipeline for a AAA fantasy role-playing game",
    image:
      "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Epic Games Studio",
    tags: ["Character Design", "3D Modeling", "Animation", "AAA"],
  },
  {
    id: 2,
    title: "Mobile Game UI Overhaul",
    description:
      "Complete UI/UX redesign that increased player retention by 45%",
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "MobilePlay Games",
    tags: ["UI/UX", "Mobile", "2D Art", "Game Design"],
  },
  {
    id: 3,
    title: "Procedural Environment System",
    description:
      "Innovative environment generation system for an open-world adventure",
    image:
      "https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Indie Collective",
    tags: ["Environment Art", "Procedural", "Technical Art"],
  },
];

export function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="case-studies" className="w-full py-24 bg-background">
      <div className="container">
        <SectionHeading
          subtitle="Case Studies"
          title="Our Creative Process in Action"
          description="Dive deep into selected projects to see how we approach challenges and deliver exceptional results."
        />

        <div ref={containerRef} className="mt-12 space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none bg-transparent">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div
                      className={`order-2 ${
                        index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Badge variant="outline" className="mb-4">
                        Case Study {study.id}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {study.description}
                      </p>
                      <div className="mb-6">
                        <span className="text-sm text-muted-foreground">
                          Client:{" "}
                        </span>
                        <span className="font-medium">{study.client}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild>
                        <Link href={`/case-studies/${study.id}`}>
                          View Case Study{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div
                      className={`order-1 ${
                        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-70" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
