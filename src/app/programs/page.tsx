'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Filter, 
  Search, 
  Clock, 
  Users, 
  CheckCircle,
  Stethoscope,
  MessageCircle,
  Target,
  Heart,
  Shield,
  GraduationCap,
  Sparkles,
  BookOpen,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import { programs } from '@/lib/cms';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  MessageCircle,
  Target,
  Heart,
  Shield,
  GraduationCap,
  Sparkles,
  BookOpen,
  Users,
  FileText
};

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(programs.map(p => p.category)))];
  
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-inter text-gray-600">Back to Home</span>
            </Link>
            <div className="text-2xl font-playfair font-bold text-gray-900">
              Abhyudaya Trust
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-400 to-sky-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/10 rounded-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-white">
              Our Programs & Services
            </h1>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto font-inter">
              Comprehensive programs designed to support every aspect of a child&apos;s development 
              and family needs through personalized care and innovative therapies.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search programs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 shadow-lg focus:ring-2 focus:ring-white/50 focus:outline-none font-inter"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 py-3 rounded-2xl border-0 shadow-lg focus:ring-2 focus:ring-white/50 focus:outline-none font-inter appearance-none bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">No programs found</h3>
              <p className="text-gray-600 font-inter">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => {
                const IconComponent = iconMap[program.icon];
                return (
                  <motion.div 
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-sky-100 overflow-hidden"
                  >
                    {/* Program Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center relative">
                      <div className="w-20 h-20 bg-sky-400 rounded-2xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-sky-400 text-white rounded-full text-xs font-inter font-medium">
                          {program.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-inter text-sm mb-6">
                        {program.description}
                      </p>
                      
                      {/* Program Details */}
                      <div className="space-y-3 mb-6">
                        {program.duration && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="font-inter">{program.duration}</span>
                          </div>
                        )}
                        {program.capacity && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="font-inter">{program.capacity}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Features */}
                      {program.features && program.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 font-inter">Key Features:</h4>
                          <div className="space-y-2">
                            {program.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                                <span className="font-inter">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-sky-400 text-white rounded-xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Contact us to learn more about our programs and how we can support your child&apos;s development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-sky-400 text-white rounded-2xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </motion.button>
              <Link href="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-sky-400 border-2 border-sky-400 rounded-2xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Events
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 