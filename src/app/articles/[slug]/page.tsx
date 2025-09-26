import { getArticleById } from "@/entities/articles/api/getArticleById";
import ArticleHeaderSection from "./sections/ArticleHeaderSection";
import ArticleContentSection from "./sections/ArticleContentSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

type ArticlePageProps = {
  params: Params;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleById(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  // TODO: add description to article and cover image
  return {
    title: article.title,
    // description: article.description,
    openGraph: {
      title: article.title,
      // description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt.toString(),
      images: [
        {
          url: article.coverImage ?? "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleById(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article className="pb-16 pt-6 container-custom flex flex-col gap-4 md:gap-6 lg:gap-8">
        <ArticleHeaderSection slug={slug} />
        <ArticleContentSection slug={slug} />
      </article>

      {/* TODO: Related Articles */}
      {/* <section className="container-custom pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold title">Related Articles</h2>
          <p className="subtitle">
            Discover more articles that might interest you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section> */}
    </>
  );
}
