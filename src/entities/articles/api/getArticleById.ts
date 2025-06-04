import { formatArticle } from "@/entities/articles/utils";
import { apiRequest } from "@/shared/api/instance";
import { unstable_cache } from "next/cache";
import { Article } from "../type";

const fetchArticleById = async (id: string): Promise<Article> => {
  const response = await apiRequest<Article>(`/articles/${id}`);
  return formatArticle(response);
};

export const getArticleById = unstable_cache(fetchArticleById, ["article-by-id"], {
  revalidate: 1000 * 60 * 60 * 24,
});
