import type { Article } from '@/entities/articles/type';
import getArticleImage from '@/entities/articles/utils/getArticleImage';
import { Tag } from '@/entities/tags/type';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ARTICLE_PATH } from '../routes/paths';
import { cn } from '../utils/cn';
import { formatDate } from '../utils/utils';

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
  tags: Tag[];
};

export default function ArticleCard({ article, featured = false, tags }: ArticleCardProps) {
  const articleCategories = article.tags
    .map(tagId => tags.find(tag => tagId == tag.id)?.title ?? '')
    .filter(Boolean);

  return (
    <article
      className={cn('bg-white rounded-2xl overflow-hidden shadow-sm card-hover', {
        'md:col-span-2': featured,
      })}
    >
      <Link href={`${ARTICLE_PATH.replace(':id', article.id)}`} className="block">
        <div className="relative aspect-video w-full">
          <Image
            unoptimized
            src={getArticleImage(article.coverImage)}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-primary-yellow/90 text-white text-xs font-medium px-3 py-1 rounded-full">
            {articleCategories.join(', ')}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-800 mb-3">
            <time dateTime={article.publishedAt.toString()}>
              {formatDate(article.publishedAt.toString())}
            </time>
          </div>

          <h3
            className={`font-bold text-gray-800 transition-colors ${featured ? 'text-2xl mb-3' : 'text-xl mb-2'}`}
          >
            {article.title}
          </h3>

          <p className="inline-flex items-center font-medium text-primary-yellow hover:text-primary-yellow/80 transition-colors">
            Read more
            <ChevronRight size={20} />
          </p>
        </div>
      </Link>
    </article>
  );
}
