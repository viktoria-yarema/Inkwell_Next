import { apiRequest } from '@/shared/api/instance';
import { ArticleStatus, GetArticlesData, GetArticlesQuery, GetArticlesResponse } from '../type';
import { formatArticle } from '../utils';

export const getArticles = async (query: GetArticlesQuery): Promise<GetArticlesData> => {
  const params = new URLSearchParams({
    page: query.page?.toString() ?? '1',
    limit: query.limit?.toString() ?? '10',
    status: ArticleStatus.PUBLISHED,
    tag: query.tag ?? '',
  });

  const response = await apiRequest<GetArticlesResponse>(`/articles?${params.toString()}`);
  return { ...response, items: response.articles?.map(article => formatArticle(article)) };
};
