import { apiRequest } from "@/shared/api/instance";
import { GetArticlesQuery, GetArticlesResponse } from "../type";
// import { formatArticle } from "@/entities/articles/utils";

export const getArticles = async (query: GetArticlesQuery): Promise<GetArticlesResponse> => {
  const response = await apiRequest<GetArticlesResponse>(`/articles?page=${query.page}&limit=${query.limit}`);
  return response;
};
