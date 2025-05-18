import { getImageUrl } from '@/shared/utils/getImage';

const getArticleImage = (image: string) => {
  return getImageUrl(`/articles/${image}`);
};

export default getArticleImage;
