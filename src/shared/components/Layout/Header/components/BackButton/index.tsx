'use client';

import { ARTICLE_PATH } from '@/shared/routes/paths';
import { cn } from '@/shared/utils/cn';
import { matchPath } from '@/shared/utils/matchPath';
import { ChevronLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export const BackButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isArticlePath = matchPath(pathname, ARTICLE_PATH);

  return (
    <button
      onClick={() => router.back()}
      className={cn('text-primary-yellow cursor-pointer flex lg:hidden', {
        'animate-disappear': !isArticlePath,
        'animate-appear': isArticlePath,
      })}
    >
      <ChevronLeft />
    </button>
  );
};
