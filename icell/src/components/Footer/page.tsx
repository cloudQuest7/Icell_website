"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-neutral-950 w-full overflow-hidden">
      {/* Compact World Map Section */}
      <div className="relative h-[250px] md:h-[300px]">
        <div className="absolute inset-0 opacity-20">
          <WorldMap
            dots={[
              {
                start: { lat: 19.0760, lng: 72.8777 }, // Mumbai
                end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              },
              {
                start: { lat: 19.0760, lng: 72.8777 }, // Mumbai
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 19.0760, lng: 72.8777 }, // Mumbai
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
            ]}
          />
        </div>
        
        {/* Centered Content Over Map */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-2 text-center"
          >
            Building{" "}
            <span className="text-[#064bb1]">Globally</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm text-neutral-400 max-w-lg text-center"
          >
            Connecting innovators worldwide through technology
          </motion.p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Brand Column */}
            <div className="col-span-1">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#064bb1]">💡</span> i-Cell
              </h4>
              <p className="text-xs text-neutral-400 mb-2">
                Innovation & Entrepreneurship Cell
              </p>
              <p className="text-xs text-neutral-500">
                Pillai College of Engineering
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Quick Links</h5>
              <ul className="space-y-2">
                {['Home', 'About', 'Events', 'Team', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-neutral-400 hover:text-[#064bb1] text-xs transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Contact</h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-[#064bb1] flex-shrink-0" />
                  <span>Pillai College, New Panvel</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-400">
                  <Mail className="w-3.5 h-3.5 text-[#064bb1] flex-shrink-0" />
                  <a href="mailto:icell@pce.ac.in" className="hover:text-[#064bb1] transition-colors duration-200">
                    icell@pce.ac.in
                  </a>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-400">
                  <Phone className="w-3.5 h-3.5 text-[#064bb1] flex-shrink-0" />
                  <span>+91 XXX XXX XXXX</span>
                </li>
              </ul>
            </div>

            {/* Social Links with Minimal Hover Effects */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Follow Us</h5>
              <div className="flex gap-2.5">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Github, href: "#", label: "GitHub" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-all duration-300 hover:border-[#064bb1]/50 hover:bg-neutral-800"
                    >
                      <Icon className="w-4 h-4 text-neutral-400 transition-all duration-300 group-hover:text-[#064bb1] group-hover:scale-110" />
                      {/* Subtle glow effect on hover */}
                      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#064bb1]/5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-500">
              <p>© 2025 i-Cell PCE. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#privacy" className="hover:text-[#064bb1] transition-colors duration-200">Privacy</a>
                <a href="#terms" className="hover:text-[#064bb1] transition-colors duration-200">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
