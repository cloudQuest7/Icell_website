"use client";

import React from 'react';
import { CrowdCanvas } from '../ui/skiper-ui/skiper39';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-white w-full overflow-hidden">
      {/* Crowd Canvas Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[500px] pointer-events-none">
        <CrowdCanvas 
          src="/images/peeps/all-peeps.png" 
          rows={15} 
          cols={7} 
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-white/80 to-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-black mb-3 flex items-center gap-2">
                  <span className="text-[#064bb1]">💡</span> i-Cell
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Innovation & Entrepreneurship Cell
                </p>
                <p className="text-xs text-gray-600">
                  Pillai College of Engineering
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h5 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">
                  Quick Links
                </h5>
                <ul className="space-y-2">
                  {['Home', 'About', 'Events', 'Team', 'Contact'].map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link.toLowerCase()}`} 
                        className="text-gray-700 hover:text-[#064bb1] text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h5 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">
                  Contact
                </h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 mt-0.5 text-[#064bb1] flex-shrink-0" />
                    <span>Pillai College, New Panvel</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="w-4 h-4 text-[#064bb1] flex-shrink-0" />
                    <a href="mailto:icell@pce.ac.in" className="hover:text-[#064bb1] transition-colors">
                      icell@pce.ac.in
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4 text-[#064bb1] flex-shrink-0" />
                    <span>+91 XXX XXX XXXX</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h5 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">
                  Follow Us
                </h5>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Github, href: "#", label: "GitHub" }
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-300 flex items-center justify-center hover:border-[#064bb1] hover:bg-[#064bb1]/10 transition-all duration-300"
                      >
                        <Icon className="w-4 h-4 text-gray-700 hover:text-[#064bb1]" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-300 pt-6"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
              <p>© 2025 i-Cell PCE. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-[#064bb1] transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-[#064bb1] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tagline above the crowd */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute bottom-32 left-0 right-0 z-20 text-center"
      >
        <p className="text-gray-700 text-sm font-medium">
          Join our community of innovators
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
