// import type { Metadata } from "next"
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleById } from '@/entities/articles/api/getArticleById';
import { Metadata } from 'next';
import RichTextRenderer from '@/shared/components/RichTextRenderer';
import { getImageUrl } from '@/shared/utils/getImage';
import { AUTHOR_ID } from '@/shared/constants/auth';
import { getTags } from '@/entities/tags/api/getTags';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleById(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  // TODO: add description to article and cover image
  return {
    title: article.title,
    // description: article.description,
    openGraph: {
      title: article.title,
      // description: article.excerpt,
      type: 'article',
      // publishedTime: article.publishedAt,
      // modifiedTime: article.updatedAt,
      images: [
        {
          url: article.coverImage ?? '/placeholder.svg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const [article, tags] = await Promise.all([getArticleById(params.slug), getTags()]);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article className="pb-16">
        <div className="bg-light-primary-yellow/30 pt-12 pb-16">
          <div className="container-custom">
            <Link
              href="/articles"
              className="inline-flex items-center text-gray-600 hover:text-primary-yellow mb-6 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Articles
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary-yellow/90 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
                {article.tags.map(tagId => tags.find(tag => tag.id === tagId)?.title).join(', ')}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                {/* <time dateTime={article.publishedAt}>{formatDate(new Date(article.publishedAt).toString())}</time> */}
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
                {/* <span>By {article.author.name}</span> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom -mt-10 mb-12">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={getImageUrl(`/articles/${article.coverImage}`, AUTHOR_ID)}
              alt={article.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-yellow mx-auto">
              <RichTextRenderer delta={JSON.parse(JSON.stringify(article.content))} />
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="container-custom pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Related Articles</h2>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div> */}
      </section>
    </>
  );
}
