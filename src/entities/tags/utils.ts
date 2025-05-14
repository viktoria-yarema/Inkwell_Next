import { Tag } from './type';
import { format, parseISO } from 'date-fns';

export const formatTag = (tag: Tag): Tag => {
  return {
    ...tag,
    title: tag.title.charAt(0).toUpperCase() + tag.title.slice(1),
    createdAt: format(parseISO(tag.createdAt as string), 'dd MMMM yyyy'),
    updatedAt: format(parseISO(tag.updatedAt as string), 'dd MMMM yyyy'),
  };
};
