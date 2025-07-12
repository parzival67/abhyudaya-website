# Abhyudaya Trust CMS

This directory contains all the content management system (CMS) data for the Abhyudaya Trust website. The CMS is structured to be easily maintainable and extensible.

## Structure

```
src/lib/cms/
├── index.ts              # Main exports and re-exports
├── types.ts              # TypeScript type definitions
├── translations.ts       # Multi-language translations (English & Kannada)
├── utils.ts              # Utility functions
├── README.md             # This file
└── data/                 # Content data files
    ├── programs.ts       # Programs and services data
    ├── events.ts         # Events and workshops data
    ├── testimonials.ts   # Testimonials and success stories
    └── impact-stats.ts   # Impact statistics and metrics
```

## Files Overview

### `index.ts`
Main entry point that exports all CMS data and utilities. Use this file to import any CMS content in your components.

### `types.ts`
TypeScript interfaces and types for all CMS data structures. Ensures type safety across the application.

### `translations.ts`
Multi-language support for English and Kannada. Contains all text content organized by sections:
- Navigation
- Hero section
- About section
- Programs section
- Impact section
- Events section
- Donate section
- Footer
- Contact form
- Common elements

### `utils.ts`
Helper functions for data manipulation, filtering, and searching.

### `data/` Directory
Contains all the actual content data:

#### `programs.ts`
Programs and services offered by Abhyudaya Trust:
- Physiotherapy
- Occupational Therapy
- Speech Therapy
- Special Education
- Early Intervention
- Assistive Technology
- Family Support
- Vocational Training
- Recreational Activities
- Medical Support

#### `events.ts`
Events, workshops, and community programs:
- Awareness workshops
- Training sessions
- Community events
- Fundraising events
- Educational programs

#### `testimonials.ts`
Success stories and testimonials from families and beneficiaries.

#### `impact-stats.ts`
Key performance indicators and impact metrics.

## Image Guidelines

### Directory Structure
```
public/images/
├── programs/          # Program-related images
├── events/            # Event photos and banners
├── testimonials/      # Testimonial profile pictures
├── gallery/           # General gallery images
├── team/              # Team member photos
└── news/              # News and updates images
```

### Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Optimize for web (max 2MB per image)
- **Dimensions**: 
  - Hero images: 1920x1080px
  - Program cards: 400x300px
  - Event banners: 800x400px
  - Profile pictures: 200x200px
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `physiotherapy-session.jpg`)

## Usage Examples

### Importing CMS Data
```typescript
import { programs, events, testimonials, impactStats } from '@/lib/cms';
```

### Using Translations
```typescript
import { useApp } from '@/contexts/AppContext';

const MyComponent = () => {
  const { t, language } = useApp();
  
  return (
    <h1>{t('about.title')}</h1>
  );
};
```

### Adding New Content

1. **New Program**: Add to `data/programs.ts`
2. **New Event**: Add to `data/events.ts`
3. **New Testimonial**: Add to `data/testimonials.ts`
4. **New Translation**: Add to `translations.ts` for both languages

### Adding New Languages

1. Add the new language type to `translations.ts`
2. Create translation object for the new language
3. Update the `Language` type union
4. Update the `translations` record

## Best Practices

1. **Type Safety**: Always use the defined types when adding new content
2. **Consistency**: Follow the existing naming conventions
3. **Localization**: Always provide translations for both languages
4. **Images**: Optimize images and use appropriate formats
5. **Updates**: Update this README when adding new content types

## Maintenance

- Regularly review and update content
- Optimize images for better performance
- Keep translations synchronized between languages
- Monitor for any type mismatches
- Update impact statistics regularly 