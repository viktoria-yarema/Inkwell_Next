import type { Article } from "@/entities/articles/type";
import getArticleImage from "@/entities/articles/utils/getArticleImage";
import { Tag } from "@/entities/tags/type";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ARTICLE_PATH } from "../routes/paths";
import { cn } from "../utils/cn";
import { formatDate } from "../utils/utils";
import { Card } from "./ui/card";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
  tags: Tag[];
};

export default function ArticleCard({ article, featured = false, tags }: ArticleCardProps) {
  const articleCategories = article.tags
    .map(tagId => tags.find(tag => tagId == tag.id)?.title ?? "")
    .filter(Boolean);

  return (
    <Card
      className={cn("rounded-2xl overflow-hidden card-hover", {
        "md:col-span-2": featured,
      })}
    >
      <Link href={`${ARTICLE_PATH.replace(":id", article.id)}`} className="block">
        <div className="relative aspect-video w-full">
          <Image
            src={getArticleImage(article.coverImage)}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
            {articleCategories.join(", ")}
          </div>
        </div>

        <div className="p-6 flex justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-primary/80 text-xs font-light">
              Published:
              <time dateTime={article.publishedAt.toString()}>
                {formatDate(article.publishedAt.toString())}
              </time>
            </div>

            <h3 className={`font-bold text-primary transition-colors text-3xl`}>
              {article.title}
            </h3>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full h-12 w-12 border border-primary p-2">
            <MoveUpRight size={28} className="text-primary" />
          </div>
        </div>
      </Link>
    </Card>
  );
}
