// CMS Types for Abhyudaya Trust Website

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: string;
  duration?: string;
  capacity?: string;
  features?: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: string;
  image: string;
  location?: string;
  registrationRequired: boolean;
  maxParticipants?: number;
  currentParticipants?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ImpactStat {
  id: string;
  number: string;
  label: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications?: string[];
}

export interface DonationTier {
  id: string;
  title: string;
  amount: string;
  description: string;
  icon: string;
  benefits?: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
} 