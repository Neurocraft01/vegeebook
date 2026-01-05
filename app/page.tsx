"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Leaf, Trash2, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import FadeIn from "./components/FadeIn";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero_background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
              Kitchen Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Vegetables Delivered
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-300 font-light leading-relaxed">
              We wash, peel, and precision-cut fresh produce so you can focus on creating culinary masterpieces.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-green-900/20 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all border border-white/20"
                >
                  View Catalog
                </motion.button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <StatItem value={500} suffix="+" label="Daily Orders" delay={0.2} />
            <StatItem value={100} suffix="%" label="Hygienic" delay={0.4} />
            <StatItem value={1000} suffix="+" label="5 Star Ratings" delay={0.6} />
            <StatItem value={24} suffix="/7" label="Support" delay={0.8} />
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <motion.div 
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 transition-all duration-500"
                >
                  <Image 
                    src="/vegetables/vegetablecutting2.jpg" 
                    alt="Kitchen struggle" 
                    width={600} 
                    height={800} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn delay={0.2}>
                <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">The Challenge</h2>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Is your kitchen overwhelmed?</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Sourcing, cleaning, and chopping vegetables takes up 40% of your kitchen staff's time. It's labor-intensive, inconsistent, and creates massive waste.
                </p>
              </FadeIn>
              
              <div className="space-y-6">
                <FadeIn delay={0.4} direction="left">
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Wasted Manpower</h4>
                      <p className="text-sm text-gray-500">Skilled chefs spending hours on menial prep work.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.6} direction="left">
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                      <Trash2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">High Wastage</h4>
                      <p className="text-sm text-gray-500">Paying for peels, roots, and spoiled produce.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">The Solution</h2>
              <h3 className="text-4xl font-bold text-gray-900">Why Top Kitchens Choose Vegeebook</h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Leaf className="w-8 h-8" />}
              title="Farm Fresh"
              desc="Sourced directly from farmers for maximum shelf life and flavor."
              image="/vegetables/vegetablecutting3.jpg"
              delay={0.2}
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8" />}
              title="100% Hygienic"
              desc="Washed in ozonized water and processed in a sterile facility."
              image="/vegetables/vegetablecutting4.jpg"
              delay={0.4}
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8" />}
              title="Ready to Cook"
              desc="Precision cuts that go straight from the pack to the pan."
              image="/vegetables/vegetablecutting5.jpg"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/cta_background.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to optimize your kitchen?</h2>
            <p className="text-xl text-gray-300 mb-10">Join hundreds of food businesses saving time and money with Vegeebook.</p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-full transition-all shadow-2xl"
              >
                Request a Quote
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, suffix, label, delay }: { value: number, suffix: string, label: string, delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <FadeIn delay={delay} direction="up">
      <div ref={ref}>
        <p className="text-4xl font-bold text-green-600 flex justify-center items-center">
          <motion.span>{display}</motion.span>
          <span>{suffix}</span>
        </p>
        <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">{label}</p>
      </div>
    </FadeIn>
  );
}

function FeatureCard({ icon, title, desc, image, delay }: { icon: React.ReactNode, title: string, desc: string, image: string, delay: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="bg-green-500 p-2 rounded-lg inline-block mb-2 shadow-lg">
              {icon}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}
