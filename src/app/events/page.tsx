'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Filter, 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle,
  XCircle,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { events } from '@/lib/cms';

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const eventTypes = ['All', ...Array.from(new Set(events.map(e => e.type)))];
  
  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'All' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getEventTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Workshop': 'bg-blue-100 text-blue-600',
      'Campaign': 'bg-green-100 text-green-600',
      'Training': 'bg-purple-100 text-purple-600',
      'Community': 'bg-orange-100 text-orange-600',
      'Fundraiser': 'bg-red-100 text-red-600',
      'Therapy': 'bg-pink-100 text-pink-600'
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  };

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
              Events & Workshops
            </h1>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto font-inter">
              Join our community events, workshops, and awareness programs designed to support 
              families and promote inclusion.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 shadow-lg focus:ring-2 focus:ring-white/50 focus:outline-none font-inter"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="pl-12 pr-8 py-3 rounded-2xl border-0 shadow-lg focus:ring-2 focus:ring-white/50 focus:outline-none font-inter appearance-none bg-white"
                  >
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 font-inter">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-sky-100 overflow-hidden"
                >
                  {/* Event Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Event Details */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-right">
                        <div className="text-sm font-inter text-gray-500">{event.date}</div>
                        <div className="text-xs font-inter text-gray-400">{event.time}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-inter text-sm mb-4">
                      {event.description}
                    </p>
                    
                    {/* Event Info */}
                    <div className="space-y-2 mb-6">
                      {event.location && (
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-inter">{event.location}</span>
                        </div>
                      )}
                      {event.maxParticipants && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="font-inter">
                            {event.currentParticipants || 0}/{event.maxParticipants} participants
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Registration Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {event.registrationRequired ? (
                          <>
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-sm font-inter text-green-600">Registration Required</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="text-sm font-inter text-gray-500">No Registration Required</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
                        event.registrationRequired 
                          ? 'bg-sky-400 text-white hover:bg-sky-500' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {event.registrationRequired ? (
                        <>
                          Register Now
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        'Learn More'
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
              Upcoming Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Don&apos;t miss these important events and opportunities to connect with our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.filter(e => e.registrationRequired).slice(0, 2).map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-sky-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-sm font-inter text-gray-500">{event.date}</div>
                    <div className="text-xs font-inter text-gray-400">{event.time}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed font-inter mb-6">
                  {event.description}
                </p>
                
                {event.maxParticipants && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-inter mb-2">
                      <span>Registration Progress</span>
                      <span>{event.currentParticipants || 0}/{event.maxParticipants}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-sky-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((event.currentParticipants || 0) / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-sky-400 text-white rounded-xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Subscribe to our newsletter to stay updated on upcoming events and community activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-sky-400 text-white rounded-2xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe to Newsletter
              </motion.button>
              <Link href="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-sky-400 border-2 border-sky-400 rounded-2xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Programs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 