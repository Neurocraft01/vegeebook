"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500"
              >
                 <Image 
                   src="/images/logo.jpeg" 
                   alt="Vegeebook Logo" 
                   fill
                   className="object-cover"
                 />
              </motion.div>
              <span className={`text-2xl font-bold tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`}>
                Vegeebook
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" scrolled={scrolled}>Home</NavLink>
            <NavLink href="/about" scrolled={scrolled}>About Us</NavLink>
            <NavLink href="/products" scrolled={scrolled}>Products</NavLink>
            <NavLink href="/services" scrolled={scrolled}>Services</NavLink>
            <NavLink href="/faq" scrolled={scrolled}>FAQ</NavLink>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  scrolled 
                    ? "bg-green-600 text-white hover:bg-green-700" 
                    : "bg-white text-green-900 hover:bg-gray-100"
                }`}
              >
                Partner With Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${scrolled ? "text-gray-900" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t absolute w-full shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink href="/products" onClick={() => setIsOpen(false)}>Products</MobileNavLink>
              <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="/faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 mt-4 rounded-lg bg-green-600 text-white font-bold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children, scrolled }: { href: string, children: React.ReactNode, scrolled: boolean }) {
  return (
    <Link href={href} className="relative group">
      <span className={`text-sm font-medium transition-colors hover:text-green-500 ${
        scrolled ? "text-gray-700" : "text-gray-100"
      }`}>
        {children}
      </span>
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full ${
        scrolled ? "bg-green-600" : "bg-white"
      }`}></span>
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
    >
      {children}
    </Link>
  );
}
