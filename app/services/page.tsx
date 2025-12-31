"use client";

import Image from "next/image";
import { Truck, ShieldCheck, Sprout, Factory, Clock, Thermometer } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/vegetables/vegetablecutting5.jpg" 
            alt="Services Hero" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-green-100 max-w-2xl mx-auto font-light">
              End-to-end vegetable supply chain solutions tailored for commercial kitchens.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">How We Work</h2>
              <h3 className="text-4xl font-bold text-gray-900">The Vegeebook Process</h3>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-200 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <ProcessStep 
                icon={<Sprout className="w-8 h-8" />} 
                title="Sourcing" 
                desc="Direct procurement from partner farmers."
                step="01"
                delay={0.1}
              />
              <ProcessStep 
                icon={<Factory className="w-8 h-8" />} 
                title="Processing" 
                desc="Cleaning, peeling, and precision cutting."
                step="02"
                delay={0.3}
              />
              <ProcessStep 
                icon={<ShieldCheck className="w-8 h-8" />} 
                title="Quality Check" 
                desc="Rigorous 3-step inspection process."
                step="03"
                delay={0.5}
              />
              <ProcessStep 
                icon={<Truck className="w-8 h-8" />} 
                title="Delivery" 
                desc="Timely delivery in temperature-controlled vehicles."
                step="04"
                delay={0.7}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/vegetables/vegetablecutting3.jpg" 
                  alt="Farm Sourcing" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Farm-to-Business Sourcing</h3>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Direct from the Source</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We eliminate middlemen by working directly with local farmers. This ensures that the vegetables you receive are harvested at peak ripeness and reach your kitchen faster than traditional market routes.
              </p>
              <ul className="space-y-4">
                <ServiceFeature text="Fair pricing for farmers" />
                <ServiceFeature text="Reduced carbon footprint" />
                <ServiceFeature text="Traceable origin" />
              </ul>
            </FadeIn>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <FadeIn direction="left">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image 
                    src="/images/vegetables/vegetablecutting4.jpg" 
                    alt="Hygienic Processing" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Factory className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Hygienic Processing</h3>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="md:order-1">
              <FadeIn direction="right">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">State-of-the-Art Facility</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our processing unit follows strict hygiene protocols. Vegetables are washed in ozonized water to remove pesticides and bacteria, then peeled and cut using food-grade machinery.
                </p>
                <ul className="space-y-4">
                  <ServiceFeature text="Ozonized water cleaning" />
                  <ServiceFeature text="Temperature controlled environment" />
                  <ServiceFeature text="Zero-touch packaging" />
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/vegetables/vegetablecutting6.jpg" 
                  alt="Logistics" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="bg-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Smart Logistics</h3>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Reliable Delivery</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We understand that timing is critical in the food business. Our logistics network ensures that your order arrives exactly when you need it, maintaining the cold chain throughout the journey.
              </p>
              <ul className="space-y-4">
                <ServiceFeature text="Morning & Evening slots" />
                <ServiceFeature text="Real-time order tracking" />
                <ServiceFeature text="Emergency delivery support" />
              </ul>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-6">Ready to streamline your operations?</h2>
            <p className="text-xl text-green-100 mb-10">Let us handle the prep work while you focus on the cooking.</p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ icon, title, desc, step, delay }: { icon: React.ReactNode, title: string, desc: string, step: string, delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-green-50 transition-colors">
          {step}
        </div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </FadeIn>
  );
}

function ServiceFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
        <ShieldCheck className="w-3 h-3" />
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </li>
  );
}
