import { apiRequest } from "@/shared/api/instance";
import { ArticleStatus, GetArticlesQuery, GetArticlesResponse } from "../type";
import { formatArticle } from "../utils";

export const getArticles = async (query: GetArticlesQuery): Promise<GetArticlesResponse> => {
  const response = await apiRequest<GetArticlesResponse>(`/articles?page=${query.page}&limit=${query.limit}&status=${ArticleStatus.PUBLISHED}`);
  return { ...response, articles: response.articles.map((article) => formatArticle(article)) };
};
