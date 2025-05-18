import { apiRequest } from '@/shared/api/instance';
import { Tag } from '../type';
import { formatTag } from '../utils';

export const getTags = async (): Promise<Tag[]> => {
  const response = await apiRequest<Tag[]>('/tags');
  return response?.map(formatTag) ?? [];
};
