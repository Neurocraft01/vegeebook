"use client";

import Image from "next/image";
import { Target, Award, Users, ArrowRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/images/vegetables/vegetablecutting7.jpg" 
            alt="About Header" 
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Story</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Revolutionizing the vegetable supply chain for food businesses since 2023.</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* Our Story */}
        <section id="story" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              <FadeIn direction="right">
                <div className="absolute -inset-4 bg-green-100 rounded-3xl transform -rotate-3"></div>
                <motion.div 
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
                >
                  <Image 
                    src="/images/vegetables/vegetablecutting1.jpg" 
                    alt="Our Story" 
                    width={800} 
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </FadeIn>
            </div>
            <div className="md:w-1/2">
              <FadeIn direction="left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-1 bg-green-500"></span>
                  <h2 className="text-3xl font-bold text-gray-900">The Beginning</h2>
                </div>
                <div className="prose prose-lg text-gray-600 space-y-6">
                  <p>
                    Vegeebook Solutions (OPC) Private Limited was founded in January 2023 by <strong>Mr. Keshav Hissal</strong> in Pune, with a singular mission: to solve the vegetable management crisis in commercial kitchens.
                  </p>
                  <p>
                    We observed that chefs and restaurant owners were spending valuable hours on sourcing, cleaning, and chopping vegetables—tasks that diverted focus from their core art of cooking.
                  </p>
                  <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-800 bg-gray-50 p-4 rounded-r-lg">
                    "To reform the vegetables market by creating a win-win-win situation for all stakeholders."
                  </blockquote>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Redesigned */}
        <section id="vision" className="scroll-mt-24">
          <div className="relative bg-gray-900 rounded-[3rem] overflow-hidden p-8 md:p-16">
            <div className="absolute inset-0 opacity-10">
              <Image 
                src="/images/vegetables/vegetablecutting3.jpg" 
                alt="Background" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="right">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Driving the Future of Food Supply</h2>
                  <p className="text-gray-400 text-lg">
                    We are not just selling vegetables; we are building an infrastructure that empowers kitchens to be more efficient, sustainable, and profitable.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">01</div>
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">02</div>
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">03</div>
                  </div>
                </div>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.2} direction="left">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 p-3 rounded-xl text-white">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                          To serve fresh, clean, cut, hygienic ready-to-cook vegetables to individuals & businesses, setting a global standard for food safety and convenience.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>

                <FadeIn delay={0.4} direction="left">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500 p-3 rounded-xl text-white">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                          To reform the vegetables market by creating a sustainable ecosystem that benefits farmers, businesses, and consumers alike through technology and innovation.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section id="team" className="scroll-mt-24">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
              <p className="mt-4 text-gray-600">The visionaries driving Vegeebook forward</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Keshav Hissal" 
              role="Founder & CEO" 
              image="/images/team/team_keshav hissal.jpeg"
              delay={0.2}
            />
            <TeamMember 
              name="Sheikh Jabir" 
              role="COO" 
              image="/images/team/team_Shekh Jabir.jpeg"
              delay={0.4}
            />
            <TeamMember 
              name="Prahlad Damdhar" 
              role="CMO" 
              image="/images/team/team_prahlad damdhar.jpeg"
              delay={0.6}
            />
            <TeamMember 
              name="Priya Puri" 
              role="CSO" 
              image="/images/team/team_priya puri.jpeg"
              delay={0.8}
            />
          </div>
        </section>

        {/* Board of Advisors */}
        <section id="advisors" className="scroll-mt-24 pb-12">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900">Board of Advisors</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMember 
              name="Aditya Deshpande" 
              role="Sr. Incubation Manager @DPU Unitech Foundation" 
              image="/images/team/team_aditya deshpande.jpeg"
              delay={0.2}
            />
            <TeamMember 
              name="Priya Puri" 
              role="Founder of Sustainable Business Union" 
              image="/images/team/team_priya puri.jpeg"
              delay={0.4}
            />
          </div>
        </section>

      </div>
    </div>
  );
}

function TeamMember({ name, role, image, delay }: { name: string, role: string, image: string, delay: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-80 w-full overflow-hidden bg-gray-100">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm font-medium text-green-600 uppercase tracking-wider">{role}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}
