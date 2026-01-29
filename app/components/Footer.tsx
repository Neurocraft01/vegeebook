"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Package, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="relative w-24 h-24 overflow-hidden rounded-3xl bg-white">
              <Image 
                src="/logo.jpeg" 
                alt="Vegeebook Logo" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Vegeebook</h2>
            <p className="text-green-100 text-sm leading-relaxed">
              Revolutionizing the vegetable supply chain with technology, transparency, and trust. Connecting farmers directly to businesses.
            </p>
            <div className="flex space-x-4">
              {/* <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} /> */}
              <SocialLink href="https://www.youtube.com/@Vegeebook" icon={<Youtube className="w-5 h-5" />} />
              <SocialLink href="https://www.instagram.com/vegeebook/" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="https://www.linkedin.com/in/keshav-hissal-44150a264/" icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/products" label="Our Products" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-green-100 text-sm">Farm to Business</li>
              <li className="text-green-100 text-sm">Supply Chain Management</li>
              <li className="text-green-100 text-sm">Quality Assurance</li>
              <li className="text-green-100 text-sm">Cold Storage Logistics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-green-100 text-sm">
                  Tejas Heights, SNo. 140, Gurudwara, Chinchwad, Pune - 411033
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">+91 9226593412</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">info@vegeebooks.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Package className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">Minimum qty - 5kg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-green-200 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Vegeebook. All rights reserved.
          </p>
          
          <p className="text-green-200 text-xs text-center">
            Designed and Developed by <a href="https://aksautomations.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold">AKS AUTOMATIONS</a>
          </p>

          <div className="flex space-x-6">
            <Link href="#" className="text-green-200 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-green-200 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <motion.a 
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      href={href} 
      className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-green-100 hover:bg-green-700 hover:text-white transition-all"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <li>
      <Link href={href}>
        <motion.span 
          whileHover={{ x: 5 }}
          className="text-green-100 hover:text-white text-sm transition-colors inline-block"
        >
          {label}
        </motion.span>
      </Link>
    </li>
  );
}
