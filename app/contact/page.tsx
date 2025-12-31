"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    phone: "",
    inquiryType: "",
    message: "",
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-green-900 py-20 text-center text-white">
        <FadeIn direction="down">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-green-100">We'd love to hear from you</p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">
        <FadeIn delay={0.4} direction="up">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-gray-50 p-10 border-r border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tejas Heights, SNo. 140, Gurudwara, Chinchwad, Walhekarwadi, Pune, Maharashtra India, 411033
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 text-sm">info@vegeebooksolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 text-sm">+91 9226593412</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-green-900 rounded-2xl text-white">
                <h4 className="font-bold mb-2">Business Hours</h4>
                <p className="text-sm text-green-100 mb-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-sm text-green-100">Sunday: Closed</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup label="First Name" name="firstName" onChange={handleChange} />
                  <InputGroup label="Last Name" name="lastName" onChange={handleChange} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup label="Email" name="email" type="email" onChange={handleChange} />
                  <InputGroup label="Phone" name="phone" type="tel" onChange={handleChange} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup label="Organization" name="organization" onChange={handleChange} />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      name="inquiryType"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50"
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Farmer">I am Farmer</option>
                      <option value="FoodBusiness">Food Business Owner</option>
                      <option value="Supplier">Supplier/Vendor</option>
                      <option value="Investor">Investor</option>
                      <option value="JobSeeker">Job Seeker</option>
                      <option value="Other">Other</option>
                    </motion.select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 resize-none"
                    onChange={handleChange}
                  ></motion.textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="agreed"
                    required
                    id="agreed"
                    className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                    onChange={handleCheckbox}
                  />
                  <label htmlFor="agreed" className="text-gray-600 text-sm cursor-pointer select-none">
                    I agree to the Terms & Conditions of Vegeebook
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function InputGroup({ label, name, type = "text", onChange }: { label: string, name: string, type?: string, onChange: (e: any) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type={type}
        name={name}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50"
        onChange={onChange}
      />
    </div>
  );
}
