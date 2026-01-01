"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
                whileHover={{ scale: 1.05 }}
                className="relative w-20 h-20 overflow-hidden"
              >
                 <Image 
                   src="/images/logo.jpeg" 
                   alt="Vegeebook Logo" 
                   fill
                   className="object-contain"
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
            
            <NavDropdown 
              title="About Us" 
              scrolled={scrolled}
              items={[
                { label: "Our Story", href: "/about#story" },
                { label: "Vision & Mission", href: "/about#vision" },
                { label: "Leadership Team", href: "/about#team" },
                { label: "Board of Advisors", href: "/about#advisors" },
              ]} 
            />

            <NavDropdown 
              title="Products" 
              scrolled={scrolled}
              items={[
                { label: "All Vegetables", href: "/products" },
                { label: "Cut Types", href: "/products#cuts" },
              ]} 
            />

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
              
              <div className="px-3 py-2">
                <span className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">About</span>
                <MobileNavLink href="/about#story" onClick={() => setIsOpen(false)}>Our Story</MobileNavLink>
                <MobileNavLink href="/about#vision" onClick={() => setIsOpen(false)}>Vision & Mission</MobileNavLink>
                <MobileNavLink href="/about#team" onClick={() => setIsOpen(false)}>Leadership Team</MobileNavLink>
                <MobileNavLink href="/about#advisors" onClick={() => setIsOpen(false)}>Board of Advisors</MobileNavLink>
              </div>

              <div className="px-3 py-2">
                <span className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Products</span>
                <MobileNavLink href="/products" onClick={() => setIsOpen(false)}>All Vegetables</MobileNavLink>
                <MobileNavLink href="/products#cuts" onClick={() => setIsOpen(false)}>Cut Types</MobileNavLink>
              </div>

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

function NavDropdown({ title, items, scrolled }: { title: string, items: { label: string, href: string }[], scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-green-500 ${scrolled ? "text-gray-700" : "text-gray-100"}`}>
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
          >
            {items.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
    >
      {children}
    </Link>
  );
}
