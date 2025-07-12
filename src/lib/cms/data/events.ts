import { Event } from '../types';

export const events: Event[] = [
  {
    id: "parent-workshop-1",
    title: "Parent Support Workshop",
    description: "Weekly workshops for parents to learn effective strategies for supporting their children's development. Topics include behavior management, communication techniques, and stress management.",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    type: "Workshop",
    image: "/images/events/parent-workshop.jpg",
    location: "Main Center",
    registrationRequired: true,
    maxParticipants: 20,
    currentParticipants: 15
  },
  {
    id: "awareness-campaign-1",
    title: "Awareness Campaign",
    description: "International Day of Persons with Disabilities - Join us in raising awareness and promoting inclusion. Activities include educational sessions, community outreach, and advocacy programs.",
    date: "December 3rd",
    time: "All Day Event",
    type: "Campaign",
    image: "/images/events/awareness-campaign.jpg",
    location: "Community Center",
    registrationRequired: false
  },
  {
    id: "therapy-training-1",
    title: "Therapy Training Session",
    description: "Training sessions for caregivers and family members on basic therapy techniques and exercises. Learn practical skills to support your child's development at home.",
    date: "Monthly",
    time: "2:00 PM - 4:00 PM",
    type: "Training",
    image: "/images/events/therapy-training.jpg",
    location: "Training Room",
    registrationRequired: true,
    maxParticipants: 15,
    currentParticipants: 8
  },
  {
    id: "community-meetup-1",
    title: "Community Meet & Greet",
    description: "Monthly community gathering for families to connect, share experiences, and build support networks. Light refreshments provided.",
    date: "First Sunday",
    time: "11:00 AM - 2:00 PM",
    type: "Community",
    image: "/images/events/community-meetup.jpg",
    location: "Garden Area",
    registrationRequired: false
  },
  {
    id: "fundraising-walkathon-1",
    title: "Fundraising Walkathon",
    description: "Annual walkathon to raise funds and awareness for children with special needs in our community. Join us for a fun-filled day of walking, activities, and community building.",
    date: "March 15th",
    time: "7:00 AM - 11:00 AM",
    type: "Fundraiser",
    image: "/images/events/walkathon.jpg",
    location: "City Park",
    registrationRequired: true,
    maxParticipants: 200,
    currentParticipants: 150
  },
  {
    id: "art-therapy-session-1",
    title: "Art & Music Therapy",
    description: "Creative therapy sessions using art and music to enhance emotional expression and motor skills. Open to all children and their families.",
    date: "Every Wednesday",
    time: "3:00 PM - 5:00 PM",
    type: "Therapy",
    image: "/images/events/art-therapy-session.jpg",
    location: "Creative Studio",
    registrationRequired: true,
    maxParticipants: 12,
    currentParticipants: 10
  }
]; 