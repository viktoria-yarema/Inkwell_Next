import { apiRequest } from "@/shared/api/instance";
import { Article } from "../type";
import { formatArticle } from "@/entities/articles/utils";

export const getArticles = async (): Promise<Article[]> => {
  const response = await apiRequest<Article[]>("/articles");
  return [];
};
