import { AUTHOR_ID } from '../constants/auth';

export const getImageUrl = (imageUrl: string) => {
  if (!imageUrl) return imageUrl;

  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  const bucketPath = process.env.NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET || 'bucket';
  return `${bucketPath}/${AUTHOR_ID}${imageUrl}`;
};
