export type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  authorId: string;
  status: ArticleStatus;
  tags: string[];
  coverImage: string;
  publishedAt: string | Date;
};

export enum ArticleStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}


export type GetArticlesQuery = {
  page?: number;
  limit?: number;
};

export type GetArticlesResponse = {
  articles: Article[];
  meta: {
    total: number;
    page: number;
    totalPages: number;
  };
};

