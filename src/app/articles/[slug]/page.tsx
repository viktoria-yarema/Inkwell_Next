import { getArticleById } from "@/entities/articles/api/getArticleById";
import getArticleImage from "@/entities/articles/utils/getArticleImage";
import { getTags } from "@/entities/tags/api/getTags";
import { getUser } from "@/entities/user/api/getUser";
import RichTextRenderer from "@/shared/components/RichTextRenderer";
import { formatDate } from "@/shared/utils/utils";
import { Metadata } from "next";
import Image from "next/image";
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
  const [article, tags, user] = await Promise.all([getArticleById(slug), getTags(), getUser()]);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article className="pb-16 container-custom">
        <div className="bg-light-primary-yellow/30">
          <div className="">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{article.title}</h1>
              <div className="flex w-fit mx-auto bg-primary-yellow/90 text-white text-sm font-medium px-4 py-1 rounded-full">
                {article.tags.map(tagId => tags.find(tag => tag.id === tagId)?.title).join(", ")}
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                <time dateTime={article.publishedAt.toString()}>
                  {formatDate(article.publishedAt.toString())}
                </time>
                <span>
                  By {user.firstName} {user.lastName}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="relative aspect-video w-full max-h-96 mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={getArticleImage(article.coverImage)}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-yellow mx-auto">
            <RichTextRenderer delta={JSON.parse(JSON.stringify(article.content))} />
          </div>
        </div>
      </article>

      {/* TODO: Related Articles */}
      {/* <section className="container-custom pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Related Articles</h2>
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
