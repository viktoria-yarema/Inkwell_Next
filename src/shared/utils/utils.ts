import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function generateStructuredData(type: 'article' | 'person', data: any) {
  if (type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.excerpt,
      image: data.coverImage,
      datePublished: data.publishedAt,
      dateModified: data.updatedAt,
    };
  }

  if (type === 'person') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: data.name,
      jobTitle: data.role,
      description: data.bio,
      image: data.avatar,
    };
  }

  return null;
}
