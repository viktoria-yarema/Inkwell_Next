export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

type ArticleData = {
  title: string;
  excerpt?: string;
  coverImage?: string;
  publishedAt?: string;
  updatedAt?: string;
};

type PersonData = {
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
};

export function generateStructuredData(type: 'article', data: ArticleData): Record<string, unknown>;
export function generateStructuredData(type: 'person', data: PersonData): Record<string, unknown>;
export function generateStructuredData(
  type: 'article' | 'person',
  data: ArticleData | PersonData
): Record<string, unknown> | null {
  if (type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: (data as ArticleData).title,
      description: (data as ArticleData).excerpt,
      image: (data as ArticleData).coverImage,
      datePublished: (data as ArticleData).publishedAt,
      dateModified: (data as ArticleData).updatedAt,
    };
  }

  if (type === 'person') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: (data as PersonData).name,
      jobTitle: (data as PersonData).role,
      description: (data as PersonData).bio,
      image: (data as PersonData).avatar,
    };
  }

  return null;
}
