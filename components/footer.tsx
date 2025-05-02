import Link from "next/link";
import { Gamepad2, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6" />
              <span className="font-bold">Pixel Forge Studio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium game art outsourcing for studios and indie developers. Transforming visions into gaming realities.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#3d-art">3D Art & Models</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#2d-art">2D Art & UI</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#game-mechanics">Game Mechanics</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#animations">Animations</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#vfx">VFX</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#about">About Us</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#team">Our Team</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/#careers">Careers</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/blog">Blog</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/resources">Resource Hub</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/case-studies">Case Studies</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/faq">FAQ</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground transition-colors" href="/testimonials">Testimonials</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">contact@pixelforge.studio</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Creative Lane<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pixel Forge Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}