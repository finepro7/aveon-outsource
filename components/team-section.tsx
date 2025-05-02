"use client";

import Image from "next/image";
import { motion } from "@/lib/motion-mock";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Art Director",
    bio: "With over 15 years in the gaming industry, Alex leads our creative vision and ensures every project exceeds expectations.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@pixelforge.studio",
    },
  },
  {
    name: "Samantha Chen",
    role: "Lead 3D Artist",
    bio: "Samantha specializes in character modeling and has contributed to several award-winning games in the action-adventure genre.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "samantha@pixelforge.studio",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Technical Art Director",
    bio: "Marcus bridges the gap between art and technology, specializing in optimized game assets and rendering pipelines.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@pixelforge.studio",
    },
  },
  {
    name: "Elena Rodriguez",
    role: "2D Art Lead",
    bio: "Elena's concept art and UI designs have helped shape the visual identity of numerous indie and AAA game titles.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "elena@pixelforge.studio",
    },
  },
];

export function TeamSection() {
  return (
    <section id="team" className="w-full py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          subtitle="Our Team"
          title="Meet the Creative Minds"
          description="Our diverse team of artists, designers, and developers bring passion and expertise to every project."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex gap-2">
                        <Button size="icon" variant="secondary" asChild>
                          <a href={member.social.linkedin} aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="icon" variant="secondary" asChild>
                          <a href={member.social.twitter} aria-label="Twitter">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="icon" variant="secondary" asChild>
                          <a href={`mailto:${member.social.email}`} aria-label="Email">
                            <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
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