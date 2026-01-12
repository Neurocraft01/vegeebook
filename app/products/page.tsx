"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { Check, ArrowRight, Leaf, ChefHat, Package } from "lucide-react";
import Link from "next/link";

const vegetables = [
  { name: "Methi", hindiName: "मेथी", type: "Leafy", desc: "Fresh, Cleaned", image: "/product/methi.jpg" },
  { name: "Palak", hindiName: "पालक", type: "Leafy", desc: "Fresh, Cleaned", image: "/product/palak.jpg" },
  { name: "Tomato", hindiName: "टमाटर", type: "Fruit", desc: "Whole, Puree, Diced", image: "/product/tomato.jpg" },
  { name: "Mirchi", hindiName: "मिर्ची", type: "Spice", desc: "Stemless, Chopped", image: "/product/mirchi.jpeg" },
  { name: "Potato", hindiName: "आलू", type: "Root", desc: "Peeled, Cubed, Sliced", image: "/product/potato.jpg" },
  { name: "Brinjal", hindiName: "बैंगन", type: "Fruit", desc: "Whole, Diced", image: "/product/brinjal.jpeg" },
  { name: "Sponge Gourd", hindiName: "तोरई", type: "Gourd", desc: "Fresh, Cut", image: "/product/sponge gourd.jpg" },
  { name: "Bhendi", hindiName: "भिंडी", type: "Pod", desc: "Fresh, Cut", image: "/product/bhendi.jpg" },
  { name: "Couli Flower", hindiName: "फूलगोभी", type: "Flower", desc: "Florets, Cleaned", image: "/product/couli flower.jpg" },
  { name: "Gavar", hindiName: "गवार", type: "Legume", desc: "Fresh, Cleaned", image: "/product/gavar.jpg" },
  { name: "Cabbage", hindiName: "पत्ता गोभी", type: "Leafy", desc: "Shredded, Whole", image: "/product/cabbage.jpg" },
  { name: "Carrot", hindiName: "गाजर", type: "Root", desc: "Peeled, Diced, Julienne", image: "/product/carrot.jpg" },
  { name: "Kukumber Green", hindiName: "खीरा", type: "Gourd", desc: "Sliced, Whole", image: "/product/kukumber green.jpg" },
  { name: "Onion", hindiName: "प्याज", type: "Bulb", desc: "Peeled, Sliced, Diced", image: "/product/onion.jpg" },
  { name: "Pumpkin", hindiName: "कद्दू", type: "Gourd", desc: "Diced, Sliced", image: "/product/pumpkin.jpeg" },
  { name: "Beetroot", hindiName: "चुकंदर", type: "Root", desc: "Peeled, Diced", image: "/product/Beetroot.png" },
];

const cuts = [
  { title: "Diced / Cubed", desc: "Perfect uniform cubes for curries and stews.", image: "/product/diced cube.jpg" },
  { title: "Sliced / Rings", desc: "Consistent thickness for salads and frying.", image: "/product/Sliced  Rings vegetables.jpg" },
  { title: "Julienne", desc: "Fine strips for stir-fries and garnishing.", image: "/product/Julienne.jpg" },
  { title: "Paste / Puree", desc: "Smooth blends for bases and marinades.", image: "/product/Paste Puree vegetables.jpg" },
  { title: "Chopped", desc: "Uniformly chopped for bases and garnishes.", image: "/product/chopped.jpeg" },
  { title: "Mincing", desc: "Finely minced ingredients for rich flavor.", image: "/product/mincing.jpeg" },
];

export default function Products() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-green-900">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/vegetables/vegetablecutting1.jpg" 
            alt="Fresh Produce" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Premium Products</h1>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-green-500 hover:shadow-md transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={veg.image}
                      alt={veg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{veg.name}</h4>
                        <p className="text-lg text-green-600 font-bold">{veg.hindiName}</p>
                      </div>
                      <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {veg.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 flex-1">{veg.desc}</p>
                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Daily Fresh</span>
                        <span className="text-xs font-bold text-green-600 mt-0.5">Min. 5kg</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <Check className="w-3 h-3" />
                      </div>
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

      {/* Customer Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-4xl font-bold text-gray-900">Customer Benefits</h3>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Clean", 
              "Freshly Cut Vegetables", 
              "Zero Waste", 
              "Customized Cuts",
              "Food Grade Packaging", 
              "Doorstep Delivery", 
              "Online Booking, Hygienic", 
              "Highly Convenient"
            ].map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-green-50 p-6 rounded-2xl text-center hover:bg-green-100 transition-colors h-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm">
                      <Check className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-gray-800">{benefit}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
