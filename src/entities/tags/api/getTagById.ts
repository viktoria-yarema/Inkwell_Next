import { Tag } from '../type';
import { formatTag } from '../utils';
import { apiRequest } from '@/shared/api/instance';

export const getTagById = async (id: string): Promise<Tag> => {
  const response = await apiRequest<Tag>(`/tags/${id}`);
  return formatTag(response);
};
