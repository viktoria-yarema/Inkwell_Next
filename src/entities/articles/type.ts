export type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  authorId: string;
  status: ArticleStatus;
  tags: string[];
};

export enum ArticleStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}
