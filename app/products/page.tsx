"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { Check, ArrowRight, Leaf, ChefHat, Package } from "lucide-react";
import Link from "next/link";

const vegetables = [
  { name: "Onion", type: "Root", desc: "Peeled, Sliced, Diced" },
  { name: "Potato", type: "Root", desc: "Peeled, Cubed, Sliced" },
  { name: "Tomato", type: "Fruit", desc: "Whole, Puree, Diced" },
  { name: "Ginger", type: "Root", desc: "Peeled, Paste, Julienne" },
  { name: "Garlic", type: "Bulb", desc: "Peeled, Paste, Chopped" },
  { name: "Carrot", type: "Root", desc: "Peeled, Diced, Julienne" },
  { name: "Green Chilli", type: "Spice", desc: "Stemless, Chopped" },
  { name: "Lemon", type: "Citrus", desc: "Whole, Juice" },
  { name: "Coriander", type: "Herb", desc: "Cleaned, Chopped" },
  { name: "Mint", type: "Herb", desc: "Cleaned, Plucked" },
  { name: "Curry Leaves", type: "Herb", desc: "Cleaned, Plucked" },
  { name: "Coconut", type: "Fruit", desc: "Grated, Sliced, Whole" },
];

const cuts = [
  { title: "Diced / Cubed", desc: "Perfect uniform cubes for curries and stews.", image: "/images/vegetables/chopped carrot.jpg" },
  { title: "Sliced / Rings", desc: "Consistent thickness for salads and frying.", image: "/images/vegetables/choppedonion.jpg" },
  { title: "Julienne", desc: "Fine strips for stir-fries and garnishing.", image: "/images/vegetables/vegetablecutting2.jpg" },
  { title: "Paste / Puree", desc: "Smooth blends for bases and marinades.", image: "/images/vegetables/vegetablecutting7.jpg" },
];

export default function Products() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-green-900">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/vegetables/vegetablecutting1.jpg" 
            alt="Fresh Produce" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Premium Produce</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Freshly sourced, hygienically processed, and ready for your kitchen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Cuts Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Customization</h2>
              <h3 className="text-4xl font-bold text-gray-900">Precision Cuts</h3>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Save hours of prep time with our pre-cut vegetables. Tailored to your chef's specifications.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cuts.map((cut, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={cut.image} 
                      alt={cut.title} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{cut.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{cut.desc}</p>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <ChefHat className="w-4 h-4 mr-2" />
                      Chef Ready
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <FadeIn direction="right">
              <div>
                <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Catalog</h2>
                <h3 className="text-4xl font-bold text-gray-900">Available Vegetables</h3>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <Link href="/contact" className="hidden md:flex items-center text-green-600 font-bold hover:text-green-700 transition-colors mt-4 md:mt-0">
                Request Full Price List <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vegetables.map((veg, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-green-500 hover:shadow-md transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {veg.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{veg.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{veg.desc}</p>
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Daily Fresh</span>
                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <Check className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/contact" className="inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors">
              Request Full Price List <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packaging Info */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <FadeIn direction="right">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Hygienic Packaging</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We use food-grade packaging materials that extend shelf life and maintain freshness. 
                  Available in various sizes to suit your daily consumption needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Vacuum packing available</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom weight packets (1kg, 5kg, 10kg)</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Labelled with packing date</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <FadeIn direction="left">
                <div className="relative w-64 h-64 bg-green-100 rounded-full flex items-center justify-center">
                  <Package className="w-32 h-32 text-green-600" />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                    <p className="font-bold text-green-800">100% Food Grade</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
