import { getArticleById } from "@/entities/articles/api/getArticleById";
import { getTags } from "@/entities/tags/api/getTags";
import { getUser } from "@/entities/user/api/getUser";
import { BackButton } from "@/shared/components/BackButton";
import { formatDate } from "@/shared/utils/utils";

type ArticleHeaderSectionProps = {
  slug: string;
};

export default async function ArticleHeaderSection({ slug }: ArticleHeaderSectionProps) {
  const [article, tags, user] = await Promise.all([getArticleById(slug), getTags(), getUser()]);

  if (!article) {
    return null;
  }

  return (
    <div className="bg-light-primary/30 flex flex-col gap-6">
      <BackButton />
      <div className="max-w-3xl flex items-center justify-center flex-col gap-2 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-dark">{article.title}</h1>
        <div className="flex gap-2 items-center flex-wrap justify-center">
          <div className="flex w-fit h-fit bg-primary/90 text-xs text-white font-medium px-4 py-1 rounded-full">
            {article.tags.map(tagId => tags.find(tag => tag.id === tagId)?.title).join(", ")}
          </div>
          <span className="text-primary-dark/60">•</span>
          <div className="flex items-center justify-center gap-2 text-xs text-primary-dark/60 font-light">
            <time
              dateTime={article.publishedAt.toString()}
              className="text-xs flex items-center gap-1"
            >
              {formatDate(article.publishedAt.toString())}
            </time>
            <span>•</span>
            <span className="flex">
              {user.firstName} {user.lastName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
