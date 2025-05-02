"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "@/lib/motion-mock";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Pixel Forge Studio transformed our concept art into stunning 3D models that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
    author: "Michael Thompson",
    title: "Creative Director, GameVerse Studios",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "Working with this team was the best decision we made for our indie game. They delivered high-quality assets on time and within budget, helping our game stand out in a crowded market.",
    author: "Sarah Johnson",
    title: "Lead Developer, Indie Horizons",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "Their UI design revamped our mobile game's interface, resulting in a 40% increase in player engagement. Professional, creative, and highly responsive to feedback.",
    author: "David Chen",
    title: "Product Manager, MobilePlay Games",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Hear from studios and developers who've partnered with us."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground flex-grow italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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