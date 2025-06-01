import { getArticleById } from "@/entities/articles/api/getArticleById";
import { getTags } from "@/entities/tags/api/getTags";
import { getUser } from "@/entities/user/api/getUser";
import RichTextRenderer from "@/shared/components/RichTextRenderer";
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
  const [article, tags, user] = await Promise.all([getArticleById(slug), getTags(), getUser()]);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article className="pb-16 container-custom flex flex-col gap-10">
        <div className="bg-light-primary/30">
          <div className="max-w-3xl flex items-center justify-center flex-col gap-2 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex gap-2 items-center">
              <div className="flex w-fit h-fit bg-primary/90 text-white text-sm font-medium px-4 py-1 rounded-full">
                {article.tags.map(tagId => tags.find(tag => tag.id === tagId)?.title).join(", ")}
              </div>
              <div className="flex items-center justify-center gap-2 text-font-primary/80 text-xs">
                <time
                  dateTime={article.publishedAt.toString()}
                  className="text-xs flex items-center gap-1"
                ></time>
                <span>•</span>
                <span className="flex">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-yellow mx-auto">
            <RichTextRenderer delta={JSON.parse(JSON.stringify(article.content))} />
          </div>
        </div>
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
