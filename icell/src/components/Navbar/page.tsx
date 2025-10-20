"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Clean Background */}
      <div className={`fixed top-0 left-0 w-full h-16 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-50"></div>
      </div>

      <nav className="fixed top-3 w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo with Lightbulb */}
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative">
                {/* Lightbulb SVG Icon */}
                <svg 
                  className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                </svg>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-2xl font-bold font-mono tracking-wider text-white group-hover:text-cyan-300 transition-colors duration-300">
                i-Cell
              </div>
            </Link>

            {/* Desktop Navigation - Moved to Right */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium text-m tracking-wide transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Modern underline animation */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                    isActive(item.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}></div>
                 
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              title="Toggle navigation"
              className="lg:hidden relative group p-2"
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-medium text-sm tracking-wide rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
