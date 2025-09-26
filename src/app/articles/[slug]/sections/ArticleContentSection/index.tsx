import { getArticleById } from "@/entities/articles/api/getArticleById";
import RichTextRenderer from "@/shared/components/RichTextRenderer";

type ArticleContentSectionProps = {
  slug: string;
};

export default async function ArticleContentSection({ slug }: ArticleContentSectionProps) {
  const article = await getArticleById(slug);

  if (!article) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="prose prose-lg prose-yellow mx-auto">
        <RichTextRenderer delta={JSON.parse(JSON.stringify(article.content))} />
      </div>
    </div>
  );
}
