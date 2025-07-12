"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Users, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Star,
  ChevronDown,
  Globe,
  Sparkles,
  Shield,
  BookOpen,
  Clock,
  CheckCircle,
  ChevronUp,
  Play,
  Award,
  Target,
  Sun,
  MessageCircle,
  GraduationCap,
  Stethoscope,
  FileText,
  Moon
} from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { programs, events, testimonials, impactStats } from "@/lib/cms";
import { useApp } from "@/contexts/AppContext";

// Custom Logo Component
const AbhyudayaLogo = ({ size = "w-12 h-12", className = "" }) => (
  <div className={`${size} bg-gradient-to-br from-sky-400 to-sky-600 rounded-full shadow-lg ${className}`} />
);

// Hero Logo Component
const HeroLogo = () => (
  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-sky-400 to-sky-600 rounded-full shadow-2xl" />
);

export default function Home() {
  const { language, setLanguage, isDarkMode, toggleDarkMode, t } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use CMS data for programs
  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    MessageCircle,
    Target,
    Heart,
    Shield,
    GraduationCap,
    Sparkles,
    Users,
    BookOpen,
    FileText
  };

  // Icon mapping for impact stats
  const impactIconMap: Record<string, React.ElementType> = {
    Heart,
    Users,
    Target,
    Star
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 transform
          ${scrollY > 50
            ? 'opacity-100 translate-y-0 pointer-events-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'opacity-0 -translate-y-8 pointer-events-none bg-transparent'}
        `}
      >
        {/* Mobile Menu Button - Always visible */}
        <div className="md:hidden absolute top-4 right-4 z-50">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg transition-colors ${
              scrollY > 50
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                : 'bg-white/20 backdrop-blur-sm text-white'
            }`}
          >
            {isMenuOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </motion.button>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <AbhyudayaLogo />
              <span className={`text-2xl font-bold text-gray-900 dark:text-white ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('common.ngoName')}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('navigation.about')}
              </a>
              <a href="#programs" className={`text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('navigation.programs')}
              </a>
              <a href="#impact" className={`text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('navigation.impact')}
              </a>
              <a href="#events" className={`text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('navigation.events')}
              </a>
              <a href="#donate" className={`text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('navigation.donate')}
              </a>
                              <motion.button
                  onClick={() => setIsContactOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 bg-sky-400 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                  }`}
                >
                  {t('navigation.contactUs')}
                </motion.button>
              
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'kn')}
                  className={`bg-transparent border-none text-gray-700 dark:text-gray-300 focus:outline-none font-medium ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                  }`}
                >
                  <option value="en">English</option>
                  <option value="kn">ಕನ್ನಡ</option>
                </select>
              </div>
              

            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <div className="px-4 py-6 space-y-4">
                    <a href="#about" className={`block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>
                      {t('navigation.about')}
                    </a>
                    <a href="#programs" className={`block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>
                      {t('navigation.programs')}
                    </a>
                    <a href="#impact" className={`block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>
                      {t('navigation.impact')}
                    </a>
                    <a href="#events" className={`block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>
                      {t('navigation.events')}
                    </a>
                    <a href="#donate" className={`block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-medium ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>
                      {t('navigation.donate')}
                    </a>
                    <motion.button
                      onClick={() => setIsContactOpen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full px-6 py-2 bg-sky-400 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}
                    >
                      {t('navigation.contactUs')}
                    </motion.button>
                    
                    {/* Mobile Dark Mode Toggle */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className={`text-gray-700 dark:text-gray-300 font-medium ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                      </span>
                      <motion.button
                        onClick={toggleDarkMode}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      </motion.button>
                    </div>
                    
                    {/* Mobile Language Selector */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className={`text-gray-700 dark:text-gray-300 font-medium ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>Language</span>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <select 
                          value={language}
                          onChange={(e) => setLanguage(e.target.value as 'en' | 'kn')}
                          className={`bg-transparent border-none text-gray-700 dark:text-gray-300 focus:outline-none font-medium ${
                            language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                          }`}
                        >
                          <option value="en">English</option>
                          <option value="kn">ಕನ್ನಡ</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center flex flex-col justify-center h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Logo */}
              <div className="mb-8">
                <HeroLogo />
              </div>
              
              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-6xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-6 text-gray-900 dark:text-white relative ${
                  language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                }`}
              >
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
                  {t('common.ngoName').split(' ')[0]}
                </span>
                <br />
                <span className={`text-gray-800 dark:text-gray-200 ${
                  language === 'kn' ? 'md:text-6xl lg:text-7xl xl:text-8xl text-4xl sm:text-5xl' : ''
                }`}>
                  {t('common.ngoName').split(' ')[1]}
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${
                  language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                }`}
              >
                {t('hero.subtitle')}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Our Mission & Vision Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
            }`}>
              {t('about.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-sky-100 dark:border-sky-900"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
              }`}>{t('about.mission.title')}</h3>
              <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-lg ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('about.mission.content')}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-sky-100 dark:border-sky-900"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
              }`}>{t('about.vision.title')}</h3>
              <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-lg ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                {t('about.vision.content')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Programs & Services Section */}
      <section id="programs" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-gray-900 dark:text-white ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
            }`}>
              {t('programs.title')}
            </h2>
            <p className={`text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
            }`}>
              {t('programs.subtitle')}
            </p>
          </motion.div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = iconMap[program.icon];
              return (
                <motion.div 
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-sky-100 dark:border-sky-900 h-full overflow-hidden">
                    {/* Placeholder Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800 flex items-center justify-center">
                      <div className="w-20 h-20 bg-sky-400 rounded-2xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                      }`}>{program.title}</h3>
                      <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-sm ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>{program.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="md:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
              {programs.map((program, index) => {
                const IconComponent = iconMap[program.icon];
                return (
                  <motion.div 
                    key={program.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group flex-shrink-0"
                    style={{ minWidth: '240px', maxWidth: '240px' }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 dark:border-sky-900 h-full overflow-hidden">
                      {/* Placeholder Image */}
                      <div className="w-full h-24 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800 flex items-center justify-center">
                        <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className={`text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 ${
                          language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                        }`}>{program.title}</h3>
                        <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-xs line-clamp-3 ${
                          language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                        }`}>{program.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>

      {/* Impact & Testimonials Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-sky-50 to-white dark:from-sky-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-gray-900 dark:text-white ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
            }`}>
              {t('impact.title')}
            </h2>
            <p className={`text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
            }`}>
              {t('impact.subtitle')}
            </p>
          </motion.div>

          {/* Desktop Impact Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-wrap justify-center gap-8 mb-16"
          >
            {impactStats.map((stat, index) => {
              const IconComponent = impactIconMap[stat.icon];
              return (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-sky-100 dark:border-sky-900 w-full max-w-xs"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent mb-2 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-gray-600 dark:text-gray-300 font-medium text-lg ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                  }`}>{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Impact Stats */}
          <div className="md:hidden mb-16">
            <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
              {impactStats.map((stat, index) => {
                const IconComponent = impactIconMap[stat.icon];
                return (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex-shrink-0 text-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 dark:border-sky-900"
                    style={{ minWidth: '160px', maxWidth: '160px' }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent mb-1 ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-gray-600 dark:text-gray-300 font-medium text-xs ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop Testimonials Grid */}
          <div className="hidden md:flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-sky-100 dark:border-sky-900 h-full flex flex-col w-full max-w-sm"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                
                {/* Testimonial Content */}
                <p className={`text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic text-lg flex-grow ${
                  language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                }`}>
                  "{testimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mr-4">
                    <span className={`text-sky-600 font-bold text-lg ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold text-gray-900 dark:text-white ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                    }`}>{testimonial.name}</h3>
                    <p className={`text-gray-600 dark:text-gray-300 text-sm ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Testimonials */}
          <div className="md:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 dark:border-sky-900 h-full flex flex-col"
                  style={{ minWidth: '280px', maxWidth: '280px' }}
                >
                  {/* Quote Icon */}
                  <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-sky-500 rounded-lg flex items-center justify-center mb-3 shadow-lg">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className={`text-gray-700 dark:text-gray-300 leading-relaxed mb-3 italic text-sm flex-grow line-clamp-4 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                  }`}>
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mr-3">
                      <span className={`text-sky-600 font-bold text-sm ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold text-gray-900 dark:text-white ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                      }`}>{testimonial.name}</h3>
                      <p className={`text-gray-600 dark:text-gray-300 text-xs ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events & Workshops Section */}
      <section id="events" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-gray-900 dark:text-white ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
            }`}>
              {t('events.title')}
            </h2>
            <p className={`text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
            }`}>
              {t('events.subtitle')}
            </p>
          </motion.div>

          {/* Desktop Events Grid */}
          <div className="hidden md:flex flex-wrap justify-center gap-8">
            {events.slice(0, 6).map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-sky-100 dark:border-sky-900 overflow-hidden w-full max-w-sm"
              >
                {/* Placeholder Image */}
                <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800 flex items-center justify-center">
                  <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-inter font-medium">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-inter text-gray-500">{event.date}</div>
                      <div className="text-xs font-inter text-gray-400">{event.time}</div>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                  }`}>{event.title}</h3>
                  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                  }`}>
                    {event.description}
                  </p>
                  

                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Events */}
          <div className="md:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
              {events.slice(0, 6).map((event, index) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 dark:border-sky-900 overflow-hidden"
                  style={{ minWidth: '280px', maxWidth: '280px' }}
                >
                  {/* Placeholder Image */}
                  <div className="w-full h-32 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800 flex items-center justify-center">
                    <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-inter font-medium">
                        {event.type}
                      </span>
                      <div className="text-right">
                        <div className="text-xs font-inter text-gray-500">{event.date}</div>
                        <div className="text-xs font-inter text-gray-400">{event.time}</div>
                      </div>
                    </div>
                    
                    <h3 className={`text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                    }`}>{event.title}</h3>
                    <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-xs mb-3 line-clamp-3 ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>
                      {event.description}
                    </p>
                    

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* View All Events Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-sky-400 text-white rounded-2xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('events.viewAllEvents')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-sky-400 to-sky-600 relative overflow-hidden dark:from-sky-900 dark:to-sky-800">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 dark:bg-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
            }`}>
              {t('donate.title')}
            </h2>
            <p className={`text-base md:text-xl text-sky-100 dark:text-sky-200 mb-8 md:mb-12 max-w-3xl mx-auto ${
              language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
            }`}>
              {t('donate.description')}
            </p>
            
            {/* Desktop Donation Options */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: t('donate.supportChild'),
                  amount: "₹2,500/month",
                  description: t('donate.supportChildDescription'),
                  icon: Heart
                },
                {
                  title: t('donate.sponsorTherapy'),
                  amount: "₹1,500/month",
                  description: t('donate.sponsorTherapyDescription'),
                  icon: Shield
                },
                {
                  title: t('donate.donateDevices'),
                  amount: "₹5,000+",
                  description: t('donate.donateDevicesDescription'),
                  icon: Award
                }
              ].map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-2 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                  }`}>{option.title}</h3>
                  <div className={`text-3xl font-bold text-sky-200 mb-4 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                  }`}>{option.amount}</div>
                  <p className={`text-sky-100 dark:text-sky-200 mb-6 ${
                    language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                  }`}>{option.description}</p>

                </motion.div>
              ))}
            </div>

            {/* Mobile Donation Options */}
            <div className="md:hidden mb-12">
              <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
                {[
                  {
                    title: t('donate.supportChild'),
                    amount: "₹2,500/month",
                    description: t('donate.supportChildDescription'),
                    icon: Heart
                  },
                  {
                    title: t('donate.sponsorTherapy'),
                    amount: "₹1,500/month",
                    description: t('donate.sponsorTherapyDescription'),
                    icon: Shield
                  },
                  {
                    title: t('donate.donateDevices'),
                    amount: "₹5,000+",
                    description: t('donate.donateDevicesDescription'),
                    icon: Award
                  }
                ].map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex-shrink-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    style={{ minWidth: '240px', maxWidth: '240px' }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold text-white mb-2 text-center ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                    }`}>{option.title}</h3>
                    <div className={`text-xl font-bold text-sky-200 mb-3 text-center ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                    }`}>{option.amount}</div>
                    <p className={`text-sky-100 dark:text-sky-200 text-sm mb-4 text-center line-clamp-3 ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                    }`}>{option.description}</p>

                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <AbhyudayaLogo />
                <span className={`text-2xl font-bold ${
                  language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                }`}>{t('common.ngoName')}</span>
              </div>
                             <p className={`text-gray-400 dark:text-gray-500 mb-6 max-w-md leading-relaxed ${
                               language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                             }`}>
                 {t('footer.description')}
               </p>
            </div>
            <div>
                              <h3 className={`text-lg font-bold mb-6 ${
                                language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                              }`}>{t('footer.contactInfo')}</h3>
              <div className={`space-y-4 text-gray-400 dark:text-gray-500 ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sky-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-sky-400" />
                  <span>info@abhyudaya.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-sky-400" />
                  <span>Bangalore, Karnataka</span>
                </div>
              </div>
            </div>
            <div>
                              <h3 className={`text-lg font-bold mb-6 ${
                                language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                              }`}>{t('footer.quickLinks')}</h3>
              <div className={`space-y-3 ${
                language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
              }`}>
                <a href="#about" className="block text-gray-400 dark:text-gray-500 hover:text-sky-400 transition-colors">{t('footer.about')}</a>
                <a href="#programs" className="block text-gray-400 dark:text-gray-500 hover:text-sky-400 transition-colors">{t('footer.programs')}</a>
                <a href="#impact" className="block text-gray-400 dark:text-gray-500 hover:text-sky-400 transition-colors">{t('footer.impact')}</a>
                <a href="#events" className="block text-gray-400 dark:text-gray-500 hover:text-sky-400 transition-colors">{t('footer.events')}</a>
                <a href="#donate" className="block text-gray-400 dark:text-gray-500 hover:text-sky-400 transition-colors">{t('footer.donate')}</a>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="block text-gray-400 dark:text-gray-500 hover:text-sky-400 transition-colors text-left"
                >
                  {t('footer.contact')}
                </button>
              </div>
            </div>
          </div>
          <div className={`border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 ${
            language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
          }`}>
            <p>&copy; {new Date().getFullYear()} {t('common.ngoName')}. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <Transition appear show={isContactOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsContactOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`text-2xl font-bold text-gray-900 mb-6 ${
                      language === 'kn' ? 'font-baloo-tamma' : 'font-playfair'
                    }`}
                  >
                    {t('contact.title')}
                  </Dialog.Title>
                  <form className="space-y-6">
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>{t('contact.name')}</label>
                      <input 
                        type="text" 
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 ${
                          language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>{t('contact.email')}</label>
                      <input 
                        type="email" 
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 ${
                          language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}>{t('contact.message')}</label>
                      <textarea 
                        rows={4}
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 ${
                          language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                        }`}
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 bg-sky-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                        language === 'kn' ? 'font-baloo-tamma' : 'font-inter'
                      }`}
                    >
                      {t('contact.sendMessage')}
                    </motion.button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
