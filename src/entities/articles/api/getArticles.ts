import { apiRequest } from "@/shared/api/instance";
import { unstable_cache } from "next/cache";
import { ArticleStatus, GetArticlesData, GetArticlesQuery, GetArticlesResponse } from "../type";
import { formatArticle } from "../utils";

const fetchArticles = async (query: GetArticlesQuery): Promise<GetArticlesData> => {
  const params = new URLSearchParams({
    page: query.page?.toString() ?? "1",
    limit: query.limit?.toString() ?? "10",
    status: ArticleStatus.PUBLISHED,
    tag: query.tag ?? "",
  });

  const response = await apiRequest<GetArticlesResponse>(`/articles?${params.toString()}`);
  return { ...response, items: response.articles?.map(article => formatArticle(article)) };
};

export const getArticles = unstable_cache(fetchArticles, ["articles"], { revalidate: false });
