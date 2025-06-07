"use client";

import { ARTICLE_PATH } from "@/shared/routes/paths";
import { cn } from "@/shared/utils/cn";
import { matchPath } from "@/shared/utils/matchPath";
import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const BackButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isArticlePath = matchPath(pathname, ARTICLE_PATH);

  return (
    <button
      onClick={() => router.back()}
      role="link"
      aria-label="Back"
      className={cn(
        "text-primary cursor-pointer h-10 self-start py-1 pr-4 items-center justify-between flex rounded-full md:hidden",
        {
          "animate-disappear": !isArticlePath,
          "animate-appear": isArticlePath,
        }
      )}
    >
      <ChevronLeft size={20} />
      <p className="text-base text-font-medium">Go Back</p>
    </button>
  );
};
