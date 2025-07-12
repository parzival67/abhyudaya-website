import { Program, Event, Testimonial } from './types';
import { programs } from './data/programs';
import { events } from './data/events';
import { testimonials } from './data/testimonials';

// Program utilities
export const getProgramById = (id: string): Program | undefined => {
  return programs.find(program => program.id === id);
};

export const getProgramsByCategory = (category: string): Program[] => {
  return programs.filter(program => program.category === category);
};

export const getAllProgramCategories = (): string[] => {
  return [...new Set(programs.map(program => program.category))];
};

// Event utilities
export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getEventsByType = (type: string): Event[] => {
  return events.filter(event => event.type === type);
};

export const getUpcomingEvents = (): Event[] => {
  // For now, return all events. In a real app, you'd filter by date
  return events;
};

export const getAllEventTypes = (): string[] => {
  return [...new Set(events.map(event => event.type))];
};

// Testimonial utilities
export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
};

export const getFeaturedTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};

export const getTestimonialsByRating = (rating: number): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating >= rating);
};

// Search utilities
export const searchPrograms = (query: string): Program[] => {
  const lowercaseQuery = query.toLowerCase();
  return programs.filter(program => 
    program.title.toLowerCase().includes(lowercaseQuery) ||
    program.description.toLowerCase().includes(lowercaseQuery) ||
    program.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchEvents = (query: string): Event[] => {
  const lowercaseQuery = query.toLowerCase();
  return events.filter(event => 
    event.title.toLowerCase().includes(lowercaseQuery) ||
    event.description.toLowerCase().includes(lowercaseQuery) ||
    event.type.toLowerCase().includes(lowercaseQuery)
  );
};

// Pagination utilities
export const paginateData = <T>(data: T[], page: number, limit: number): T[] => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return data.slice(startIndex, endIndex);
};

export const getTotalPages = (totalItems: number, itemsPerPage: number): number => {
  return Math.ceil(totalItems / itemsPerPage);
}; 