import { apiRequest } from "@/shared/api/instance";
import { Article } from "../type";
import { formatArticle } from "@/entities/articles/utils";

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await apiRequest<Article>(`/articles/${id}`);
  return formatArticle(response);
};
