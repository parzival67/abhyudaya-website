// Export all CMS data and utilities
export * from './types';
export * from './data/programs';
export * from './data/events';
export * from './data/testimonials';
export * from './data/impact-stats';
export * from './translations';

// Re-export the main CMS data
export { programs } from './data/programs';
export { events } from './data/events';
export { testimonials } from './data/testimonials';
export { impactStats } from './data/impact-stats';
export { translations, getTranslation } from './translations'; 